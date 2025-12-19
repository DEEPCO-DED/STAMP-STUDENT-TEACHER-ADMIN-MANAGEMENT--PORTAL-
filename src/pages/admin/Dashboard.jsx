import { useEffect, useState } from "react";

export default function Dashboard() {
  // COURSE STATE
  const [courseName, setCourseName] = useState("");
  const [courses, setCourses] = useState([]);

  // TEACHER STATE
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [teachers, setTeachers] = useState([]);

  // LOAD DATA
  useEffect(() => {
    setCourses(JSON.parse(localStorage.getItem("courses")) || []);
    setTeachers(JSON.parse(localStorage.getItem("teachers")) || []);
  }, []);

  // ADD COURSE
  const addCourse = () => {
    if (!courseName.trim()) return;

    const newCourse = {
      courseId: Date.now(),
      courseName: courseName.trim(),
    };

    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    setCourseName("");
  };

  // DELETE COURSE (ADMIN POWER)
  const deleteCourse = (courseId) => {
    if (!window.confirm("Delete this course permanently?")) return;

    // remove course
    const updatedCourses = courses.filter(
      (c) => c.courseId !== courseId
    );
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    // remove teachers under this course
    const updatedTeachers = teachers.filter(
      (t) => t.courseId !== courseId
    );
    setTeachers(updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
  };

  // ADD TEACHER
  const addTeacher = () => {
    if (!teacherName || !teacherEmail || !selectedCourseId) {
      alert("All fields required");
      return;
    }

    const newTeacher = {
      teacherId: Date.now(),
      name: teacherName.trim(),
      email: teacherEmail.trim().toLowerCase(),
      courseId: selectedCourseId,
      password: "dev@2025",
    };

    const updatedTeachers = [...teachers, newTeacher];
    setTeachers(updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));

    setTeacherName("");
    setTeacherEmail("");
    setSelectedCourseId("");
  };

  // DELETE TEACHER
  const deleteTeacher = (teacherId) => {
    if (!window.confirm("Delete this teacher permanently?")) return;

    const updatedTeachers = teachers.filter(
      (t) => t.teacherId !== teacherId
    );
    setTeachers(updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* ADD COURSE */}
      <div style={{ marginBottom: 30 }}>
        <h3>Add Course</h3>
        <input
          type="text"
          placeholder="Course name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <button onClick={addCourse}>Add Course</button>

        <ul>
          {courses.map((course) => (
            <li key={course.courseId}>
              {course.courseName}
              <button
                style={{ marginLeft: 10 }}
                onClick={() => deleteCourse(course.courseId)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ADD TEACHER */}
      <div>
        <h3>Add Teacher</h3>
        <input
          type="text"
          placeholder="Teacher Name"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Teacher Email"
          value={teacherEmail}
          onChange={(e) => setTeacherEmail(e.target.value)}
        />
         <br />
        <select
          value={selectedCourseId}
          onChange={(e) => setSelectedCourseId(e.target.value)}
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course.courseId} value={course.courseId}>
              {course.courseName}
            </option>
          ))}
        </select>
        <button onClick={addTeacher}>Add Teacher</button>

        <ul>
          {teachers.map((teacher) => {
            const course = courses.find(
              (c) => c.courseId == teacher.courseId
            );

            return (
              <li key={teacher.teacherId}>
                {teacher.name} — {course?.courseName}
                <button
                  style={{ marginLeft: 10 }}
                  onClick={() => deleteTeacher(teacher.teacherId)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

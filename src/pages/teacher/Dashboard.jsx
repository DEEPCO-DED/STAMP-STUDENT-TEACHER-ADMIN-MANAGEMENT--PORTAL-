import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState(null);
  const [classes, setClasses] = useState([]);

  const [className, setClassName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [selectedClassId, setSelectedClassId] = useState("");

  // 🔥 LOAD LOGGED-IN TEACHER + CLASSES
  useEffect(() => {
    const loggedUser = JSON.parse(
      localStorage.getItem("loggedInUser")
    );

    if (!loggedUser || loggedUser.role !== "teacher") {
      navigate("/login");
      return;
    }

    setTeacher(loggedUser);

    const allClasses =
      JSON.parse(localStorage.getItem("classes")) || [];

    const myClasses = allClasses.filter(
      (cls) => cls.teacherId === loggedUser.teacherId
    );

    setClasses(myClasses);
  }, [navigate]);

  // 🔥 CREATE CLASS
  const createClass = () => {
    if (!className.trim()) return;

    const newClass = {
      classId: Date.now(),
      className: className.trim(),
      teacherId: teacher.teacherId,
      courseId: teacher.courseId,
      students: [],
    };

    const allClasses =
      JSON.parse(localStorage.getItem("classes")) || [];

    allClasses.push(newClass);
    localStorage.setItem("classes", JSON.stringify(allClasses));

    setClasses([...classes, newClass]);
    setClassName("");
  };

  // 🗑 DELETE CLASS
  const deleteClass = (classId) => {
    if (!window.confirm("Delete this class permanently?")) return;

    const allClasses =
      JSON.parse(localStorage.getItem("classes")) || [];

    const updatedClasses = allClasses.filter(
      (cls) => cls.classId !== classId
    );

    localStorage.setItem(
      "classes",
      JSON.stringify(updatedClasses)
    );

    setClasses(
      updatedClasses.filter(
        (cls) => cls.teacherId === teacher.teacherId
      )
    );
  };

  // 🔥 ADD STUDENT
  const addStudent = () => {
    if (!studentName || !studentEmail || !selectedClassId) return;

    const allClasses =
      JSON.parse(localStorage.getItem("classes")) || [];

    const updatedClasses = allClasses.map((cls) => {
      if (cls.classId === Number(selectedClassId)) {
        return {
          ...cls,
          students: [
            ...cls.students,
            {
              studentId: Date.now(),
              name: studentName.trim(),
              email: studentEmail.trim(),
            },
          ],
        };
      }
      return cls;
    });

    localStorage.setItem(
      "classes",
      JSON.stringify(updatedClasses)
    );

    setClasses(
      updatedClasses.filter(
        (cls) => cls.teacherId === teacher.teacherId
      )
    );

    setStudentName("");
    setStudentEmail("");
  };

  // 🗑 DELETE STUDENT
  const deleteStudent = (classId, studentId) => {
    if (!window.confirm("Remove this student?")) return;

    const allClasses =
      JSON.parse(localStorage.getItem("classes")) || [];

    const updatedClasses = allClasses.map((cls) => {
      if (cls.classId === classId) {
        return {
          ...cls,
          students: cls.students.filter(
            (stu) => stu.studentId !== studentId
          ),
        };
      }
      return cls;
    });

    localStorage.setItem(
      "classes",
      JSON.stringify(updatedClasses)
    );

    setClasses(
      updatedClasses.filter(
        (cls) => cls.teacherId === teacher.teacherId
      )
    );
  };

  if (!teacher) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Teacher Dashboard</h2>

      {/* CREATE CLASS */}
      <section>
        <h3>Create Class</h3>
        <input
          placeholder="Class Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <button onClick={createClass}>Create Class</button>
      </section>

      {/* ADD STUDENT */}
      <section style={{ marginTop: "20px" }}>
        <h3>Add Student</h3>

        <input
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <input
          placeholder="Student Email"
          value={studentEmail}
          onChange={(e) => setStudentEmail(e.target.value)}
        />

        <select
          value={selectedClassId}
          onChange={(e) => setSelectedClassId(e.target.value)}
        >
          <option value="">Select Class</option>
          {classes.map((cls) => (
            <option key={cls.classId} value={cls.classId}>
              {cls.className}
            </option>
          ))}
        </select>

        <button onClick={addStudent}>Add Student</button>
      </section>

      {/* VIEW CLASSES */}
      <section style={{ marginTop: "30px" }}>
        <h3>Your Classes</h3>

        {classes.length === 0 ? (
          <p>No classes created yet.</p>
        ) : (
          classes.map((cls) => (
            <div key={cls.classId} style={{ marginBottom: "20px" }}>
              <h4>
                {cls.className}
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => deleteClass(cls.classId)}
                >
                  Delete Class
                </button>
              </h4>

              <ul>
                {cls.students.map((stu) => (
                  <li key={stu.studentId}>
                    {stu.name} ({stu.email})
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() =>
                        deleteStudent(cls.classId, stu.studentId)
                      }
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= PUBLIC ================= */
import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import DemoRequests from "./components/DemoRequests";

/* ================= PORTAL LAYOUT ================= */
import PortalLayout from "./layout/PortalLayout";

/* ================= STUDENT ================= */
import StudentDashboard from "./pages/student/Dashboard";
import Attendance from "./pages/student/Attendance";
import StudentAnnouncements from "./pages/student/StudentAnnouncements";
import StudentFeeNotification from "./pages/student/StudentFeeNotification";

/* ================= TEACHER ================= */
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherAttendance from "./pages/teacher/Attendance";
import ClassLog from "./pages/teacher/ClassLog";
import TeacherAnnouncement from "./pages/teacher/TeacherAnnouncement";

/* ================= ADMIN ================= */
import AdminDashboard from "./pages/admin/Dashboard";
import AdminFeeNotification from "./pages/admin/AdminFeeNotification";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Homepage />
              <Footer />
            </>
          }
        />

        {/* ================= LOGIN ================= */}
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />

        {/* ================= ABOUT ================= */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        {/* ================= CONTACT ================= */}
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* ================= BOOK DEMO (FIXED) ================= */}
        <Route
          path="/book-demo"
          element={
            <>
              <Navbar />
              <DemoRequests />
              <Footer />
            </>
          }
        />

        {/* ================= STUDENT PORTAL ================= */}
        <Route path="/student" element={<PortalLayout role="student" />}>
          <Route index element={<StudentDashboard />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="announcements" element={<StudentAnnouncements />} />
          <Route
            path="fees-notifications"
            element={<StudentFeeNotification />}
          />
        </Route>

        {/* ================= TEACHER PORTAL ================= */}
        <Route path="/teacher" element={<PortalLayout role="teacher" />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="classlog" element={<ClassLog />} />
          <Route path="attendance" element={<TeacherAttendance />} />
          <Route path="announcements" element={<TeacherAnnouncement />} />
        </Route>

        {/* ================= ADMIN PORTAL ================= */}
        <Route path="/admin" element={<PortalLayout role="admin" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="fees" element={<AdminFeeNotification />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

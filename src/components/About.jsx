import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">

        {/* TEXT SECTION */}
        <div className="about-text">
          <h2>About Our Student Portal</h2>

         <p>
  <strong className="stamp-highlight">STAMP</strong> (Student Teacher Admin Management Portal)
  is a centralized academic platform that connects administrators,
  teachers, and students.
</p>


          <p>
            The portal simplifies academic management by providing
            role-based access and transparent communication.
          </p>

          <ul>
            <li>✔ Admin manages courses and teachers</li>
            <li>✔ Teachers manage classes and attendance</li>
            <li>✔ Students track academic activities</li>
          </ul>

          {/* MISSION */}
          <div className="mission-vision">
            <h3>Our Mission</h3>
            <p>
              To simplify and digitize academic operations by providing a
              secure, user-friendly platform that enhances collaboration
              between administrators, teachers, and students.
            </p>

            <h3>Our Vision</h3>
            <p>
              To become a smart academic management solution that empowers
              educational institutions with transparency, efficiency, and
              technology-driven learning experiences.
            </p>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="about-image">
          <img
            src="/images/ChatGPT Image Dec 17, 2025, 11_14_14 PM.png"
            alt="Admin Teacher Student Relationship"
          />
        </div>

      </div>
    </div>
  );
}

export default About;

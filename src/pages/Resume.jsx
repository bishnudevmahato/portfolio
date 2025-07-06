
const Resume = () => {
  return (
    <div className="resume-section">
      <div className="resume-header">
        <h2 className="section-title">My Resume</h2>
      </div>
      <div className="resume-download download-btn">
      <a
          href="/Bishnudev_Profile_Resume.pdf"
          download="Bishnudev_Mahato_Resume.pdf"
          className="download-resume-btn"
        >
          <span className="icon">📄</span> Download Resume (PDF)
        </a>
      </div>

      <div className="resume-card">
        <div className="resume-header-info">
          <h1>Bishnudev Mahato</h1>
          <p className="resume-title">Angular Js Developer | Full Stack Developer | Bangalore</p>
          <p className="resume-contact">📞 7899340981 | 📧 bisundevmahato786@gmail.com</p>
        </div>
        {/* Education */}
        <h3>🎓 Education</h3>
        <p><strong>B.E. in Computer Science</strong><br /> <div>R. R. Institute of Technology <p className="educationDate">2018–2022 — CGPA: 7.82</p> </div> </p>

        {/* Experience */}
        <h3>💼 Professional Experience</h3>
        <p><strong>Product Engineer</strong><br />Vxceed Software Solution Pvt Ltd, Jan 2023 – Present</p>
        <ul>
          <li>Developed frontend features using AngularJS, Angular v10–v17, and JavaScript.</li>
          <li>Built dynamic interfaces using Cordova, Capacitor, and Ionic (v4–v7).</li>
          <li>Integrated REST APIs and ensured responsive UI using Figma design updates.</li>
          <li>Developed backend modules in ASP.NET Core and optimized MySQL queries.</li>
          <li>Worked with Vue.js for component-based module UIs.</li>
          <li>Collaborated using Git, Jira, and participated in Agile sprints.</li>
        </ul>

        {/* Technical Skills */}
        <h3>🛠 Technical Skills</h3>
        <p><strong>Languages:</strong> JavaScript, TypeScript, HTML, CSS, SQL, Java</p>
        <p><strong>Frontend:</strong> AngularJS, ReactJS, Vue.js, jQuery</p>
        <p><strong>Backend:</strong> Node.js, Express.js, ASP.NET Core</p>
        <p><strong>Databases:</strong> MongoDB, MySQL</p>
        <p><strong>Tools/Platforms:</strong> Git, Figma, Jira, REST APIs, AWS (basic), Cordova, Capacitor</p>

        {/* Projects */}
        <h3>🚀 Projects</h3>
        <ul>
          <li><strong>Mini E-Commerce App</strong> (May 2025) – React Native CLI, Context API, AsyncStorage, Navigation<br />
            <a href="https://github.com/bishnudevmahato/ReactNativeApp" target="_blank" rel="noreferrer">GitHub Link</a></li>
          <li><strong>CGPA/SGPA Calculator</strong> (Dec 2021 – Jan 2022) – Built using HTML, CSS, JavaScript<br />
            <a href="https://github.com/bishnudevmahato/SGPA-CGPA-Calculator" target="_blank" rel="noreferrer">GitHub Link</a></li>
          <li><strong>Gesture-Controlled Robot</strong> (Final Year Project) – Embedded C, robotics-based vehicle control</li>
        </ul>

        {/* Achievements */}
        <h3>🏆 Achievements & Certifications</h3>
        <ul>
          <li><strong>MERN Full Stack (Self-Learning):</strong> Built complete app using MongoDB, Express, React, Node.</li>
          <li><strong>Java Full Stack (6-Months):</strong> Learned Spring, Hibernate, SQL, JavaScript at JSpider Institute.</li>
          <li><strong>AWS Cloud (3-Months):</strong> Understood EC2, IAM, S3, and basic cloud architecture with hands-on practice.</li>
        </ul>

        {/* Links */}
        <h3>🔗 Contact & Links</h3>
        <ul>
          <li>Email: <a href="mailto:bisundevmahato786@gmail.com">bisundevmahato786@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/bishnudev-mahato/" target="_blank" rel="noreferrer">linkedin.com/in/bishnudev-mahato</a></li>
          <li>GitHub: <a href="https://github.com/bishnudevmahato" target="_blank" rel="noreferrer">github.com/bishnudevmahato</a></li>
        </ul>
      </div>
    </div>
  );
}
export default Resume;
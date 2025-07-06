const Certifications = () => {
    return (
        <div className="education-section">
      <h2 className="section-title">🎓 Education & Achievements</h2>

      {/* B.E. in Computer Science */}
      <div className="edu-block">
        <h3>B.E. in Computer Science</h3>
        <p className="institute">R. R. Institute of Technology (2018 – 2022)</p>
        <ul className="edu-points">
          <li>Graduated with a CGPA of 7.82 from VTU University.</li>
          <li>Gained strong fundamentals in Data Structures, Algorithms, and Database Systems.</li>
          <li>Completed final-year robotics-based project using Embedded C for automated motion control.</li>
          <li>Worked on academic projects using Java, C, and HTML/CSS.</li>
          <li>Actively participated in technical events and internal hackathons.</li>
          <li>Learned real-world coding and software engineering principles through lab sessions and workshops.</li>
        </ul>
      </div>

      {/* Java Full Stack Certification */}
      <div className="edu-block">
        <h3>Java Full Stack Development – Certification (6 Months)</h3>
        <ul className="edu-points">
          <li>Completed hands-on Java full stack training at JSpiders Institute.</li>
          <li>Learned Core Java, JDBC, Hibernate, Spring Framework, and MVC architecture.</li>
          <li>Built full-stack web applications using JSP, Servlets, and MySQL.</li>
          <li>Practiced writing APIs and connecting backend with frontend using Java-based tools.</li>
          <li>Understood real-time project flow, object-oriented concepts, and debugging techniques.</li>
          <li>Participated in weekly code reviews, tests, and mock interviews during training.</li>
        </ul>
      </div>

      {/* AWS Cloud Certification */}
      <div className="edu-block">
        <h3>AWS Cloud Computing – Certification (3 Months)</h3>
        <ul className="edu-points">
          <li>Learned core AWS services like EC2, S3, IAM, RDS, Lambda, and CloudWatch.</li>
          <li>Configured and launched cloud instances, created user permissions, and deployed static sites to S3.</li>
          <li>Worked on cloud-based architecture planning for a sample deployment scenario.</li>
          <li>Explored DevOps basics including CI/CD and resource monitoring.</li>
          <li>Completed AWS labs and mini assignments through training platform.</li>
          <li>Gained beginner-level experience in managing scalable and secure cloud resources.</li>
        </ul>
      </div>

      {/* MERN Stack Self Learning */}
      <div className="edu-block">
        <h3>MERN Stack Development – Self Learning</h3>
        <ul className="edu-points">
          <li>Independently studied MongoDB, Express.js, React.js, and Node.js via YouTube and online docs.</li>
          <li>Built a MERN stack mini project including login, registration, and CRUD functionality.</li>
          <li>Used React for component design and state management with hooks.</li>
          <li>Developed REST APIs with Express and Node.js; connected to MongoDB Atlas cloud DB.</li>
          <li>Focused on end-to-end app development and full-stack project deployment.</li>
          <li>Improved debugging, version control with Git, and hosting with tools like Vercel and Render.</li>
        </ul>
      </div>
    </div>
      );
}

export default Certifications;
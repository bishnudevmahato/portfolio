
import React from "react";
import apkIcon from "../../public/images/apk-icon.png"; // <-- Add your APK icon image in the src folder


const projectList = [
  {
    title: "Mini E-Commerce App",
    tech: "React Native, Context API, AsyncStorage",
    description: [
      "Built using React Native CLI for both Android and iOS platforms with efficient cross-platform support.",
      "Implemented a dynamic product listing page with clean UI components and React Navigation.",
      "Utilized Context API to manage global state such as cart data across all screens.",
      "Persisted cart information using AsyncStorage for a seamless user experience across sessions.",
      "Created reusable and modular components for better maintainability.",
      "Integrated styling to ensure responsive layout and mobile-first design.",
      "Tested on real devices and emulators to ensure cross-device compatibility.",
      "You can also download the APK directly from the GitHub page under the Releases section for Android devices."
    ],
    github: "https://github.com/bishnudevmahato/ReactNativeApp",
    apk: "https://drive.google.com/file/d/17g2AzFrpnFBvTEHpT7EsdRm62RBNK-BM/view?usp=sharing"

  },
  {
    title: "CGPA/SGPA Calculator",
    tech: "HTML, CSS, JavaScript",
    description: [
      "Designed a user-friendly web app to compute CGPA and SGPA based on input grades and credits.",
      "Used vanilla JavaScript for real-time GPA computation logic using weighted averages.",
      "Structured the layout using HTML and styled with CSS for clean tabular inputs.",
      "Included validation for numeric and grade values to prevent user errors.",
      "Enabled dynamic addition/removal of subject rows and semesters.",
      "Optimized for mobile and desktop with responsive design using media queries.",
      "Deployed for use by students and academic reviewers.",
    ],
    github: "https://github.com/bishnudevmahato/SGPA-CGPA-Calculator",
  },
  {
    title: "Node.js Server API",
    tech: "Node.js, Express.js, MongoDB",
    description: [
      "Created a RESTful API backend using Express.js and MongoDB for data persistence.",
      "Designed modular route handling with proper folder structure for scalability.",
      "Integrated secure user authentication using JWT.",
      "Used Mongoose for schema design and validation.",
      "Handled error responses and edge cases for better client integration.",
      "Implemented CRUD endpoints tested via Postman and documented via README.",
    ],
    github: "https://github.com/bishnudevmahato/server_api",
  },
];

const styles = {
  container: {
    padding: "40px 20px",
    // background: "#f5f5f5",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },
  header: {
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "30px",
    color: "rgb(31 189 32)",
  },
  slider: {
    display: "flex",
    overflowX: "auto",
    gap: "30px",
    padding: "10px 0",
    scrollSnapType: "x mandatory",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "40%",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
  },
  title: {
    fontSize: "28px",
    color: "#2563eb",
    marginBottom: "8px",
  },
  tech: {
    fontSize: "20px",
    color: "#10b981",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  desc: {
    fontSize: "18px",
    marginBottom: "15px",
    color: "#374151",
    lineHeight: "1.6",
    paddingLeft: "16px",
  },
  link: {
    display: "inline-block",
    backgroundColor: "#2563eb", // dark gray (like GitHub theme)
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    textDecoration: "none",
    textAlign: "center",
    marginTop: "10px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
    transition: "all 0.3s ease",
  },  
  apkIcon: {
    width: "30px",
    height: "30px",
    verticalAlign: "middle",
    marginLeft: "auto"
  },
  highlightLine: {
    color: "#d97706",
    // fontWeight: "bold"
  },
  actionRow: {
    margin: "0 auto",
    marginTop: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px"
  }
};

const Projects = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>My Projects</h2>
      <div style={styles.slider}>
        {projectList.map((project, i) => (
          <div key={i} style={styles.card}>
            <div>
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.tech}>🔧 {project.tech}</p>
            <ul style={styles.desc}>
              {project.description.map((point, idx) => (
                <li
                  key={idx}
                  style={
                    point.includes("APK")
                      ? styles.highlightLine
                      : undefined
                  }
                >
                   {point}
                </li>
              ))}
            </ul>
            </div>
            <div style={styles.actionRow}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                View on GitHub
              </a>
              {project.apk && (
                <a href={project.apk} download>
                  <img src={apkIcon} alt="Download APK" style={styles.apkIcon} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

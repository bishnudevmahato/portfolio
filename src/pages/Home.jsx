const Home = () => {

    return (
        <>
            {/* <video autoPlay muted loop className="video-bg">
        <source src="bg-videos.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
            <div className="home-container">
                <div className="home-box">
                    <div className="home-content">
                        <div className="video-container">
                            <video autoPlay loop muted playsInline className="background-video">
                                {/* <source src="/picture/bg-videos.mp4" type="video/mp4" /> */}
                                <source src="https://res.cloudinary.com/dwjtbxbxa/video/upload/bg-videos_j5vzah.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="overlay-content">
                                <h1 className="first-h1"> <p className="first-p">I'm a</p> <p className="main-first-p"> Full Stack </p> </h1>
                                <h1 className="second-h1"> <p className="main-second-p">Developer </p> <p className="second-p">&</p> </h1>
                                <h1 className="third-h1">Software</h1>
                                <h1 className="fourth-h1">Engineer</h1>
                            </div>
                        </div>
                        <div className="profile-detail-box">
                            <div className="profile-detail">
                                <p>I have 2+ years of experience in Software Development, specializing in AngularJS and full-stack development.
                                    I spent two years working with AngularJS, building dynamic and interactive web applications.
                                    Over the last year, I transitioned into a full-stack role, working with Node.js, ASP.NET and MySQL to develop scalable applications.
                                    My expertise includes UI/UX optimization, REST API development, and cloud deployment.
                                    I am passionate about modern web technologies and continuously improving performance and user experience. </p>
                            </div>
                        </div>
                        <div className="profile-button-box">
                            <div className="detail-btn">
                                <a href="/work">
                                    <button className="dt-btn m-btn">Know more <p>↗</p> </button>
                                </a>
                            </div>
                            <div className="contact-btn">
                                <a href="/contact">
                                    <button className="dt-btn c-btn">Contact <p>{"\u2197"}</p> </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="educ-section">
                        <div className="educ-btech">
                            <div className="educ-btech-title">
                                <div className="first-title">Eductation</div>
                                <div className="second-title">Bechalor <p className="third-title">of <strong>Engineering</strong></p></div>
                                {/* <div>MERN Full Stack Developer</div>
                                <div>AWS Cloud Practisioner</div> */}
                            </div>
                            <div className="educ-btech-details">
                                <div className="educ-btech-details-box1">
                                    <div className="first-detail">R.R Institute of Technology</div>
                                    <div className="second-detail">Aug 2018 - Aug 2022</div>
                                </div>
                                <div className="educ-btech-details-box2">Computer Science and Engineering</div>
                                <button className="goto-certificate-page">
                                    <a href="/certificate">Know More</a>
                                </button>
                            </div>
                        </div>
                        <div className="educ-courses">
                            <div className="mern-course">
                                <div>
                                   <div>MERN Full Stack Developer</div>
                                   <div>OWN Self Learning througn Online</div>
                                </div>
                                <div>
                                    <div>Learn to make Full website using MERN</div>
                                    <ul>
                                        <li>
                                            Mangodb : Learn to use MongoDB Atlas for database management and cloud storage.
                                        </li>
                                        <li>
                                            Express.js : Understand how to build RESTful APIs and server-side logic.
                                        </li>
                                        <li>
                                            React.js : Develop interactive user interfaces and manage application state.
                                        </li>
                                        <li>
                                            Node.js : Create server-side applications and handle backend operations.
                                        </li>
                                    </ul>
                                </div>
                                <button>Know More</button>
                            </div>
                            <div className="aws-course">
                                <div>
                                    <div>AWS cloud Practisinor</div>
                                    <div>Learn Basic AWS cloud how to use in project.</div>
                                </div>
                                <div>
                                    <div>Learn to use AWS cloud for deployment and hosting.</div>
                                    <ul>
                                        <li>
                                            EC2 : Learn to launch and manage virtual servers in the cloud.
                                        </li>
                                        <li>
                                            S3 : Understand how to store and retrieve data in the cloud.
                                        </li>
                                        <li>
                                            IAM : Manage user access and permissions securely.
                                        </li>
                                        <li>
                                            RDS : Use managed databases for scalable applications.
                                        </li>
                                    </ul>
                                </div>
                                <button>Know More</button>
                            </div>
                            <div className="java- course">
                                <div>
                                    <div>
                                       <div>Java Full Stack Developer</div>
                                       <div>JSpiders Institute</div>
                                    </div>
                                    <div>6 months</div>
                                </div>
                                <div>
                                    <div>Learn to build web applications using Java technologies.</div>
                                    <ul>
                                        <li>
                                            Core Java : Understand the fundamentals of Java programming.
                                        </li>
                                        <li>
                                            Spring Framework : Learn to build robust backend applications.
                                        </li>
                                        <li>
                                            Hibernate : Manage database interactions with ease.
                                        </li>
                                        <li>
                                            JSP and Servlets : Develop dynamic web content.
                                        </li>
                                        <li>
                                            MySQL : Use relational databases for data storage.
                                        </li>
                                        <li>HTML, CSS, JAVASCRIPT</li>
                                    </ul>
                                </div>
                                <button>Know More</button>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "10rem" }}></div>
                </div>
            </div>
        </>
    );
}

export default Home;
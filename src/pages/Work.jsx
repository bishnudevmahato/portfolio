const Work = () => {
    return (
        <div className="page-background">
            {/* Product Engineer Experience */}
            <div className="experience-box experience-purple">
                <div className="experience-left">
                    <h2 className="job-title">Product Engineer</h2>
                    <p className="company">Vxceed Software Solution Pvt Ltd</p>
                    <p className="date">Jan 2023 – Present</p>
                </div>

                <div className="experience-right with-line">
                    <ul className="experience-points">
                        <li>Developed frontend using <strong>AngularJS</strong> and <strong>Angular v10–v17</strong> for scalable enterprise apps</li>
                        <li>Built and deployed hybrid mobile apps with <strong>Ionic</strong>, <strong>Capacitor</strong>, and <strong>Cordova</strong></li>
                        <li>Integrated RESTful APIs to connect frontend interfaces with backend logic</li>
                        <li>Engineered secure backend services using <strong>ASP.NET Core</strong> with optimized <strong>MySQL</strong> queries</li>
                        <li>Designed component-based architecture using <strong>Vue.js</strong> for specific modules</li>
                        <li>Translated UI/UX from <strong>Figma</strong> to production-ready components with precision</li>
                        <li>Participated in agile development cycles, resolving tickets through <strong>Jira</strong></li>
                        <li>Collaborated with team using <strong>Git</strong> for version control and clean branching workflows</li>
                        <li>Implemented accessibility and performance best practices in multiple projects</li>
                        <li>Led internal code reviews and mentored junior developers</li>
                    </ul>
                </div>
            </div>

            {/* Product Engineer Card */}
            <div className="experience-box experience-green">
                {/* ...title & bullet points */}
                <div className="tech-stack">
                    <span className="badge angular">Angular</span>
                    <span className="badge ionic">Ionic</span>
                    <span className="badge capacitor">Capacitor</span>
                    <span className="badge dotnet">.NET Core</span>
                    <span className="badge mysql">MySQL</span>
                    <span className="badge vue">Vue.js</span>
                    <span className="badge figma">Figma</span>
                </div>
            </div>

            <div className="tech-stack-details">
                <h3 className="tech-title">Tech Stack Responsibilities</h3>

                <div className="tech-block">
                    <h4>1. Angular – Component Architecture & Forms</h4>
                    <p>Built modular Angular components, used reactive forms with `FormBuilder`, and managed shared state with RxJS and BehaviorSubject.</p>
                </div>

                <div className="tech-block">
                    <h4>2. API Integration & Services</h4>
                    <p>Developed reusable Angular services for REST API consumption and implemented interceptor logic for token management.</p>
                </div>

                <div className="tech-block">
                    <h4>3. Ionic & Capacitor – Mobile UI and Native Plugins</h4>
                    <p>Built hybrid mobile UI using Ionic components and grid system. Integrated Capacitor plugins for accessing native features like storage and camera.</p>
                </div>

                <div className="tech-block">
                    <h4>4. ASP.NET Core – Backend API Layer</h4>
                    <p>Developed secure REST APIs with ASP.NET Core, handling user auth, middleware, and MySQL integration.</p>
                </div>

                <div className="tech-block">
                    <h4>5. MySQL – Data Modeling & Optimization</h4>
                    <p>Designed relational schemas, wrote optimized SQL queries, and implemented joins and indexes for performance.</p>
                </div>

                <div className="tech-block">
                    <h4>6. Vue.js – Selective UI Components</h4>
                    <p>Used Vue.js to build dynamic UI components in select modules with reactive data flow and scoped styling.</p>
                </div>

                <div className="tech-block">
                    <h4>7. Figma – Design to Code</h4>
                    <p>Translated Figma-based designs into pixel-perfect UI, matching layout spacing, color tokens, and interaction behavior.</p>
                </div>

                <div className="tech-block">
                    <h4>8. Git – Version Control & Collaboration</h4>
                    <p>Used Git and GitHub for branching, pull requests, and maintaining clean commit history in team collaboration.</p>
                </div>
            </div>






            {/* React Native Experience */}
            <div className="experience-box experience-blue">
                <div className="experience-left">
                    <h2 className="job-title">React Native Developer</h2>
                    <p className="company">Freelance Project</p>
                    <p className="date">May 2025</p>
                    <p className="p-name">Project: <h1>E-commerce Mobile App</h1></p>
                </div>

                <div className="experience-right with-line">
                    <ul className="experience-points">
                        <li>Built a cross-platform e-commerce app using <strong>React Native CLI</strong></li>
                        <li>Used <strong>Context API</strong> and <strong>AsyncStorage</strong> for cart functionality</li>
                        <li>Implemented <strong>React Navigation</strong> for screen transitions</li>
                        <li>Developed modular components and scalable folder structure</li>
                        <li>
                            <a
                                href="https://github.com/bishnudevmahato/ReactNativeApp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                            >
                                🔗 GitHub Repository
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="experience-box experience-orange">
                <div className="tech-stack">
                    <span className="badge react">React Native</span>
                    <span className="badge context">Context API</span>
                    <span className="badge async">AsyncStorage</span>
                    <span className="badge nav">React Navigation</span>
                    <span className="badge github">GitHub</span>
                </div>
            </div>

            <div className="tech-stack-details">
                <h3 className="tech-title">Tech Stack Responsibilities</h3>

                <div className="tech-block">
                    <h4>1. React Native – UI Components & Screens</h4>
                    <p>Built cross-platform mobile screens with modular components and implemented consistent layouts using native StyleSheet APIs.</p>
                </div>

                <div className="tech-block">
                    <h4>2. Context API – Global State Management</h4>
                    <p>Managed global state for cart and user data using React’s Context API, ensuring clean logic separation and centralized updates.</p>
                </div>

                <div className="tech-block">
                    <h4>3. AsyncStorage – Offline Data Persistence</h4>
                    <p>Stored cart data and login tokens persistently using AsyncStorage, enabling session recovery and offline access.</p>
                </div>

                <div className="tech-block">
                    <h4>4. React Navigation – Routing and Tab Flow</h4>
                    <p>Configured stack and tab navigators for app flow, managed params and transitions for intuitive navigation.</p>
                </div>

                <div className="tech-block">
                    <h4>5. GitHub – Version Control</h4>
                    <p>Maintained codebase on GitHub, followed commit best practices, and shared public repo with APK builds for review.</p>
                </div>
            </div>





        </div>
    );
};

export default Work;
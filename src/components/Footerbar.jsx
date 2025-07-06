import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footerbar() {
  return (
    <footer className="footer-box bg-gray-900 text-white py-6 text-center">
      <div className="footer-detail">
        <div className="footer-content1">
          <div className="fc-name">Bishnudev Mahato</div>
          <div className="fc-work1">Full Stack Developer</div>
          <div className="fc-work2">& Software Developer</div>
        </div>
        <div className="footer-content2">
          <div className="header-topics">
            <div className="header-work">
              <span className="footer-names">
                <a href="work">Work</a>
              </span>
            </div>
            <div className="header-certi">
              <span className="footer-names">
                <a href="certifications">Certificate & Courses</a>
              </span>
            </div>
            <div className="header-contact">
              <span className="footer-names">
                <a href="contact">Contact</a>
              </span>
            </div>
          </div>
          <div className="social-link">
            <div className="social-linkdin">
              <span className="footer-names">
                <a href="https://www.linkedin.com/in/bishnudev-mahato" target="_blank">Linkdin</a>
              </span>
            </div>
            <div className="social-github">
              <span className="footer-names">
                <a href="https://github.com/bishnudevmahato" target="_blank">Github</a>
              </span>
            </div>
            <div className="social-email">
              <span className="footer-names">
                <a href="mailto:bisundevmahato786@gmail.com" target="_blank">Email</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content">
      <p className="footer-title">© 2025 BISHNUDEV MAHATO | Full-Stack Developer</p>
      <div className="footer-logo flex justify-center space-x-4 mt-2">
        <a className="footer-social-logo" href="https://github.com/bishnudevmahato" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-xl hover:text-gray-400" />
        </a>
        <a className="footer-social-logo"  href="https://www.linkedin.com/in/bishnudev-mahato" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-xl hover:text-gray-400" />
        </a>
        <a className="footer-social-logo"  href="https://x.com/Razzmahato2" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-xl hover:text-gray-400" />
        </a>
      </div>
      </div>
    </footer>
  );
}



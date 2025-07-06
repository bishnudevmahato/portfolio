import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/contact";
import Login from "./pages/Login"
import Register from "./pages/Register";
import Certifications from "./pages/Certifications"
import Footerbar from "./components/Footerbar"
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes className="content-page">
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footerbar />
      </BrowserRouter>
    </>
  )
};

export default App;
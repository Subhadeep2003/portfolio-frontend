import "../src/App.css";
import Layout from "./components/Layout/layout";
import About from "./pages/About/About";
import Contacts from "./pages/Contactsdtl/Contacts";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/TechStack/Techstack";
import Workexp from "./pages/WorkExp/Workexp";
import ScrollToTop from "react-scroll-to-top";//Scroll to top button
import { useTheme } from "./context/ThemeContext";
import { AttentionSeeker } from "react-awesome-reveal";
import Learning from "./pages/LearningJourney/Learning";
import Interest from "./pages/Interest/Interest";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav/>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <Workexp />
          <Learning/>
          <Interest/>
          <Contacts />
        </div>
        <footer className="footer">
          <AttentionSeeker effect="tada">
            <p>Made by Subhadeep Mukherjee</p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </AttentionSeeker>
        </footer>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px",
          right:"10px",
          bottom:"10px",
          position:"fixed",
        }}
      />
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;

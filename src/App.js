import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Certifications from "./components/Certifications/certifications";
import WorkExperience from "./components/WorkExperience/workexperience";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Project from "./components/Projects/project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Certifications />
      <WorkExperience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <div className="blob blob1"></div>
<div className="blob blob2"></div>
<div className="blob blob3"></div>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
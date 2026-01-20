import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Publications from '../components/Publications';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Publications />
      <Resume />
      
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
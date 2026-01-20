// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Resume from './components/Resume';
// import Projects from './components/Projects';
// import About from './components/About';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//       <Resume />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import Memories from './pages/Memories';
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/memories" element={<Memories />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
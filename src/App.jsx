import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ResumeView from './components/ResumeView';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="app-container">
      {/* Header and navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Main portfolio content */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ResumeView />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

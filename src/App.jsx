import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
      {/* Other sections will go here */}
    </div>
  );
}

export default App;

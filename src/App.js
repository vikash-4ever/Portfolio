import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experirnce from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header/>
      <main>
        <About/>
        <Projects/>
        <Experirnce/>
        <Contact/>
      </main>
      <p className="mySign">Vikash Vishwakarma</p>
    </div>
  );
};

export default App;

import './App.css';
import React, { useState } from 'react';
import About from './components/About/About.js';
import ContactForm from './components/Contact/Contact';
import Nav from './components/Nav/Nav.js';
import Resume from './components/Resume/Resume.js'

function App() {

  // Using useState, set the default value for currentPage to 'About'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <ContactForm />;
      default:
        return <About />;
    }
  };


  return (
    <>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </>
  );
}

export default App;

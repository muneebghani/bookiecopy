import React from 'react';
import './App.css';
import Homepage from './Homepage.component';
import Header from './Header.component';
import Bookie from './Bookie';
import logo from './logo.png';
import Card from './Card.component';

function App() {
  let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'About', link: '#about' },
      { label: 'Return', link: '#Return' },
      { label: 'Contact Us', link: '#contact-us' },
    ];

    return (
      <div className="container center">
        <Bookie links={links} logo={logo} />
        <Card/>
        <Homepage/>
      </div>
    );
}

export default App;

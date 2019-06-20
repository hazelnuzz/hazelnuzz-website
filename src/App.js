import React from 'react';
import './styles/app.scss';
import './styles/typo.scss';
import './styles/button.scss';
import Nav from './components/Nav';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;

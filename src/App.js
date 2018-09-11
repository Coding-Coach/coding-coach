import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img 
          src={require('./images/mentor.jpg')} 
          alt="Mentor" 
          className="App__background-image"
        />
        <header className="App__header">
          <h1 className="App__title">Coding Coach</h1>
          <h4 className="App__tagline">Connecting developers with mentors worldwide.</h4>
          <a className="button button__white--fill button__link">
            Get Started
          </a>
        </header>
      </div>
    );
  }
}

export default App;

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
          <h1 className="App__title">Coding Mentor</h1>
          <h4 className="App__tagline">Connecting developers with mentors worldwide.</h4>
          <button className="button button__white--fill">
            <a 
              href="https://docs.google.com/forms/d/1TraoygcJay39cLiBQM-ROlToy7xIgcdx_VvCQuE1lJw/edit#responses"
              target="blank"
              className="button__link"
            >
              Get Started
            </a>
          </button>
        </header>
      </div>
    );
  }
}

export default App;

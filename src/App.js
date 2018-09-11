import React, { Component } from 'react';

class App extends Component {
  onGetStarted = () => {
    const url = 'https://docs.google.com/forms/d/1TraoygcJay39cLiBQM-ROlToy7xIgcdx_VvCQuE1lJw/edit#responses';
    window.open(url, '_blank');
  }

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
          <button className="button button__white--fill" onClick={this.onGetStarted}>
            <a className="button__link">
              Get Started
            </a>
          </button>
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';

function App() {
  return (
    <div className="App">
      <img src="./images/mentor.jpg" alt="Mentor" className="App__background-image" />
      <header className="App__header">
        <h1 className="App__title">Coding Coach</h1>
        <h4 className="App__tagline">Connecting developers with mentors worldwide.</h4>
        <a
          className="button button__white--fill button__link"
          href="https://docs.google.com/forms/d/1TraoygcJay39cLiBQM-ROlToy7xIgcdx_VvCQuE1lJw/edit#responses"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </header>
    </div>
  );
}

export default App;

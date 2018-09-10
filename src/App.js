import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App__hero">
          <header className="App__header">
            <h1 className="App__title">Coding Coach</h1>
            <h4 className="App__tagline">
              Connecting developers with mentors worldwide.
            </h4>
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
        </section>
      </div>
    );
  }
}

export default App;

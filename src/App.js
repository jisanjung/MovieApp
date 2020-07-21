import React from 'react';
import Header from "./components/Header.js";
import Results from "./components/Results.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <main className="container">
        <Header/>
        <Results/>
      </main>
    )
  }
}

export default App;

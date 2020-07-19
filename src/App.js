import React from 'react';
import Header from "./components/Header.js";
import Search from "./components/Search.js";
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
        <Search/>
        <Results/>
      </main>
    )
  }
}

export default App;

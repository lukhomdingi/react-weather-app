import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Search from '../Search/Search';
import Results from "../Results/Results";

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      results: null
    }
  } //constructor

  updateResults(results)
  {
    this.setState({
      results: results
    });
  }

  render()
  {
    var results = "";
    if(this.state.results != null)
    {
      results = (<Results results={this.state.results} />);
    }
    return (      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main className="container">
        <h1>Weather Forecast</h1>
          <Search updateResults={this.updateResults.bind(this)} />
          <br/>
          {results}
        </main>
      </div>
    );
  }
}

export default App;

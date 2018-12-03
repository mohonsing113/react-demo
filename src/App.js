import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number.js'

class App extends Component {

  updateNumber =() =>{
    let newNumber = this.props.onClickWho(this.state.number)
    this.setState({number: newNumber})
  }

  state={number: 1}
  render() {
    return (
      <div>
        <button  onClick={this.updateNumber}>Hello world!</button>
        <Number /> <span>{this.state.number}</span>
      </div>
    );
  }
}

export default App;

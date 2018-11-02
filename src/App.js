import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Radium from 'radium';

class App extends Component {
  state = {
    textVisible: true,
  }
  
  onClickHandler = () => {
    this.setState({textVisible: !this.state.textVisible})
  }
  
  render() {

    let text = "Hola :D";
    const style = {
      background: 'green',
      width: '100px',
      height: '70px',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      backgroundColor: 'green',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    const btnClasses = [];

    if (!this.state.textVisible){
      text = "";
      btnClasses.push("orange2");
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    } else {
      btnClasses.push("orange");
    }

    return (
      <div className="App">
        <Button text='Dale masa' click={()=>this.onClickHandler()} style={btnClasses.map(it=>it)}/>
        <h1>{text}</h1>
        <div style={style}></div>
      </div>
    );
  }
}

export default Radium(App);
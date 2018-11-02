import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    textVisible: true,
  }
  
  onClickHandler = () => {
    this.setState({textVisible: !this.state.textVisible})
  }
  
  render() {

    let text = "Hola :D";

    const btnClasses = [];

    if (!this.state.textVisible){
      text = "";
      btnClasses.push("orange2");
    } else {
      btnClasses.push("orange");
    }

    if(this.state.textVisible){

    }

    return (
      <div className="App">
        <Button text='Dale masa' click={()=>this.onClickHandler()} style={btnClasses.map(it=>it)}/>
        <h1>{text}</h1>
      </div>
    );
  }
}

export default App;
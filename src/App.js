import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Radium, {StyleRoot} from 'radium';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    textVisible: true,
    showPersons: true,
    persons: [{
      name: 'Max',
      age: 32,
      id: 'alskdjfbn0897'
    }, {
      name: 'Anex',
      age: 74,
      id: 'lkajsnbdf9p8qhw34pkjb'
    }]
  }
  
  onClickHandler = () => {
    this.setState({textVisible: !this.state.textVisible})
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, person) => {
    // this.persons.findById
  }
  
  render() {

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} key={person.id} click={() => this.deletePersonHandler(index)} changed={(event)=>this.nameChangeHandler(event, person)}/>
          })}
        </div>
      )
    }

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
      <StyleRoot>
        <div className="App">
          <Button text='Dale masa' click={()=>this.onClickHandler()} style={btnClasses.map(it=>it)}/>
          <h1>{text}</h1>
          <div style={style}></div>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
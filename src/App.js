import React, { Component } from 'react';
import classes from './App.module.css';
import Button from './components/Button/Button';
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

    const assignedClasses = [];

    if (!this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (!this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <Button text='Dale click' click={()=>this.onClickHandler()} class={assignedClasses.join(' ')}/>
          <h1 className={assignedClasses.join(' ')}>{text}</h1>
          {persons}
        </div>
    );
  }
}

export default App;
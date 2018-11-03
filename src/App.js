import React, { Component } from 'react';
import classes from './App.module.css';
import Button from './components/Button/Button';
import Person from './components/Person/Person';

class App extends Component {
  state = {
    textVisible: true,
    showPersons: true,
    otherState: 'some other value',
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    }
    
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState ({persons: persons});
  }
  
  deletePersonHandler = ( personIndex ) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age} 
            key={person.id} 
            changed={(event)=>this.nameChangeHandler(event, person)}/>
          })}
        </div>
      )
    }

    const assignedClasses = [];

    if (!this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (!this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <Button text='Toggle Persons' click={()=>this.togglePersonsHandler()} class={assignedClasses.join(' ')}/>
          {persons}
        </div>
    );
  }
}

export default App;
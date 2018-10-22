import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'qwe',name: "Shubham", age: "23" },
        { id: 'sd',name: "Pathik", age: "22" },
        { id: 'cxv',name: "Kalpesh", age: "26" }
      ],
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // state = {
  //   persons: [
  //     { id: 'qwe',name: "Shubham", age: "23" },
  //     { id: 'sd',name: "Pathik", age: "22" },
  //     { id: 'cxv',name: "Kalpesh", age: "26" }
  //   ],
  //   showPersons: false
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={ this.state.persons }
            changed={ this.nameChangedHandler }
            clicked={ this.deletePersonHandler } />;
    }


    return (
      <div className={ classes.App }>
        <Cockpit 
          appTitle={ this.props.title }
          showPersons={ this.state.showPersons }
          persons={ this.state.persons }
          clicked={ this.togglePersonsHandler }/>
        { persons }
      </div>
    );
  }
}

export default App;

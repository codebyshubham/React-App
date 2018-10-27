import React from 'react';

import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpits = (props) => {

  let assignedClasses = [];
  let buttonClass = classes.Button;

  if (props.showPersons) {
    buttonClass = [classes.Button, classes.red].join(' ');
  }
  
  if (props.persons.length <= 2) {
    assignedClasses.push( classes.red );
  }
  if (props.persons.length <= 1) {
    assignedClasses.push( classes.bold );
  }

  return (
    <Aux>
      <h1>{ props.appTitle }</h1>
        <p className={ assignedClasses.join(' ') }>This is working</p>
        <button
          className={ buttonClass }
          onClick={ props.clicked }>Toggle Person</button>
        <button onClick={ props.login }>Login</button>
    </Aux>
  );
};

export default cockpits;
import React from 'react';
import classes from './Cockpit.css';

const cockpits = (props) => {

  let assignedClasses = [];
  let buttonClass = '';

  if (props.showPersons) {
    buttonClass = classes.red;
  }
  
  if (props.persons.length <= 2) {
    assignedClasses.push( classes.red );
  }
  if (props.persons.length <= 1) {
    assignedClasses.push( classes.bold );
  }

  return (
    <div className={ classes.Cockpit }>
      <h1>{ props.appTitle }</h1>
        <p className={ assignedClasses.join(' ') }>This is working</p>
        <button
          className={ buttonClass }
          onClick={ props.clicked }>Toggle Person</button>
    </div>
  );
};

export default cockpits;
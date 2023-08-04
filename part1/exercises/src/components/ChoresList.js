import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ["Empty dishwasher", "Complete prep work", "Buy groceries", "Wash car"];

      return (
      <div>
         <h3 className = {classes.choresHeading}>Today's Chores</h3>
         <ul>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
            <li className={classes.choresText}>{chores[3]}</li>
         </ul>
      </div>
      );
   }
}

export default ChoresList;

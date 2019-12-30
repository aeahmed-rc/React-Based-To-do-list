import React from 'react';
import { BigHeader } from './components/header/header'
import TasksContainer from './components/taskscontainer/taskscontainer'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BigHeader headerText="To-Do List"/>
      <TasksContainer/>
    </React.Fragment>
  );
}

export default App;

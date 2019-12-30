import React, {Component} from 'react'
import TaskList from './tasklist/tasklist'
import TaskInput from './taskInput/taskInput'

class TasksContainer extends Component {
  constructor(props){
    super(props)
    this.state = {taskList:[]};
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.setState(prevState => ({
      taskList: [...prevState.taskList, task]
    }))
  }

  render(){
    return (
      <React.Fragment>
        <TaskInput addTask={this.addTask}/>
        <TaskList tasks={this.state.taskList}/>
      </React.Fragment>
    )
  }
}

export default TasksContainer

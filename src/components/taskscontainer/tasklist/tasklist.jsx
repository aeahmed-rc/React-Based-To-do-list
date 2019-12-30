import React, {Component} from 'react'
import './tasklist.css'

class TaskList extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <ul>
      {
        this.props.tasks.map((task, index) =>{
          return <li key={index}><input type="checkbox"/>{task}</li>
        })
      }
      </ul>
    )
  }
}
export default TaskList

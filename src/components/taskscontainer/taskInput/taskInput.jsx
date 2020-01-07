import React, {Component} from 'react'

class TaskInput extends Component {
  constructor(props){
    super(props);
    this.state = {task: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    this.props.addTask(this.state.task);
    event.preventDefault()
  }

  handleChange(event){
    this.setState({task: event.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Task:
            <input type="text" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit Task"/>
        </form>
      </React.Fragment>
    )
  }
}

export default TaskInput

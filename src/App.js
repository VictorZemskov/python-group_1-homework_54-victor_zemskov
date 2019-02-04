import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Task, AddTaskForm } from "./Task/Task.js";


class App extends Component {

  state = {
    mission: [
        {id: 1, name: 'Buy milk'},
        {id: 2, name: 'Walk with dog'},
        {id: 3, name: 'Do homework'},
    ],
    currentTask: {name: ''},
  };

  removeTask = (id) => {
    let taskId = this.state.mission.findIndex(task => {
      return task.id === id;
    });

    const mission = [...this.state.mission];
    mission.splice(taskId, 1);

    this.setState({...this.state, mission});
  };

  changeTaskInput = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    let currentTask = {
      ...this.state.currentTask,
      [name]: value
    };
    this.setState({
        ...this.state,
        currentTask
    })
  }

  addTask = (event) => {
    event.preventDefault();
    let task = {...this.state.currentTask}
    const now = new Date();
    task.id = now.getTime();
    let mission = [...this.state.mission, task];
    this.setState({...this.state, mission, currentTask: {name: ''}});
  };

  isAddButtonDisabled = () => {
    return this.state.currentTask.name === '';
  };

  render() {
      return (
      <div className="App">
         <div className="container">
            <div className="form">
              <AddTaskForm
                  task={this.state.currentTask}
                  onChangeInput={this.changeTaskInput}
                  onAddTask={this.addTask}
                  isAddButtonDisabled={this.isAddButtonDisabled()}
              />
            </div>
            {
                this.state.mission.map((task) => {
                    return <Task key={task.id}
                                 name={task.name}
                                 onRemoveTask={() => this.removeTask(task.id)}
                    />
                })
            }
        </div>
      </div>
    );
  }
}

export default App;

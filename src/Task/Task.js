import React, { Component } from 'react';
import './Task.css';



class Task extends Component {
    render(props) {
        return (
            <div className="task">
                <p className="mission">{this.props.name}</p>
                <p className="icon" onClick={this.props.onRemoveTask}>Delete</p>
            </div>
        )
    }
}


function AddTaskForm(props) {
    return <form className="form">
        <input className="input" type="text" name="name" value={props.task.name} onChange={props.onChangeInput}/>
        <button className="button" disabled={props.isAddButtonDisabled} type="submit" onClick={props.onAddTask}>Add</button>
    </form>
}



export { Task };
export { AddTaskForm };

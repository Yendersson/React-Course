import React, { Component, useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

/*class TaskForm extends Component{

    constructor(props){
        super(props)
        this.nameRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.levelRef = React.createRef(LEVELS.NORMAL);
    }

    addTask = (e) => {
        e.preventDefault();
        const newTask = new Task(
            this.nameRef.current.value,
            this.descriptionRef.current.value,
            false,
            this.levelRef.current.value
        );
        this.props.add(newTask);
    }

    render() {
        return (
            <form onSubmit={this.addTask} className="d-flex justifu-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
                <input type="text" ref={this.nameRef} id="inputName" className="form-control form-control-lg" required autoFocus placeholder="Task name" />
                <input type="text" ref={this.descriptionRef} id="inputDescription" className="form-control form-control-lg" required autoFocus placeholder="Task description" />
                <label htmlFor="selectLevel" className="sr-only">Priority</label>
                <select ref={this.levelRef} defaultValue={LEVELS.NORMAL} name="" id="selectLevel">
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                </select>

            </div>
            <button type="submit" className="btn btn-success btn-lg ms-3">Add</button>
        </form>
        )
    }
}*/
const TaskForm = ({add, length}) =>{
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    /*const normalStyle = {
        color: 'blue',
        fontWeight: 'bold',
    }

    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold',
    }

    const blockingStyle = {
        color: 'yellow',
        fontWeight: 'bold',
    }*/

    return (
        <form onSubmit={addTask} className="d-flex justifu-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
                <input type="text" ref={nameRef} id="inputName" className="form-control form-control-lg" required autoFocus placeholder="Task name" />
                <input type="text" ref={descriptionRef} id="inputDescription" className="form-control form-control-lg" required autoFocus placeholder="Task description" />
                <select className="form-control form-control-lg" ref={levelRef} defaultValue={LEVELS.NORMAL} name="" id="selectLevel">
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                </select>
                <button type="submit" className="btn btn-success btn-lg ms-3">
                    {length > 0 ? 'Add New Task' : 'Create your first task'}
                </button> 
            </div>
        </form>
    )
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
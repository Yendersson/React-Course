import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";

//Importamos la hoja de estilos de task.css
import '../../styles/task.css'

//Models
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

////CLASE POO
//class TaskComponent extends Component {
//
//    constructor(props){
//        super(props)
//        this.task = props.task;
//    }
//
//    componentDidMount(){
//
//    }
//
//    componentDidUpdate(prevProps, prevState){
//        if (prevProps.task != this.task){
//            console.log("Created Task")
//        }
//    }
//
//    componentWillUnmount(){
//        console.log(`Task: ${this.task.name} is gogin to unmount`)
//    }
//
//    taskLevelBadge = () => {
//        switch(this.task.level){
//            case LEVELS.NORMAL:
//                return(
//                    <h6 className="mb-0">
//                        <span className="badge bg-primary">
//                            {this.task.level}
//                        </span>
//                    </h6>)
//            case LEVELS.URGENT:
//                return(
//                    <h6 className="mb-0">
//                        <span className="badge bg-warning">
//                            {this.task.level}
//                        </span>
//                    </h6>)
//            case LEVELS.BLOCKING:
//                return(
//                    <h6 className="mb-0">
//                        <span className="badge bg-danger">
//                            {this.task.level}
//                        </span>
//                    </h6>)
//            default:
//                break;
//        }
//    }
//
//    taskIconCompleted = () => {
//        if (this.task.completed){
//            return (<i className="bi-toggle-on task-action" onClick={() => this.props.complete(this.task)} style={{color:'green'}}></i>) 
//        } else {
//            return (<i className="bi-toggle-off task-action" onClick={() => this.props.complete(this.task)} style={{color:'grey'}}></i>)
//        }
//}
//
//    render() {
//        return (
//            <tr className="fw-normal">
//                <th>
//                    <span className="m-2">{this.task.name}</span>
//                </th>
//                <td className="align-middle">
//                    <span className="m-2">{this.task.description}</span>
//                </td>   
//                <td className="align=middle">
//                    {/**Execution of function to return badge element */}
//                    {this.taskLevelBadge()}
//                </td>
//                <td className="align=middle">
//                    {/*Execution of function to return icon depending on completion task */}
//                    {this.taskIconCompleted()}
//                <i className="bi-trash task-action" onClick={() => this.props.remove(this.task)} style={{color:'tomato', fontWeight:'bold', fontSize:'20px'}}></i>
//                </td>
//            </tr>
//        )
//    }
//}
const TaskComponent = ({task, complete, remove}) => {

    useEffect(_ => {
        console.log("Created Task")
        return () => {
            console.log(`Task: ${task.name} is gogin to unmount`)
        }
    }, [task])

    /**
     * function that returns a Badge
     * depending on the level of the task
     */

    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-primary">
                            {task.level}
                        </span>
                    </h6>)
            case LEVELS.URGENT:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-warning">
                            {task.level}
                        </span>
                    </h6>)
            case LEVELS.BLOCKING:
                return(
                    <h6 className="mb-0">
                        <span className="badge bg-danger">
                            {task.level}
                        </span>
                    </h6>)
            default:
                break;
        }
    }

    /**
     * 
     * function that returns an icon depending of completed
     */
    function taskIconCompleted(){
        if (task.completed){
            return (<i onClick={() => complete(task)} className="bi-toggle-on task-action" style={{color:'green'}}></i>) 
        } else {
            return (<i onClick={() => complete(task)} className="bi-toggle-off task-action" style={{color:'grey'}}></i>)
        }
    }

    const taskCompleted = {
        fontWeigth: 'bold',
        color: 'gray',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeigth: 'bold',
        color: 'tomato'
    }
    
    return (
        <tr className="fw-normal" style={task.completed? taskCompleted : taskPending}>
            <th>
                <span className="m-2">{task.name}</span>
            </th>
            <td className="align-middle">
                <span className="m-2">{task.description}</span>
            </td>   
            <td className="align=middle">
                {/**Execution of function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className="align=middle">
                {/*Execution of function to return icon depending on completion task */}
                {taskIconCompleted()}
            <i className="bi-trash task-action" onClick={() => remove(task)} style={{color:'tomato', fontWeight:'bold', fontSize:'20px'}}></i>
            </td>
        </tr>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;
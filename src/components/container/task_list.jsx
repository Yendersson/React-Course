import React, { Component, useEffect, useState } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task"
import '../../styles/task.css'
import TaskForm from "../pure/forms/taskForm";

// CLASE POO
//class TaskListComponent extends Component {
//
//   constructor(props){
//        super(props)
//        this.defaultTask1 = new Task('Example','Default description', true, LEVELS.NORMAL);
//        this.defaultTask2 = new Task('Example2','Default description2', false, LEVELS.URGENT);
//        this.defaultTask3 = new Task('Example3','Default description3', false, LEVELS.BLOCKING);
//        this.state = {
//            tasks: [this.defaultTask1, this.defaultTask2, this.defaultTask3],
//            loading: false,
//        }
//    }
//
//    componentDidMount(){
//
//    }
//
//    componentDidUpdate(prevProps, prevState){
//        if(prevState.tasks != this.state.tasks){
//            console.log("Task  State has been modified")
//            this.setState(prevState => (
//                {
//                    loading: !prevState.loading
//                }
//            ))
//        }
//    }
//
//    componentWillUnmount(){
//        console.log('TaskList componet is going to unmount')
//    }
//
//    completeTask = (task) => {
//        console.log("Complete this Task:", task);
//        const index = this.state.tasks.indexOf(task);
//        const tempTasks = [...this.state.tasks];
//        tempTasks[index].completed = !tempTasks[index].completed;
//        this.setState(prevState => (
//            {
//                tasks: tempTasks
//            }
//        ))  
//    }
//
//    deleteTask = (task) => {
//        console.log("delete this Task:", task);
//        const index = this.state.tasks.indexOf(task);
//        const tempTasks = [...this.state.tasks];
//        tempTasks.splice(index,1);
//        this.setState(prevState => (
//            {
//                tasks: tempTasks
//            }
//        ))      
//
//
//    }
//   addTask = (task) => {
//    console.log("create this Task:", task);
//    //const index = tasks.indexOf(task);
//    const tempTasks = [...this.state.tasks];
//    tempTasks.push(task);
//        this.setState(prevState => (
//            {
//                tasks: tempTasks
//            }
//        ))
//}
//
//
//    render() {
//        return (
//            <div>
//                <div className="col-12">
//                    <div className="card">
//                        {/**Card Header */}
//                        <div className="crad-header p-3">
//                            <h5>
//                                Your Tasks:
//                            </h5>
//                        </div>
//                        {/**Card Body */}
//                        <div className="card-body" data-mdb-perfect-scrollbar='true' style={{position:'relative', height:'400px'}}>
//                            <table >
//                                <thead>
//                                    <tr>
//                                        <th scope="col">Title</th>
//                                        <th scope="col">Description</th>
//                                        <th scope="col">Priority</th>
//                                        <th scope="col">Actions</th>
//                                    </tr>
//                                </thead>
//                                <tbody>
//                                    {/**Iterar sobre una lista de tareas */}
//                                    {this.state.tasks.map((task, index) => {
//                                        return (
//                                            <TaskComponent 
//                                            task={task} 
//                                            key={index}
//                                            complete={this.completeTask}
//                                            remove={this.deleteTask}
//                                            >
//
//                                            </TaskComponent>
//                                        )
//                                    })
//                                }
//                                </tbody>
//                            </table>
//                        </div>
//                        <TaskForm add={this.addTask}></TaskForm>
//                    </div>
//                </div>
//                {/*TODO: Aplicar un for/map para renderizar una lista de tareas*/}
//            </div>
//        )
//    }
//
const TaskListComponent = () => {
    const defaultTask1 = new Task('Example','Default description', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2','Default description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3','Default description3', false, LEVELS.BLOCKING);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
    const [loading, setLoading] = useState(true)

    //Control del ciclo de vida del componente
    useEffect(_ => {
        console.log("Task  State has been modified")
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => {
            console.log('TaskList componet is going to unmount')
        }
    },[tasks])


    function completeTask(task){
         console.log("Complete this Task:", task);
         const index = tasks.indexOf(task);
         const tempTasks = [...tasks];
         tempTasks[index].completed = !tempTasks[index].completed;
         //We update the state of the component with the new lost of task and it will update this iteration of the task in order to show the task updated
         setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log("Delete this Task:", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log("Delete this Task:", task);
        //const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task)
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table >
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/**Iterar sobre una lista de tareas */}
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                            task={task} 
                            key={index}
                            complete={completeTask}
                            remove={deleteTask}
                            >

                            </TaskComponent>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }

    let tasksTable;

    if (tasks.length > 0) {
        tasksTable = <Table></Table>
    } else {
        tasksTable = (
            <div>
                <h3>There are no tasks to show</h3>
                <h4>Please, create one</h4>
            </div>  
        ) 
    }

    const loadingStyle = {
        color: 'gray',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className="col-12">
                <div className="card">
                    {/**Card Header */}
                    <div className="crad-header p-3">
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    {/**Card Body */}
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={{position:'relative', height:'400px'}}>
                        {/*TODO: Add Loading Spinner */}
                        {loading ? (<p style={loadingStyle}>Loading tasks...</p> ): tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
            {/*TODO: Aplicar un for/map para renderizar una lista de tareas*/}
        </div>
    )
}

export default TaskListComponent
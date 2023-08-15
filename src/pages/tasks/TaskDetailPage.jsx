import React8 from "react";
import { useParams } from "react-router-dom";

const TaskDetailPage = ({tasks}) =>{
    const {id} = useParams();
    console.log(typeof id)
    
    return (
        <div>
            <h1>Task Detail - {id}</h1>
            <h2>{tasks[parseInt(id)-1].name}</h2>
            <h3>{tasks[parseInt(id)-1].description}</h3>
        </div>
    )
}

export default TaskDetailPage
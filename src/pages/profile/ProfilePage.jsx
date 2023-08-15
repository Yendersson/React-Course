import React from "react";
import { useLocation, useNavigate} from "react-router-dom";


const ProfilePage = ({user}) =>{

    const location = useLocation();
    const history = useNavigate();

    const navigate = (path) => {
        history(path)
    }

    const goBack = () => {
        history(-1);
    }

    const goForward = () => {
        history(1);
    }
    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={() => navigate('/tasks')}>Tasks</button>
            <button onClick={goBack}>Go back</button>
        </div>
    )
}

export default ProfilePage
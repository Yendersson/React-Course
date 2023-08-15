import React from "react";
import { useLocation, useNavigate} from "react-router-dom";

const NotFoundPage = () => {

    const location = useLocation();
    const history = useNavigate();

    const navigate = (path) => {
        history(path)
    }

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={() => navigate('/')}>
                Go back to home
            </button>
        </div>
    )
}

export default NotFoundPage;
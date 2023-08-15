import React, { Component } from "react";
import { useLocation, useNavigate} from "react-router-dom";

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();

    console.log('We are in Route: ', location.pathname)

    const navigate = (path) => {
        history(path)
    }

    const goBack = () => {
        history(-1);
    }

    const goForward = () => {
        history(1);
    }

    const navigateProps = (path) =>{
        const historyProps = {
            pathname: path,
            search: '?online=true',
            hash: '123456'
        }
                
        console.log('hstory',historyProps)
        history(historyProps,{state: {online:true}});
    }

    return(
        <div>
            <h2>Home Page</h2>
            <button onClick={() => navigate('/profile')}>
                    Go to profile
                </button>
               <button onClick={() => navigateProps('/online-state')}>
                    Go to page with sate /query params
               </button>
        </div>
    )
}

export default HomePage;
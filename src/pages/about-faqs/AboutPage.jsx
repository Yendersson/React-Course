import React from "react";

import { useLocation, useNavigate} from "react-router-dom";

const AboutPage = () => {

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
    return (
        <div>
            <h1>
                About | FAQS
            </h1>
            <div>
                <button onClick={() => navigate('/')}>
                    Go to Home
                </button>
                <button onClick={goBack}>
                    Go Back
                </button>
                <button onClick={goForward}>
                    Go Forward
                </button>
            </div>
        </div>
    )
}

export default AboutPage;
import React from "react";
import { Button } from "@mui/material";
import Copyright from "../../components/pure/Copyright";
import { useNavigate } from "react-router-dom";

const DashBoardPage = () => {

    const history = useNavigate();

    const logout = () =>{
        history('/login')
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Logout</Button>
            <Copyright></Copyright>
        </div>
    )
}

export default DashBoardPage;
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'

import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import { Component, useEffect } from 'react';
import StatePage from './pages/home/StatePage';
import DashBoard from './pages/dashboard/DashBoard';
import DashBoardPage from './pages/dashboard/DashBoard';

function AppRoutingFinal() {

  let loggedIn = true;
  return (
    <Router>

      <Routes>
        {/* Redirections to protect our routes */}
        <Route exact path='/' 
          element={
            loggedIn ? 
            <Navigate to={'/dashboard'}></Navigate>
            :
            <Navigate to={'/login'}></Navigate>
          }>
        </Route>  
        {/*Login Route */}
        <Route exact path='/login' element={<LoginPage/>}></Route>
        {/*DashBoard Route */}
        <Route exact path='/dashboard' element={
            loggedIn ? 
            <DashBoardPage/>
            :
            <Navigate to={'/login'}></Navigate>
          }>
          </Route>
        <Route element={<NotFoundPage/>}></Route>

      </Routes>

    </Router>
  );
}

export default AppRoutingFinal;

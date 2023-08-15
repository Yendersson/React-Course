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

//COMPONENT CLASS POO
//class AppRoutingOne extends Component{
//
//  constructor(props){
//    super(props);
//    
//    this.logged = false;
//    this.taskList = [
//      {
//        id: 1,
//        name: 'task1',
//        description: 'My first Task',
//      },
//      {
//        id: 2,
//        name: 'task2',
//        description: 'My second Task',
//      }
//    ]
//  }
//
//  componentDidMount(){
//    this.logged = localStorage.getItem('credentials');
//    console.log('User Logged?', this.logged)
//  }
//
//  render() {
//    return (
//      <Router>
//      <div>
//        <aside>
//          <Link to={'/'}>|| HOME |</Link>
//          <Link to={'/about'}>| ABOUT |</Link>
//          <Link to={'/faqs'}>| FAQs ||</Link>
//          <Link to={'/task/1'}>| Task 1 ||</Link>
//          <Link to={'/task/2'}>| Task 2 ||</Link>
//          <Link to={'/una404'}>| Not Existing route ||</Link>
//          <Link to={'/login'}>| LOGIN |</Link>
//        </aside>
//
//        <main>
//          <Routes>
//            <Route exact path='/' element={ <HomePage></HomePage>}></Route>
//            <Route exact path='/online-state' element={ <StatePage></StatePage>}></Route>
//
//            <Route path='/login' 
//              element={ 
//                this.logged ? 
//                 <Navigate to={'/'} ></Navigate>
//                  : 
//                  <LoginPage></LoginPage>
//              }>
//            </Route>
//
//            <Route path={('/about' || '/faqs')} element={<AboutPage></AboutPage>}></Route>
//
//            <Route path='/profile' element={
//              this.logged ? <ProfilePage></ProfilePage>
//              : //() => {
//                //alert('you must be logged in')
//                //return(
//                  <Navigate to={'/login'} ></Navigate>
//                //)
//              //}  
//                }>
//            </Route>
//            {/* logged ? (
//              <Route path='/profile' element={ <ProfilePage></ProfilePage> }></Route>
//              ) : (
//                <Route path='/profile' element={<Navigate to={'/'} ></Navigate>}></Route>
//              )
//              */}
//            
//            <Route path='/tasks' element={ <TaskPage></TaskPage>}></Route>
//            <Route 
//            exact 
//            path='/task/:id' 
//            element={ <TaskDetailPage tasks={this.taskList}></TaskDetailPage>}>
//
//            </Route>
//            {/*404 - Page not Found */}
//            <Route path='*' element={ <NotFoundPage></NotFoundPage>}></Route>
//          </Routes>
//        </main>
//
//      </div>
//    </Router>
//    )
//  }
//}

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'task1',
      description: 'My first Task',
    },
    {
      id: 2,
      name: 'task2',
      description: 'My second Task',
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  }, [])

  return (
    <Router>
      <div>
        <aside>
          <Link to={'/'}>|| HOME |</Link>
          <Link to={'/about'}>| ABOUT |</Link>
          <Link to={'/faqs'}>| FAQs ||</Link>
          <Link to={'/task/1'}>| Task 1 ||</Link>
          <Link to={'/task/2'}>| Task 2 ||</Link>
          <Link to={'/una404'}>| Not Existing route ||</Link>
          <Link to={'/login'}>| LOGIN |</Link>
        </aside>

        <main>
          <Routes>
            <Route exact path='/' element={ <HomePage></HomePage>}></Route>
            <Route exact path='/online-state' element={ <StatePage></StatePage>}></Route>

            <Route path='/login' 
              element={ 
                logged ? 
                 <Navigate to={'/'} ></Navigate>
                  : 
                  <LoginPage></LoginPage>
              }>
            </Route>

            <Route path={('/about' || '/faqs')} element={<AboutPage></AboutPage>}></Route>

            <Route path='/profile' element={
              logged ? <ProfilePage></ProfilePage>
              : //() => {
                //alert('you must be logged in')
                //return(
                  <Navigate to={'/login'} ></Navigate>
                //)
              //}  
                }>
            </Route>
            {/* logged ? (
              <Route path='/profile' element={ <ProfilePage></ProfilePage> }></Route>
              ) : (
                <Route path='/profile' element={<Navigate to={'/'} ></Navigate>}></Route>
              )
              */}
            
            <Route path='/tasks' element={ <TaskPage></TaskPage>}></Route>
            <Route 
            exact 
            path='/task/:id' 
            element={ <TaskDetailPage tasks={taskList}></TaskDetailPage>}>

            </Route>
            {/*404 - Page not Found */}
            <Route path='*' element={ <NotFoundPage></NotFoundPage>}></Route>
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default AppRoutingOne;

import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login'
import StudentIndex from './Student/StudentIndex'
function Main(){
    return (
        <Router>      
            <Route path="/" exact component={Login} />
            <Route path="/student/index" exact component={StudentIndex} />
        </Router>
    )
}
export default Main
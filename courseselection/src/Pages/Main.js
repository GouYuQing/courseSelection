import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Login'
import StudentIndex from './Student/StudentIndex'
import GroupConfirm from './Student/GroupConfirm'
import LeaderConfirm from './Student/LeaderConfirm'
import MemberInfo from './Student/MemberInfo'
import TitleView from './Student/TitleView'
import DataUpload from './Student/dataUpload'
import SelfAssessment from './Student/selfAssessment'
import CheckData from './Student/checkData'

function Main(){
    return (
        <Router>      
            <Route path="/" exact component={Login} />
            <Route path="/student/index" exact component={StudentIndex} />
             <Route path="/student/groupConfirm" exact component={GroupConfirm} />
            <Route path="/student/leaderConfirm" exact component={LeaderConfirm} />
           <Route path="/student/memberInfo" exact component={MemberInfo} />
            <Route path="/student/titleView" exact component={TitleView} />
            <Route path="/student/dataUpload" exact component={DataUpload} />
            <Route path="/student/selfAssessment" exact component={SelfAssessment} />
            <Route path="/student/checkData" exact component={CheckData} />

        </Router>
    )
}
export default Main
import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../static/css/StudentIndex.css'
import CourseSelect from './CourseSelect'
import GroupConfirm from './GroupConfirm'
import LeaderConfirm from './LeaderConfirm'
import MemberInfo from './MemberInfo'
import TitleView from './TitleView'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function StudentIndex(props) {
    const [collapsed, setCollapsed] = useState(false);
    //可左右滑动只显示图标
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    const memberChange=(e)=>{
        if (e.key == 'groupConfirm') {
            props.history.push('/student/groupConfirm')
          }else if(e.key=='leaderConfirm'){
            props.history.push('/student/leaderConfirm')
          } else if(e.key=='memberInfo'){
            props.history.push('/student/memberInfo')
          }else if(e.key=='titleView'){
            props.history.push('/student/titleView')
          }
    };
    function dataChange(e){
        if (e.key == 'dataUpload') {
            props.history.push('/student/dataUpload')
          }else if(e.key=='selfAssessment'){
            props.history.push('/student/selfAssessment')
          } else if(e.key=='checkData'){
            props.history.push('/student/checkData')
          }
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <PieChartOutlined />
                        <span>学生工作台</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span>选题</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        onClick={memberChange}
                        title={
                            <span>
                                <UserOutlined />
                                <span>组员工作台</span>
                            </span>
                        }
                    >
                        <Menu.Item key="groupConfirm">分组确认</Menu.Item>
                        <Menu.Item key="leaderConfirm">组长确认</Menu.Item>
                        <Menu.Item key="memberInfo">组员信息查看</Menu.Item>
                        <Menu.Item key="titleView">选题查看</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        onClick={dataChange}
                        title={
                            <span>
                                <TeamOutlined />
                                <span>成果操作</span>
                            </span>
                        }
                    >
                        <Menu.Item key="dataUpload">开发资料上传</Menu.Item>
                        <Menu.Item key="selfAssessment">自我评价</Menu.Item>
                        <Menu.Item key="checkData">组长检查成果</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="10">
                        <FileOutlined />
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>课程设计选课系统</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Router>
                        {/* <Route path="/student/index/" exact component={StudentIndex} /> */}
                        {/* <Route path="/student/groupConfirm/" exact component={GroupConfirm} />
                         <Route path="/student/leaderConfirm/" exact component={LeaderConfirm} />
                        <Route path="/student/memberInfo/" exact component={MemberInfo} />
                        <Route path="/student/titleView/" exact component={TitleView} /> */}
                        <Route path="/student/index/" exact component={CourseSelect} /> 
                    </Router>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Curriculum Design System Design ©2020 Created By Yu</Footer>
            </Layout>
        </Layout>
    )
}
export default StudentIndex;
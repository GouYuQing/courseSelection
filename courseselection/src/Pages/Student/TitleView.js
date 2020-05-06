import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../static/css/CourseSelect.css'
import { Table} from 'antd';
function TitleView(props) {
    const dataSource = [
      {
        key: '1',
        id:'1',
        studentId:'201710804105',
        name:'雨',
        class:'2017级软件工程3班',
        leader:'涛',
        projectName:'学生管理系统'
    },
    ];
    const columns = [
        {
        title: '组号',
        dataIndex: 'id',
        width: 80,
      }, 
        {
            
          title:'学号',
          dataIndex:'studentId',
          sorter: (a, b) => a.studentId - b.studentId,
          width:80
        },
        {
          title: '姓名',
          dataIndex: 'name',
          width: 80,
        }, 
        {
          title: '班级',
          dataIndex: 'class',
          width: 80,
        },
        {
        title: '组长',
        dataIndex: 'leader',
        width: 80,
      }, {
          title:'课程名称',
          dataIndex:'projectName',
          width:80
      }
      
      ];
      return (
        <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          bordered={true}
          scroll={{ x: '100%' }}
          className='formTable'
        />
        </div>
      )
}
export default TitleView;
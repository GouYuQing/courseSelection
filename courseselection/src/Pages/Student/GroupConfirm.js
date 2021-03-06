import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../static/css/CourseSelect.css'
import { Table,Popconfirm, message, Button } from 'antd';
function GroupConfirm(props) {
  const text="是否确认该组成员？";
    const dataSource = [
      {
        key: '1',
        id:'1',
        leader:'涛',
        projectName: '学生管理系统',
        description:'哈哈哈哈哈哈哈'
    }
    ];
    const columns = [
        {
          title:'所在组',
          dataIndex:'id',
          sorter: (a, b) => a.id - b.id,
          width:80
        },
        {
        title: '组项目名称',
        dataIndex: 'projectName',
        width: 80,
      },  {
        title:'项目描述',
        dataIndex:'description',
        width:80
      },
      ];
      function confirm() {
        message.info('已确认');
      }
      return (
        <div>
        <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button type="primary">确认组</Button>
        </Popconfirm>
        
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
export default GroupConfirm;
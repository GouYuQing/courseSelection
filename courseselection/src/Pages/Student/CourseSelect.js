import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../static/css/CourseSelect.css'
import { Table} from 'antd';
import { DeleteOutlined,EditOutlined,CheckOutlined } from '@ant-design/icons';

function CourseSelect(props) {
  const dataSource = [
    {
      key: '1',
      id:'1',
      projectName: '学生管理系统',
      difficulty:'80%',
      description:'这是一个关于学生的管理系统'
      // age: 32,
      // address: '西湖区湖底公园1号',
      // email:'3319948815@qq.com',
      // sex:'女',
      // phone:'123',
      // website:'6399',
      // createtime:'2020-4-29'
      
    },
    {
      key: '2',
      id:'2',
      projectName: '图书管理系统',
      difficulty:'95%',
      description:'这是一个关于图书的管理系统'
      // age: 42,
      // address: '西湖区湖底公园1号',
      // email:'3319948815@qq.com',
      // sex:'女',
      // phone:'123',
      // website:'6399',
      // createtime:'2020-4-29'
    },
  ];
  const editClick=e=>{
    console.log(e);
  }
  const onDelete=e=>{
    console.log(e);
  }
  // const { checkChange, onDelete, editClick, dataSource, loading } = this.props;
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
    }),
  };
  const columns = [
    {
      title:'序号',
      dataIndex:'id',
      sorter: (a, b) => a.id - b.id,
      width:80
    },
    {
    title: '项目名称',
    dataIndex: 'projectName',
    width: 80,
  }, 
  {
    title:'难度系数',
    dataIndex:'difficulty',
    width:80
  },
  {
    title:'项目描述',
    dataIndex:'description',
    width:80
  },
  // {
  //   title: '性别',
  //   dataIndex: 'sex',
  //   filters: [
  //     { text: '男', value: '男' },
  //     { text: '女', value: '女' },
  //   ],
  //   onFilter: (value, record) => record.sex.indexOf(value) === 0,
  //   width: 80,
  // }, 
  // {
  //   title: '年龄',
  //   dataIndex: 'age',
  //   sorter: (a, b) => a.age - b.age,
  //   width: 80,
  // }, 
  // {
  //   title: '地址',
  //   dataIndex: 'address',
  //   width: 180,
  // }, 
  // {
  //   title: '手机号',
  //   dataIndex: 'phone',
  //   width: 120,
  // },
  //  {
  //   title: '邮箱',
  //   dataIndex: 'email',
  //   width: 140,
  // },
  //  {
  //   title: '网址',
  //   dataIndex: 'website',
  //   width: 120,
  // },
  //  {
  //   title: '创建时间',
  //   dataIndex: 'createtime',
  //   sorter: (a, b) => moment(a.createtime) - moment(b.createtime),
  //   width: 150,
  // }, 
  {
    title: '操作',
    dataIndex: 'opera',
    width: 100,
    render: (text, record) =>
      <div className='opera'>
        <span onClick={() => editClick(record.key)}>
        <CheckOutlined />选择
        </span>
        {/* <span onClick={() => editClick(record.key)}>
          <EditOutlined  /> 修改
          </span><br />
        <span><Popconfirm title="确定要删除吗?" onConfirm={() => onDelete(record.key)}><DeleteOutlined /> 删除 </Popconfirm></span> */}
      </div>
  }];
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
      bordered={true}
      scroll={{ x: '100%' }}
      className='formTable'
    />
  )
  // }
}
export default CourseSelect;
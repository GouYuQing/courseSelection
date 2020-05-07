import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { Table,Popconfirm, message, Button,Rate  } from 'antd';
function CheckData(props) {
  const text="是否确认提交检查结果？";
    const dataSource = [
      {
        key:'1',
        projectName: '学生管理系统',
        memberName:'雨',
        show:<Button type="primary">点击查看</Button>,
        score1:<Rate allowHalf defaultValue={4} />,
    },
    {
        key:'2',
        projectName: '学生管理系统',
        memberName:'楠',
        show:<Button type="primary">点击查看</Button>,
        score1:<Rate allowHalf defaultValue={3.5} />,
    },
    ];
    const columns = [
        {
          title:'课程名称',
          dataIndex:'projectName',
          width:80
        },
        {
            title:'组员名字',
            dataIndex:'memberName',
            width:80
        },
        {
            title:'查看',
            dataIndex:'show',
            width:80
        },
        {
          title: '评分',
          dataIndex: 'score1',
          width: 80,
        }, 
        
      ];
      function confirm() {
        message.info('已提交');
      }
      return (
        <div>
        <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button type="primary">提交</Button>
        </Popconfirm>
        <hr/>
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
export default CheckData;
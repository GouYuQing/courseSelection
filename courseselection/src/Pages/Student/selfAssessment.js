import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { Table,Popconfirm, message, Button,Rate  } from 'antd';
function SelfAssessment(props) {
  const text="是否确认提交自评？";
    const dataSource = [
      {
        key:'1',
        projectName: '学生管理系统',
        score1:<Rate allowHalf defaultValue={2.5} />,
        evaluation:'还行还行还行',
    },
    ];
    const columns = [
        {
          title:'课程名称',
          dataIndex:'projectName',
          width:80
        },
        {
          title: '评分',
          dataIndex: 'score1',
          width: 80,
        }, 
        {
          title: '自评',
          dataIndex: 'evaluation',
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
export default SelfAssessment;
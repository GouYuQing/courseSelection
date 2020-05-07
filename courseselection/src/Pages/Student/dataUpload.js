import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../static/css/CourseSelect.css'
import { Upload, Popconfirm,Button, message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
 function DataUpload(){
    const text="是否确认提交？";
    function confirm() {
        message.info('已提交');
      }
    const props = {
        name:'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        multiple: true,
        headers: {
            authorization: 'authorization-text',
          },
          onChange(info) {
            if (info.file.status !== 'uploading') {
              console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
              message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
              message.error(`${info.file.name} file upload failed.`);
            }
          },
      };
      
     return(
         <div>
        <Upload {...props}>
        <Button>
          <UploadOutlined /> Upload
        </Button>
        </Upload>
        <hr/>
        <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button type="primary">提交</Button>
        </Popconfirm>
         </div>
     )
 }
 export default DataUpload;
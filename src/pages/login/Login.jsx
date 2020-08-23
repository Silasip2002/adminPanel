import React, {Component} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import logo from "./image/logo.png"
import './Login.less'

export default class Login extends Component {

    onFinish = (err,values) => {
      if(!err){
            console.log("登入成功！")
      }else {
          console.log("登入失敗！")
      }
    }

    render() {
            return (
                <div className="login">
                    <div className="login-header">
                        <img src ={logo} alt="logo"/>
                        <h1>后台登陸系統</h1>
                    </div>
                    <div className="login-content">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{remember: true}}
                            onFinish={this.onFinish}>
                            <Form.Item
                                name="username"
                                rules={[
                                        {required: true,message: '輸入用戶名'},
                                        {min:4,message: '用戶名最少4位數'},
                                        {max:12,message: '用戶名最多12位數'},
                                        {pattern:/^[a-zA-Z0-9_]+$/,message: '用戶名只能數字,字母及底線'}
                                ]}>
                                <Input prefix={<UserOutlined className = "site-form-item-icon" />}placeholder="用戶名"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {required: true,message: '輸入密碼'},
                                    {min:4,message: '密碼最少4位數'},
                                    {max:12,message: '密碼最多12位數'},
                                    {pattern:/^[a-zA-Z0-9_]+$/,message: '用密碼只能數字,字母及底線'}
                                ]}>
                                <Input
                                    prefix={<LockOutlined className = "site-form-item-icon" />} type="password"placeholder="密碼"/>
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle="noStyle">
                                    <Checkbox>記住帳號</Checkbox>
                                </Form.Item>
                                <div className="login-form-forgot">
                                    <a  href="">忘記密碼</a>
                                </div>  
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登入
                                </Button>
                                <a href="">注冊</a>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            )
    }
}

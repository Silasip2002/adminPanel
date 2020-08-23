import React, { Component } from 'react'
import "./Login.less"
import logo from "./image/logo.png"

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo}></img>
                    <h1>後台管理系統</h1>
                </div>
                <div className="login-content">
                    <h2>用戶登陸</h2>
                </div>
            </div>
        )
    }
}

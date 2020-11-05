import React from 'react';
import {Button, Card, Input} from 'antd'

const loginStyle = {
  backgroundColor: 'lightsalmon',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
}

const inputStyle = {
  marginTop: '20px'
}

const loginButton = {
  width: '100px',
  marginTop: '10px',
  marginLeft: '180px'
}

export default function Login(props) {
  function intoBackstage() {
    console.log()
    props.history.push('/frame')
  }
  return(
    <div className='login-frame' style={loginStyle}>
      <Card style={{width: '500px', height: '200px', border: false, margin: '200px auto' }}>
        <Input style={inputStyle} placeholder='请输入账号'></Input>
        <Input.Password style={inputStyle} placeholder='请输入密码'></Input.Password>
        <Button style={loginButton} type='primary' onClick={intoBackstage}>
          登录
        </Button>
      </Card>
    </div>
  )
}


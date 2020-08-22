import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Card, Form, Input, Space } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone
} from '@ant-design/icons'

function Login(props) {
  const [form] = Form.useForm()

  const onFinish = values => {
    console.log('Finish:', values)
  }

  return (
    <Card title="Login">
      <Form
        form={form}
        name="login"
        layout="vertical"
        size="large"
        onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input
            prefix={
              <>
                <UserOutlined className="site-form-item-icon" />
                &nbsp;
              </>
            }
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password
            prefix={
              <>
                <LockOutlined className="site-form-item-icon" />
                &nbsp;
              </>
            }
            placeholder="Password"
            iconRender={visible =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item className="form-buttons">
          <Space align="center" size="middle">
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
            <Button type="secondary">
              <Link to="/sign-up">Sign up</Link>
            </Button>
          </Space>
        </Form.Item>
        <Form.Item className="form-link">
          <Link to="/reset-password">Forgot password?</Link>
        </Form.Item>
      </Form>
    </Card>
  )
}

Login.propTypes = {}

export default Login

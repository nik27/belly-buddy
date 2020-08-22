import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Card, Form, Input } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined
} from '@ant-design/icons'

function SignUp(props) {
  const [form] = Form.useForm()

  const onFinish = values => {
    console.log('Finish:', values)
  }

  return (
    <Card title="Sign Up">
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
                &nbsp;@
              </>
            }
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input
            prefix={
              <>
                <MailOutlined className="site-form-item-icon" />
                &nbsp;
              </>
            }
            placeholder="Email"
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
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password
            prefix={
              <>
                <LockOutlined className="site-form-item-icon" />
                &nbsp;
              </>
            }
            placeholder="Confirm Password"
            iconRender={visible =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item className="form-buttons">
          <Button type="primary">
            <Link to="/sign-up">Sign up</Link>
          </Button>
        </Form.Item>
        <Form.Item className="form-link">
          Already have an account? <Link to="/login">Login</Link>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default SignUp

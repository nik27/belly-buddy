import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Form, Input, message } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined
} from '@ant-design/icons'
import { handleSignUp, resetSignUpForm } from '../../flex/actions'
import { getSignUpError, getSignUpLoading } from '../../flex/selectors'

function SignUp() {
  const dispatch = useDispatch()
  const signUpError = useSelector(state => getSignUpError(state))
  const signUpLoading = useSelector(state => getSignUpLoading(state))
  const [form] = Form.useForm()

  const onFinish = values => {
    dispatch(handleSignUp(values))
  }

  useEffect(() => {
    return () => {
      dispatch(resetSignUpForm())
    }
  }, [dispatch])

  useEffect(() => {
    if (signUpLoading) {
      message.loading('Creating your account')
    } else {
      if (signUpError) {
        console.log(signUpError)
        message.error(signUpError)
      }
    }
  }, [signUpError, signUpLoading])

  return (
    <Card title="Sign Up">
      <Form
        form={form}
        name="login"
        layout="vertical"
        size="large"
        onFinish={onFinish}>
        <Form.Item
          name="handle"
          rules={[{ required: true, message: 'Please input your handle!' }]}>
          <Input
            prefix={
              <>
                <UserOutlined className="site-form-item-icon" />
                &nbsp;@
              </>
            }
            placeholder="Handle"
          />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please input valid email!' }
          ]}>
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
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please input your password!' },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  'The two passwords that you entered do not match!'
                )
              }
            })
          ]}>
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
          <Button type="primary" htmlType="submit">
            Sign up
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

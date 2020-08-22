import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Card, Form, Input } from 'antd'
import { MailOutlined } from '@ant-design/icons'

function ResetPasswordPage(props) {
  const [form] = Form.useForm()

  const onFinish = values => {
    console.log('Finish:', values)
  }

  return (
    <Card title="Forgot Password?">
      <Form
        form={form}
        name="login"
        layout="vertical"
        size="large"
        onFinish={onFinish}>
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
        <Form.Item className="form-buttons">
          <Button type="primary">
            <Link to="/login">Reset Password</Link>
          </Button>
        </Form.Item>
        <Form.Item className="form-link">
          <Link to="/login">Back to Login</Link>
        </Form.Item>
      </Form>
    </Card>
  )
}

ResetPasswordPage.propTypes = {}

export default ResetPasswordPage

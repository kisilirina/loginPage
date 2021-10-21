import React from 'react'
import './Loginpage.css'
import { Form, Input, Typography, Button } from 'antd'

const { Title } = Typography
export const Loginpage = () => {

  const onFinish = async (values) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_AUTH}/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        },
      )
      if (!response.ok) {
        throw new Error(`response.status ${response.status}`)
      }
    } catch (err) {
      console.log(`LoginPageError: ${err.message}`)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="wrapper">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="login-form"
      >
        <Title style={{ padding: '48px 48px 16px' }}>
          {'Log in to your account'}
        </Title>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input autoComplete={'on'} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password autoComplete={'on'} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button block={true} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
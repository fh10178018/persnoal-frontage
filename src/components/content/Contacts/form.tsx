import { SendOutlined } from '@ant-design/icons'
import Form from 'antd/lib/form/Form'
import FormItem from 'antd/lib/form/FormItem'
import React from 'react'
import { MyButton, MyInput, MyTextArea } from '../../common'
import { useContact } from './api'


export default function ContactForm() {
  const [
    isLoading,
    onFinish
  ] = useContact()
  return (
    <Form onFinish={onFinish} autoComplete="off" data-testid="msgform">
      <FormItem
        name="name"
        rules={[{ required: true, message: "请输入昵称" }, { max: 20, message: '昵称不得超过20字符' }]}
      >
        <MyInput
          data-testid="name"
          size="large"
          placeholder="请输入你的昵称"
        />
      </FormItem>
      <FormItem
        name="email"
        rules={[
          { required: true, message: "请输入email" },
          { pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/, message: '邮箱格式不正确' },
          { max: 50, message: '邮箱不得超过50字符' }
        ]}
      >
        <MyInput
          data-testid="email"
          size="large"
          placeholder="请输入你的邮箱"
        />
      </FormItem>
      <FormItem
        name="message"
        rules={[{ required: true, message: "请输入信息" }, { max: 100, message: '信息不得超过100字符' }]}
      >
        <MyTextArea
          data-testid="message"
          size="large"
          showCount
          rows={4}
          maxLength={100}
          placeholder="请输入你的信息"
        />
      </FormItem>

      <FormItem style={{ marginBottom: 0 }}>
        <MyButton
          data-testid="msgform"
          type="primary"
          size="large"
          loading={isLoading}
          block={true}
          htmlType="submit"
          icon={<SendOutlined />}
        >
          发送信息
        </MyButton>
      </FormItem>
    </Form>
  )
}

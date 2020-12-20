import { Button, Input } from 'antd'
import Form from 'antd/lib/form/Form'
import FormItem from 'antd/lib/form/FormItem'
import React from 'react'
import { useContact } from './api'
export default function ContactForm() {
  const [
    isLoading,
    onFinish
  ] = useContact()
  return (
    <Form onFinish={onFinish} data-testid="msgform">
      <FormItem
        name="name"
        rules={[{ required: true, message: "请输入昵称" }]}
      >
        <Input
          data-testid="name"
          size="large"
          placeholder="请输入你的昵称"
        />
      </FormItem>
      <FormItem
        name="email"
        rules={[{ required: true, message: "请输入email" }]}
      >
        <Input
          data-testid="email"
          size="large"
          placeholder="请输入你的邮箱"
        />
      </FormItem>
      <FormItem
        name="message"
        rules={[{ required: true, message: "请输入信息" }]}
      >
        <Input
          data-testid="message"
          size="large"
          placeholder="请输入你的信息"
        />
      </FormItem>

      <FormItem>
        <Button
          data-testid="msgform"
          type="primary"
          size="large"
          block={true}
          htmlType="submit"
        >
          登录
        </Button>
      </FormItem>
    </Form>
  )
}
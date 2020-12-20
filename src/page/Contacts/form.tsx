import { SendOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import Form from 'antd/lib/form/Form'
import FormItem from 'antd/lib/form/FormItem'
import React from 'react'
import styled from 'styled-components'
import { useContact } from './api'

const MyButton = styled(Button)`
  background-color:${props => props.theme.primary};
  border-color:${props => props.theme.primary};
  transition:box-shadow 300ms;
  width: auto;
  :hover,:focus{
    background-color:${props => props.theme.primary};
    border-color:${props => props.theme.primary};
    box-shadow: inset -1px -1px 10px #0000008c;
    .anticon{
      transform: rotate(-45deg);
    }
  }
  .anticon{
    background: white;
    color: ${props => props.theme.primary};
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;
  }
  .anticon-loading{
    padding:0 !important;
  }
`

const MyInput = styled(Input)`
  border: none;
  background-color:transparent !important;
  border-bottom: 2px solid transparent;
  border-color:#bfbfbf;
  border-radius: 0;
  transition:border-color 500ms;
  :hover,:focus{
    box-shadow:none;
    border-color:rgba(0, 0, 0, 0.85);
  }
`

const MyText = styled(Input.TextArea)`
  textarea{
    border: none;
    background:transparent !important;
    background-color:transparent !important;
    border-bottom: 2px solid transparent;
    border-color:#bfbfbf;
    border-radius: 0;
    transition:border-color 500ms;
    :hover,:focus{
      box-shadow:none;
      border-color:rgba(0, 0, 0, 0.85);
    }
  }
`

export default function ContactForm() {
  const [
    isLoading,
    onFinish
  ] = useContact()
  return (
    <Form onFinish={onFinish} autoComplete="off" data-testid="msgform">
      <FormItem
        name="name"
        rules={[{ required: true, message: "请输入昵称" }]}
      >
        <MyInput
          data-testid="name"
          size="large"
          placeholder="请输入你的昵称"
        />
      </FormItem>
      <FormItem
        name="email"
        rules={[{ required: true, message: "请输入email" }]}
      >
        <MyInput
          data-testid="email"
          size="large"
          placeholder="请输入你的邮箱"
        />
      </FormItem>
      <FormItem
        name="message"
        rules={[{ required: true, message: "请输入信息" }]}
      >
        <MyText
          data-testid="message"
          size="large"
          showCount
          rows={4}
          maxLength={100}
          placeholder="请输入你的信息"
        />
      </FormItem>

      <FormItem>
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

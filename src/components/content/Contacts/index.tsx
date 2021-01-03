import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import ContactsExisting from './ContactsExisting'
import ContactsMsg from './ContactsMsg'
const MyRow = styled(Row)`
  font-size: 18px;
  width: 70vw;
  position: absolute;
  top: 50%;
  margin-top:-196.4px !important;
  >.ant-col:nth-child(1){
    padding-right:10px;
  }
  >.ant-col:nth-child(2){
    padding-left:10px;
  }
  @media screen and (max-width: 875px){
    width: 95vw;
    padding: 0 10px;
    margin-top:-281.5px !important;
    font-size: small;
    >.ant-col:nth-child(1){
      padding-right:0;
      padding-bottom:5px;
    }
    >.ant-col:nth-child(2){
      padding-left:0;
    }
    textarea{
      height: 70px !important;
    }
  }
`
export default function ContactMe() {
  return (
    <MyRow >
      <Col xs={{ span: 24 }} lg={{ span: 16 }}>
        <ContactsMsg />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 8 }}>
        <ContactsExisting />
      </Col>
    </MyRow>
  )
}
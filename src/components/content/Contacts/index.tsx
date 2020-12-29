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
  @media screen and (max-width: 875px){
    width: 95vw;
    margin-top:-281.5px !important;
    font-size: small;
    textarea{
      height: 70px !important;
    }
  }
`
export default function ContactMe() {
  return (
    <MyRow gutter={[20, 10]}>
      <Col xs={{ span: 24 }} lg={{ span: 16 }}>
        <ContactsMsg />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 8 }}>
        <ContactsExisting />
      </Col>
    </MyRow>
  )
}
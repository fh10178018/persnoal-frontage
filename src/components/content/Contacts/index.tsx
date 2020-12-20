import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import ContactsExisting from './ContactsExisting'
import ContactsMsg from './ContactsMsg'
const MyRow = styled(Row)`
  position: fixed;
  font-size: 18px;
  top: 50vh;
  transform: translateY(-80%);
  margin: 0 auto;
  width: 70vw;
  @media screen and (max-width: 875px){
    width: 95vw;
    font-size: small;
    transform: translateY(-50%);
  }
`
export default function ContactMe() {
  return (
    <MyRow gutter={[20, 10]}>
      <Col span={16}>
        <ContactsMsg />
      </Col>
      <Col span={8}>
        <ContactsExisting />
      </Col>
    </MyRow>
  )
}
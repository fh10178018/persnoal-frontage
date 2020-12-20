import React from 'react'
import styled from 'styled-components'
import { MyRibbon } from '../../common'
import ContactForm from './form'
const Wrap = styled.div`
  width:100%;
  background-color: #fafafabf;
  padding:60px 15px 15px 15px;
  border-radius:5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
`

export default function ContactsMsg() {
  return (
    <MyRibbon placement="start" text="联系我">
      <Wrap>
        <ContactForm></ContactForm>
      </Wrap>
    </MyRibbon>
  )
}
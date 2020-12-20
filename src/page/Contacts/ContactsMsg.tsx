import React from 'react'
import styled from 'styled-components'
import ContactForm from './form'
const Wrap = styled.div`
  width:100%;
  background-color: #fafafabf;
  padding:10px;
  border-radius:5px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
`

export default function ContactsMsg() {
  return (
    <Wrap>
      <ContactForm></ContactForm>
    </Wrap>
  )
}
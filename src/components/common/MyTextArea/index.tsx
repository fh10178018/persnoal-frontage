import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input/TextArea'
import React from 'react'
import styled from 'styled-components'

const MTextarea = styled(Input.TextArea)`
  textarea{
    border: none;
    border-bottom:3px solid transparent;
    background-color:transparent !important;
    border-radius: 0;
    border-color:#bfbfbf;
    transition:border-image 500ms;
    box-shadow:none !important;
    :hover,:focus{
      border-bottom:3px solid transparent;
      border-image: linear-gradient( to right,#ecc87e,${props => props.theme.primary}) 0 0 3 0 round; 
      }
  }
`
export default function MyTextArea(props: TextAreaProps) {
  return (
    <MTextarea {...props} />
  )
}
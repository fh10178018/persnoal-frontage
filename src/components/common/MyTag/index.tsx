import { Tag } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { TagProps } from 'antd/lib/tag'

const MTag = styled(Tag)`
  background: linear-gradient( to right,#ecc87e,${props => props.theme.primary}) !important;
  background-color:transparent !important;
  border:none !important;
  transition:box-shadow 500ms ease-in-out;
  color:white;
  width: auto;
  :hover{
    box-shadow:1px 1px 5px ${props => props.theme.primary};
  }
`
export default function MyTag(props: TagProps) {
  return (
    <MTag  {...props} />
  )
}
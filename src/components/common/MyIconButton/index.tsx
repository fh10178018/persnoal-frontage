import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button/button'
import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setCursour } from '../../../redux/actions'

const MButton = styled(Button)`
  background: linear-gradient( to right,#ecc87e,${props => props.theme.primary}) !important;
  background-color:transparent !important;
  border:none !important;
  transition:box-shadow 500ms ease-in-out;
  :hover,:focus{
    box-shadow:1px 1px 5px ${props => props.theme.primary};
  }
  .anticon{
    color: white !important;
  }

`
export default function MyIconButton(props: ButtonProps) {
  const dispatch = useDispatch();
  return (
    <MButton {...props} onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))} />
  )
}
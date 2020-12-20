import { Input } from 'antd'
import { InputProps } from 'antd/lib/input'
import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setCursour } from '../../../redux/actions'

const MInput = styled(Input)`
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
`
export default function MyInput(props: InputProps) {
  const dispatch = useDispatch();
  return (
    <MInput {...props} onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))} />
  )
}
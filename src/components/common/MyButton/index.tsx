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
  width: auto;
  :hover,:focus{
    box-shadow:1px 1px 5px ${props => props.theme.primary};
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
    transition:transform 300ms ease-in-out;
  }
  .ant-btn-loading-icon{
    margin-right: 8px;
  }
  .anticon-loading{
    padding:0 !important;
  }
`
export default function MyButton(props: ButtonProps) {
  const dispatch = useDispatch();
  return (
    <MButton  {...props} onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))} />
  )
}
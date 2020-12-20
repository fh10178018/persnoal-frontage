import { Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'

const LoadingWrap = styled.div.attrs(props => {
  return {
    active: useSelector((state: RootState) => state.isLoading)
  }
})`
  width:100vw;
  height:100vh;
  position:fixed;
  top: 0;
  left: 0;
  z-index:1000;
  background: white;
  display:flex;
  justify-content:center;
  align-items:center;
  transition:opacity 500ms;
  opacity: ${props => {
    return props.active ? 1 : 0
  }};
`
const Loading: React.FC = () => {
  return (
    <LoadingWrap >< Spin size="large" /></LoadingWrap>
  )

}
export default Loading
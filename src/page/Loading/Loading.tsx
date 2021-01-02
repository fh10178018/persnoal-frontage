import { Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'

const LoadingWrap = styled.div.attrs(props => {
  return {
    active: useSelector((state: RootState) => state.htmlIsLoading)
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
  flex-direction:column;
  justify-content:center;
  align-items:center;
  transition:opacity 500ms;
  .ant-spin-dot-item{
    background-color: #d9363e;
  }
  opacity: ${props => {
    return props.active ? 1 : 0
  }};
`
const Loading: React.FC = () => {
  const curProgressNum = useSelector((state: RootState) => state.progressNum)
  const progress = useSelector((state: RootState) => state.loadingProgress)
  return (
    <LoadingWrap >< Spin size="large" /><div>{progress[curProgressNum]}</div></LoadingWrap>
  )

}
export default Loading
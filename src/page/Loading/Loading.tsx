import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import useWinSize from '../../utils/useWinSize'

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

const Iframe = styled.iframe`
  border:none;
  background-color:gold;
`

const ProgressDiv = styled.div`
  position: absolute;
  font-size: x-large;
  font-weight:bold;
  bottom:10vh;
  animation: wave 2s infinite ease-out;
`

const Loading: React.FC = () => {
  const curProgressNum = useSelector((state: RootState) => state.progressNum)
  const size = useWinSize()
  const progress = useSelector((state: RootState) => state.loadingProgress)
  return (
    <LoadingWrap>
      <Iframe title="loading" src={process.env.PUBLIC_URL + 'loading.svg'} width={size.width} height={size.height} />
      <ProgressDiv>{progress[curProgressNum]}</ProgressDiv>
    </LoadingWrap>
  )
}
export default Loading
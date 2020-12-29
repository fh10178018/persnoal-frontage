import { Layout } from 'antd'
import React, { useCallback } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';
import styled from "styled-components/macro";
import { RootState } from '../../redux/reducers';
import './index.css'
import MyBox from '../../components/common/MyBox';
const { Content } = Layout;
const MyLayout = styled(Layout)`
  background:transparent;
  background-size:100%;
  background-position: 0 100%;
  height:100vh;
`
const MyContent = styled(Content)`
  display:flex;
  justify-content:center;
  align-items:center;
  margin: 16px 0;
`


export default function Home() {
  const page = useSelector((state: RootState) => state.curPage)
  const pageAction = useSelector((state: RootState) => state.pageAction)
  const pageList = useSelector((state: RootState) => state.pageList)
  const classNames = useCallback(() => pageAction ? 'forward' : 'back', [pageAction])()
  return (
    <MyBox>
      <TransitionGroup className="card" childFactory={child => React.cloneElement(child, { classNames })}>
        <CSSTransition key={page === 1 ? 0 : page} timeout={1000} >
          {pageList[page].component}
        </CSSTransition>
      </TransitionGroup>
    </MyBox>
  )
}
import React, { useCallback } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import './index.css'
import MyBox from '../../components/common/MyBox';


const card = {
  width: '100vw',
  height: '100%',
  display: 'flex',
  justifyContent: 'center'
}

export default function Home() {
  const page = useSelector((state: RootState) => state.curPage)
  const pageAction = useSelector((state: RootState) => state.pageAction)
  const pageList = useSelector((state: RootState) => state.pageList)
  const classNames = useCallback(() => pageAction ? 'forward' : 'back', [pageAction])()
  return (
    <MyBox>
      <TransitionGroup style={card} childFactory={child => React.cloneElement(child, { classNames })}>
        <CSSTransition key={page === 1 ? 0 : page} timeout={1000} >
          {pageList[page].component}
        </CSSTransition>
      </TransitionGroup>
    </MyBox>
  )
}
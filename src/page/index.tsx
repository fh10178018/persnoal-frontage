import React, { useState, useCallback, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import Home from './Home'
import Header from '../components/content/Header'
import { useDebounce } from '../utils/common'
import myImage from "../img/kuai.png"
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'
import styled from "styled-components/macro";
import Background from './Background/Background'
import { useDispatch } from 'react-redux'
import { setPage, setPageAction } from '../redux/actions'
const { Content } = Layout;
const Ul = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  height:100vh;
  overflow:hidden;
  position: relative;
  >li{
    width:100%;
    height:100%;
    top: 0;
    left: 0;
    position:absolute;
    transition:transform 500ms cubic-bezier(.25, 1, .5, 1.25);
    z-index:1;
  }
`
const MyLayout = styled(Layout)`
  background:url(${myImage}) repeat;

`

export default function Wrapper() {
  const pageNav = useSelector((state: RootState) => state.pageList)
  const wheelIsClose = useSelector((state: RootState) => state.wheelIsClose);
  const page = useSelector((state: RootState) => state.curPage)
  const [pageList, setPageList] = useState(['0', '100%', '100%', '100%', '100%', '100%'])
  const dispatch = useDispatch();
  const cutPage = useCallback((isUp: boolean = false) => {
    const len = pageNav.length
    if (isUp && pageList[0] !== '0') {
      pageList.shift()
      pageList.push('100%')
      setPageList([...pageList])
      dispatch(setPageAction(false))
      dispatch(setPage(page - 1 >= 0 ? page - 1 : 0))
    }
    if (!isUp && pageList[len - 1] !== '0') {
      pageList.pop()
      pageList.unshift('-100%')
      setPageList([...pageList])
      dispatch(setPageAction(true))
      dispatch(setPage((page + 1) % len))
    }
  }, [dispatch, page, pageList, pageNav.length])

  const scrollPage = useCallback((newKey: number) => {
    const res: string[] = []
    for (let i = newKey - 1; i > -1; i--) {
      res.push('-100%')
    }
    res.push('0')
    for (let i = newKey + 1; i < 5; i++) {
      res.push('100%')
    }
    setPageList(res)
    dispatch(setPage(newKey))
  }, [dispatch])

  const handleScroll = useCallback((e: any) => {
    if (!wheelIsClose) {
      if (e.nativeEvent.deltaY > 0) {
        cutPage()
      } else {
        cutPage(true)
      }
    }
  }, [cutPage, wheelIsClose])

  const onClick = (e: any) => {
    const curKey = Number(e.key)
    dispatch(setPageAction(page < curKey))
    scrollPage(curKey)
  }
  const [placememt, SetPlacement] = useState({
    startY: 0, endY: 0
  })
  const handleTouchStart = (e: any) => {
    SetPlacement({ ...placememt, startY: e.touches[0].clientY })
  }

  const handleTouchMove = (e: any) => {
    SetPlacement({ ...placememt, endY: e.touches[0].clientY })
  }

  const handleTouchEnd = (e: any) => {
    if (placememt.startY - placememt.endY > 0) {
      cutPage()
    } else if (placememt.startY - placememt.endY < 0) {
      cutPage(true)
    }
  }

  return (
    <MyLayout>
      <Background></Background>
      <Header handleClick={onClick} page={page} cutPage={cutPage}></Header>
      <Layout style={{
        backgroundColor: "transparent"
      }}>
        <Content
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={useDebounce((e: any) => handleScroll(e), 500, true)}
          style={{
            backgroundColor: "transparent",
            overflow: 'hidden',
            height: '100vh',
            left: 0,
          }}>
          <Home></Home>
        </Content>
      </Layout>
    </MyLayout >
  )
}

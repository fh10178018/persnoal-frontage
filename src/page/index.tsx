import React, { useState, useCallback } from 'react'
import { Layout, Menu } from 'antd'
import Home from './Home'
import { useDebounce } from '../utils/common'
import myImage from "../img/kuai.png"
import {
  HomeOutlined,
  SolutionOutlined,
  BookOutlined,
  MessageOutlined,
  CrownOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'
import styled from "styled-components/macro";
import Background from './Background/Background'
import AboutMe from './AboutMe'
import Mouse from './Mouse'
import { useDispatch } from 'react-redux'
import { setCursour, setPage } from '../redux/actions'
const { Content, Header } = Layout;
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
const MyHeader = styled(Header)`
  background: linear-gradient(to bottom, #f0f0f0, transparent);
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:20;
  height:58px;
  line-height: 58px;
  text-align:center;
`
const MyMenu = styled(Menu)`
  background: transparent;
  border-bottom:0;
  border-right:0;
  width:100%;
  text-align:center;
  font-weight:bold;
  .ant-menu-item-selected{
    letter-spacing: 5px;
    color:#c14652 !important;
    transform: scale(1.2);
    ::before{
      opacity:1;
    }
    ::after{
      opacity:1;
    }
  }
  @media screen and (max-width: 780px){
    .ant-menu-item{
      margin: 0 5px !important;
    }
    strong{
      display:none;
    }  
  }
`
const MenuItem = styled(Menu.Item)`
  transition:500ms !important;
  border-bottom:none !important;
  margin: 0 5px !important;
  width:95px;
  ::before{
    content:'[';
    opacity:0;
    transition: opacity 500ms;
  }
  ::after{
    content:']';
    opacity:0;
    transition: opacity 500ms;
  }
  :hover{
    letter-spacing: 5px;
    color:#c14652 !important;
    ::before{
      opacity:1;
    }
    ::after{
      opacity:1;
    }
  }
`

export default function Wrapper() {
  const pageNav = useSelector((state: RootState) => state.pageList)
  const page = useSelector((state: RootState) => state.curPage)
  const [pageList, setPageList] = useState(['0', '100%', '100%', '100%', '100%', '100%'])
  const dispatch = useDispatch();
  const cutPage = useCallback((isUp: boolean = false) => {
    const len = pageNav.length
    if (isUp && pageList[0] !== '0') {
      pageList.shift()
      pageList.push('100%')
      setPageList([...pageList])
      dispatch(setPage(page - 1 >= 0 ? page - 1 : 0))
    }
    if (!isUp && pageList[len - 1] !== '0') {
      pageList.pop()
      pageList.unshift('-100%')
      setPageList([...pageList])
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

  const handleScroll = (e: any) => {
    if (e.nativeEvent.deltaY > 0) {
      cutPage()
    } else {
      cutPage(true)
    }
  }

  const onClick = (e: any) => {
    const curKey = Number(e.key)
    scrollPage(curKey)
  }


  return (
    <MyLayout>
      <Mouse></Mouse>
      <Background></Background>
      <MyHeader
        theme="light"
      >
        <MyMenu mode="horizontal" selectedKeys={[page + '']} onClick={(e) => onClick(e)}>
          {
            pageNav.map((item, index) => <MenuItem key={index} onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))}><strong>{item}</strong></MenuItem>)
          }
        </MyMenu>
      </MyHeader>
      <Layout style={{
        backgroundColor: "transparent"
      }}>
        <Content
          onWheel={useDebounce((e: any) => handleScroll(e), 200, true)}
          style={{
            backgroundColor: "transparent",
            overflow: 'auto',
            height: '100vh',
            left: 0,
          }}>
          <Ul>
            <li style={{ transform: 'translateY(100%)' }} ><AboutMe></AboutMe></li>
            <li style={{ transform: `translateY(100%)` }}>wer</li>
            <li style={{ transform: `translateY(100%)` }}> page4</li>
            <li style={{ transform: `translateY(100%)` }}> page5</li>
            <li style={{ zIndex: 0 }}><Home></Home></li>
          </Ul>
        </Content>
      </Layout>

    </MyLayout >
  )
}

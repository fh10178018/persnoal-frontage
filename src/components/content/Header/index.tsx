// 加了之后顺滑好多 e.stopPropagation()
import { Layout, Menu } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCursour, setPage } from '../../../redux/actions';
import { RootState } from '../../../redux/reducers';
import MenuButton from './MenuBtn'
import fan from '../../../img/fan.png'
import { useThrottle } from '../../../utils/common';
import { RightCircleFilled, UpCircleFilled } from '@ant-design/icons';
const { Header } = Layout;

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
  @media screen and (max-width: 780px){
    display: none;
  }
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
    color:${props => props.theme.primary} !important;
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
    color:${props => props.theme.primary} !important;
    ::before{
      opacity:1;
    }
    ::after{
      opacity:1;
    }
  }
`

const MyHeader2 = styled.header`
  position:fixed;
  z-index:100;
  top:0;
  left:0;
  right:0;
  height: 50px;
  @media screen and (min-width: 780px){
    display:none;
  }
`

const Action = styled.div`
  display:flex;
  justify-content:flex-end;
  height:auto;
`

type BtnPropsType = {
  isActive: boolean,
  curRotate: string
}


const MyUl = styled.ul`
    position: relative;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    transform: rotate(124deg) ;
    overflow: hidden;
    list-style: none;
    li:nth-child(1){
      transform: rotate(0deg) skewY(-54deg);
    }
    li:nth-child(2){
      transform: rotate(-36deg) skewY(-54deg);
    }
    li:nth-child(3){
      transform: rotate(-72deg) skewY(-54deg);
    }
    li:nth-child(4){
      transform: rotate(-108deg) skewY(-54deg);
    }
    li:nth-child(5){
      transform: rotate(-144deg) skewY(-54deg);
    }
    li:nth-child(6){
      transform: rotate(-180deg) skewY(-54deg);
    }
`
const MyLi = styled.li.attrs((props: BtnPropsType) => ({
  isActive: props.isActive
}))`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 50%;
  transition:500ms;
  
  ${props => props.isActive ? 'font-size: 29px;color:white;' : 'font-size: x-large;color:#bfbfbf;'}
  transform-origin: 0 100%;
`
const Box = styled.div.attrs((props: BtnPropsType) => ({
  isActive: props.isActive,
  curRotate: props.curRotate
}))`
  z-index: 10;
  position: absolute;
  top: -140px;
  right: -140px;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background:url(${fan}) no-repeat;
  background-size:280px;
  transform: ${props => props.isActive ? props.curRotate : 'scale(0.1) rotate(0deg)'};
  transition: transform 1s;
`

const Placeholder = styled.div`
  position: absolute;
  left: -100%;
  padding-top: 1.5em;
  width: 200%;
  height: 200%;
  text-align: center;
  transform: skewY(54deg) rotate(18deg);
`
const Upside = styled.div`
  font-size:inherit;
  color:inherit;
  transform: rotate(180deg) translateY(10px);
`
const Next = styled.div.attrs((props: BtnPropsType) => ({
  isActive: props.isActive
}))`
  cursor: pointer;
  position: fixed;
  top: 150px;
  right: 5px;
  z-index: 400;
  font-size: x-large;
  transition:opacity 500ms;
  opacity:${props => props.isActive ? 1 : 0};
  color:${props => props.theme.primary};
`

const MyButton = styled.div.attrs((props: BtnPropsType) => ({
  isActive: props.isActive
}))`
  z-index: 11;
  position: absolute;
  width: 60px;
  height: 60px;
  background: ${props => props.isActive ? 'rgba(0, 0, 0, 0.25)' : '#fff'};
  box-shadow: 1px 1px 10px rgba(0,0,0,0.12);
  border-radius: 0 0 0 100%;
  transition: 500ms;
  cursor: pointer;
  pointer-events: auto;
  display: flex;
  justify-content: center;
  align-items:center;
`
const Prev = styled.div.attrs((props: BtnPropsType) => ({
  isActive: props.isActive
}))`
  cursor:pointer;
  position: fixed;
  right: 150px;
  opacity:${props => props.isActive ? 1 : 0};
  z-index: 400;
  font-size: x-large;
  transition:500ms;
  color:${props => props.theme.primary};
`

type propsType = {
  handleClick: (e: any) => void,
  page: number,
  cutPage: (e?: boolean) => void
}

export default function Footer(props: propsType) {
  const pageNav = useSelector((state: RootState) => state.pageList)
  const curPage = useCallback(() => props.page, [props.page])()
  const [selcetPage, setSelcetPage] = useState(curPage)
  const [active, setActive] = useState(false)
  const [placeMent, setPlaceMent] = useState({
    startX: 0,
    startY: 0
  })
  const dispatch = useDispatch();
  const handleTouchDown = (e: any) => {
    e.stopPropagation()
    setPlaceMent({
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    })
  }
  const handleTouchUp = useCallback((e: any) => {
    dispatch(setPage(selcetPage))
    e.stopPropagation()
    setActive(false)
  }, [dispatch, selcetPage])

  const handleTouchMove = useCallback((e: any) => {
    e.stopPropagation()
    const { startY } = placeMent
    setPlaceMent({
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    })
    const endY = e.touches[0].clientY
    if (endY > startY) {
      dispatch(setPage(selcetPage - 1 < 0 ? 0 : selcetPage - 1))
    } else if (endY < startY) {
      dispatch(setPage(selcetPage + 1 >= 6 ? 5 : selcetPage + 1))
    }
  }, [dispatch, placeMent, selcetPage])

  const curRotate = useCallback(() => `rotate(${86 + selcetPage * 36}deg)`, [selcetPage])()
  const handleClick = () => {
    setActive(!active)
  }

  useEffect(() => {
    setSelcetPage(curPage)
  }, [curPage])

  return (
    <>
      <MyHeader
        theme="light"
      >
        <MyMenu mode="horizontal" selectedKeys={[curPage + '']} onClick={(e) => props.handleClick(e)}>
          {
            pageNav.map((item: any, index: number) => <MenuItem key={index} onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))}><strong>{item.name}</strong></MenuItem>)
          }
        </MyMenu>
      </MyHeader>
      <MyHeader2>
        <Action>
          <MyButton isActive={active} onClick={handleClick} onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))}><MenuButton isActive={active} /></MyButton>
          <Box
            onTouchEnd={handleTouchUp}
            onTouchMove={useThrottle(handleTouchMove, 500)}
            onTouchStart={handleTouchDown}
            isActive={active}
            curRotate={curRotate}>
            <MyUl >
              {
                pageNav.map((item: any, index: number) => <MyLi key={index} isActive={selcetPage === index}><Placeholder><Upside>{item.icon}</Upside></Placeholder></MyLi>)
              }
            </MyUl>
          </Box>
          <Prev isActive={active} onClick={() => props.cutPage(true)} onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))}><UpCircleFilled /></Prev>
          <Next isActive={active} onClick={() => props.cutPage()} onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))}><RightCircleFilled /></Next>
        </Action>
      </MyHeader2>
    </>
  )
}
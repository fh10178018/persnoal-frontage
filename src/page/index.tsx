import React, { useState, useCallback, useEffect } from 'react'
import { Layout } from 'antd'
import Home from './Home'
import Header from '../components/content/Header'
import { useDebounce } from '../utils/common'
import myImage from "../img/kuai.png"
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducers'
import styled from "styled-components/macro";
import Background from './Background/Background'
import { useDispatch } from 'react-redux'
import { setPage, setPageAction, setBlogList, setCodeSkills, setDesignSkills, setExperience, setHtmlLoading, setIntroduction, setProgress, setResumes  } from '../redux/actions'
import { Api } from '../api'
const { Content } = Layout;

const MyLayout = styled(Layout)`
  background:url(${myImage}) repeat;

`

export default function Wrapper() {
  const pageNav = useSelector((state: RootState) => state.pageList)
  const imageLoaded = useSelector((state: RootState) => state.imageLoaded)
  const wheelIsClose = useSelector((state: RootState) => state.wheelIsClose);
  const page = useSelector((state: RootState) => state.curPage)
  const [pageList, setPageList] = useState(['0', '100%', '100%', '100%', '100%', '100%'])
  const dispatch = useDispatch();
  useEffect(() => {
    if (imageLoaded === 2) {
      Api({
        url: "/blog/getBlogList",
        method: 'POST',
        data: { page: 1, rows: 4, type: '' }
      }).then((val) => {
        dispatch(setProgress(2))
        dispatch(setBlogList(val))
        Api({
          method: 'get',
          url: '/resumes/getNewResumes'
        }).then((res: any) => {
          dispatch(setResumes(res))
          dispatch(setProgress(3))
          Api({
            method: 'get',
            url: '/resumes/getExperience'
          }).then((res: any) => {
            dispatch(setExperience(res))
            dispatch(setProgress(4))
            Api({
              method: 'get',
              url: '/resumes/getIntroduction'
            }).then((res: any) => {
              dispatch(setIntroduction(res))
              dispatch(setProgress(5))
              Api({
                method: 'get',
                url: '/resumes/getDesignSkills'
              }).then((res: any) => {
                dispatch(setDesignSkills(res))
                dispatch(setProgress(6))
                Api({
                  method: 'get',
                  url: '/resumes/getCodeSkills'
                }).then((res: any) => {
                  dispatch(setProgress(7))
                  dispatch(setHtmlLoading(false))
                  dispatch(setCodeSkills(res))
                })
              })
            })
          })
        })
      })
    }
  }, [dispatch, imageLoaded])
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
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    SetPlacement({ ...placememt, startY: e.targetTouches[0].pageY })
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const endY = e.targetTouches[0].pageY;
    if (!wheelIsClose) {
      if (endY - placememt.startY > 0) {
        cutPage(true)
      } else {
        cutPage()
      }
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
          onTouchMove={useDebounce((e: any) => handleTouchMove(e), 500, true)}
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

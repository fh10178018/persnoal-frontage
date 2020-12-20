import { Col, Layout, Row } from 'antd'
import React, { useCallback } from 'react'
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import styled from "styled-components/macro";
import { RootState } from '../../redux/reducers';
import './index.css'

import MyPower from './MyPower'
import MyAvatar from './MyAvatar';
import Resumes from './Resumes';
import TitleOne from './TitleOne';
import TitleTwo from './TitleTwo';
import Blog from './Blog';
import ContactMe from './ContactMe';
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

const MyRow = styled(Row)`
  position: fixed;
  top: 50vh;
  transform: translateY(-80%);
  height:378px;
  .ant-col{
    height:100%;
  }
  @media screen and (max-width: 875px){
    height:100vh;
    transform: translateY(-50%);
    .ant-col{
      height:auto;
    }
  }
`

export default function Home() {
  const page = useSelector((state: RootState) => state.curPage)
  const oneTwoIsDead = useCallback(() => (page > 1), [page])()

  return (
    <MyLayout>
      <MyContent>
        <CSSTransition in={!oneTwoIsDead} classNames="card" timeout={1000} unmountOnExit={oneTwoIsDead}>
          <MyRow align="middle" justify="center" gutter={[50, 0]}>
            <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
              <TitleOne isActive={page === 0} isZoom={page === 1} ></TitleOne>
              <TitleTwo isActive={page === 1}></TitleTwo>
            </Col>
            <Col xs={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }} style={{ textAlign: 'center' }}>
              <MyAvatar isActive={page === 1}></MyAvatar>
            </Col>
          </MyRow>
        </CSSTransition>
        <CSSTransition in={page === 2} classNames="card" timeout={1000} unmountOnExit={page !== 2}>
          <Resumes></Resumes>
        </CSSTransition>
        <CSSTransition in={page === 3} classNames="card" timeout={1000} unmountOnExit={page !== 3}>
          <MyPower></MyPower>
        </CSSTransition>
        <CSSTransition in={page === 4} classNames="card" timeout={1000} unmountOnExit={page !== 4}>
          <Blog></Blog>
        </CSSTransition>
        <CSSTransition in={page === 5} classNames="card" timeout={1000} unmountOnExit={page !== 5}>
          <ContactMe></ContactMe>
        </CSSTransition>
      </MyContent>
    </MyLayout>
  )
}
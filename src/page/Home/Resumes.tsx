import { Col, Layout, Progress, Row, Timeline, Tag, Divider } from 'antd';
import Item from 'antd/lib/list/Item';
import React, { Component, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import HeadLine from './HeadLine';

const SkillWrapper = styled.div`

`
const SkillItem = styled.div`
  display:flex;
  justify-content:space-between;
`

const MyDivider = styled(Divider)`
  &&{
    font-size: 24px;
    font-weight:bold;
    ::before,::after{
      border-top: 2px solid rgba(0, 0, 0, 0.12);
    }
  }
`

const MyTag = styled(Tag)`
  margin:0 5px 5px 0;
`
const MyRow = styled(Row)`
  position: fixed;
  font-size: 18px;
  top: 50vh;
  transform: translateY(-80%);
  margin: 0 auto;
  width: 70vw;
  @media screen and (max-width: 875px){
    width: 95vw;
    font-size: small;
    transform: translateY(-50%);
  }
`
const MyTimeLine = styled(Timeline)`
  font-size:inherit;
`
const MyTimeLineItem = styled(Timeline.Item)`
  font-size:inherit;
  .ant-timeline-item-tail{
    border-left: 2px solid #d9363e;
  }
  .ant-timeline-item-head-blue {
    color: #d9363e;
    border-color: #d9363e;
  }
`
const { Header, Content, Footer } = Layout;
export default function Resumes() {
  return (
    <MyRow gutter={[20, 0]}>
      <Col span={24}>
        <HeadLine headline="experience" marginbottom={10} />
        <MyTimeLine>
          <MyTimeLineItem >
            <h4><strong>前端开发学习阶段 (2020- )</strong></h4>
            <p>掌握相关前端基础知识，学习和实践 Vue3.0 以及 React-TypeScript，分别开发一个相关项目，学习和增进算法能力，曾在在上海健医科技实习一个月,主要是以TypeScript-React和ArgularJs相关的开发工作为主。</p>
          </MyTimeLineItem>
          <MyTimeLineItem position={"left"}   >
            <h4><strong>勤工助学创意工作室正经理 (2019 - 2020)</strong></h4>
            <p>负责产品和活动的宣传设计策划，以及部门人员安排。负责校名纪念品大赛的宣传策划，人员安排和物资安排。开发过基于Django的MVC模式下的创意工作室宣传Web应用。</p>
          </MyTimeLineItem>
          <MyTimeLineItem >
            <h4><strong>勤工助学创意工作室设计师 (2017 - 2019)</strong></h4>
            <p>负责产品宣传设计，海报设计和LOGO等设计，宣传视频制作，有着良好的审美观。与团队参加多个创新赛式，做过基于Django的MVC模式下的线上导航Web应用和微信小程序开发。</p>
          </MyTimeLineItem>
        </MyTimeLine>
        {/* <MyDivider orientation="left">知识能力</MyDivider>
        <MyTag>Ant Design of React</MyTag>
        <MyTag>Styled Components of React</MyTag>
        <MyTag>Django-MVC模式</MyTag>
        <MyTag>Express+MongoDB的相关接口开发</MyTag>
        <MyTag>Github</MyTag>
        <MyTag>Postman ApiPOST</MyTag>
        <MyTag>Photoshop</MyTag>
        <MyTag>AE</MyTag>
        <MyTag>PR</MyTag>
        <MyTag>Illustrator</MyTag> */}
      </Col>
    </MyRow>
  )
}
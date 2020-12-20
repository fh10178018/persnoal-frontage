import { Col, Row, Timeline } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { MyRibbon } from '../../common';

const MyRow = styled(Row)`
  font-size: 18px;
  width: 70vw;
  @media screen and (max-width: 875px){
    width: 95vw;
    font-size: small;
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
const Box = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
  background: #fafafabf;
  border-radius:5px;
  padding:60px 15px 15px 15px;
`

export default function Resumes() {
  return (
    <MyRibbon placement="start" text="工作经验 & 学习能力">
      <Box>
        <MyRow gutter={[20, 0]}>
          <Col span={24}>
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
          </Col>
        </MyRow>
      </Box>
    </MyRibbon>
  )
}
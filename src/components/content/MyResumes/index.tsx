import { Col, Row, Timeline } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../redux/reducers';
import { MyRibbon } from '../../common';
import { ExperienceType } from '../../../redux/actions';

const MyRow = styled(Row)`
  font-size: 18px;
  width: 70vw;
  position: absolute;
  top: 50%;
  margin-top: -266.75px;
  @media screen and (max-width: 875px){
    width: 95vw;
    padding: 0 10px;
    font-size: small;
  }
`
const MyTimeLine = styled(Timeline)`
  font-size:inherit;
  li:nth-child(3){
    padding-bottom: 0;
  }
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
  background: rgb(255 255 255 / 41%);
  border-radius:5px;
  padding:60px 15px 15px 15px;
`

export default function Resumes() {
  const experience = useSelector((state: RootState) => state.experience);
  return (
    <MyRow>
      <Col span={24}>
        <MyRibbon placement="start" text="工作经验 & 学习能力">
          <Box>
            <MyTimeLine>
              {experience.map((item: ExperienceType, index: number) => {
                return (
                  <MyTimeLineItem key={index}>
                    <h4><strong>{item.title}</strong></h4>
                    <p>{item.content}</p>
                  </MyTimeLineItem>
                )
              })}
            </MyTimeLine>
          </Box>
        </MyRibbon>
      </Col>
    </MyRow>
  )
}
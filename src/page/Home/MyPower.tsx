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
const { Header, Content, Footer } = Layout;
export default function MyPower() {
  const CodeSkills = [
    { name: 'JavaScript', percent: 75 },
    { name: 'HTML/CSS', percent: 50 },
    { name: 'Vue3.0', percent: 65 },
    { name: 'React-TypeScript', percent: 55 }
  ]
  const DesignSkills = [
    { name: 'PHOTOSHOP', percent: 85 },
    { name: 'ILLUSTRATOR', percent: 70 },
    { name: 'AFTER EFFECTS', percent: 45 },
    { name: 'Premiere', percent: 60 }
  ]

  return (
    <MyRow gutter={[20, 0]}>
      {/* <Col span={12}>
        <MyDivider orientation="left">知识能力</MyDivider>
        <MyTag>Ant Design of React</MyTag>
        <MyTag>Styled Components of React</MyTag>
        <MyTag>Django-MVC模式</MyTag>
        <MyTag>Express+MongoDB的相关接口开发</MyTag>
        <MyTag>Github</MyTag>
        <MyTag>Postman ApiPOST</MyTag>
        <MyTag>Photoshop</MyTag>
        <MyTag>AE</MyTag>
        <MyTag>PR</MyTag>
        <MyTag>Illustrator</MyTag>
      </Col> */}
      <Col span={12}>
        <HeadLine headline="codepower" marginbottom={10} />
        {
          CodeSkills.map((Item, index) => {
            return (
              <SkillWrapper key={index}>
                <SkillItem>
                  <strong>{Item.name}</strong>
                  <strong>{Item.percent}%</strong>
                </SkillItem>
                <Progress percent={Item.percent} showInfo={false} />
              </SkillWrapper>
            )
          })
        }
      </Col>
      <Col span={12}>
        <HeadLine headline="designpower" marginbottom={10} />
        {
          DesignSkills.map((Item, index) => {
            return (
              <SkillWrapper key={index}>
                <SkillItem>
                  <strong>{Item.name}</strong>
                  <strong>{Item.percent}%</strong>
                </SkillItem>
                <Progress percent={Item.percent} showInfo={false} />
              </SkillWrapper>
            )
          })
        }
      </Col>
    </MyRow>
  )
}
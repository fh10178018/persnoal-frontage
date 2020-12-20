import { Col, Progress, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { MyRibbon } from '../../../components/common';


const SkillWrapper = styled.div`
`
const SkillItem = styled.div`
  display:flex;
  justify-content:space-between;
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

const Box = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
  background: #fafafabf;
  border-radius:5px;
  padding:60px 15px 15px 15px;
`

export default function MyPower() {
  const CodeSkills = [
    { name: 'JavaScript', percent: 75 },
    { name: 'HTML/CSS', percent: 75 },
    { name: 'Vue3.0', percent: 65 },
    { name: 'React-TypeScript', percent: 60 }
  ]
  const DesignSkills = [
    { name: 'Photoshop', percent: 85 },
    { name: 'Illustayor', percent: 70 },
    { name: 'After Effects', percent: 45 },
    { name: 'Premiere', percent: 60 }
  ]

  return (
    <MyRow gutter={[20, 10]}>
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
        <MyRibbon placement="start" text="编程能力">
          <Box>
            {
              CodeSkills.map((Item, index) => {
                return (
                  <SkillWrapper key={index}>
                    <SkillItem>
                      <strong>{Item.name}</strong>
                      <strong>{Item.percent}%</strong>
                    </SkillItem>
                    <Progress
                      strokeColor={{
                        '0%': '#ecc87e',
                        '100%': '#c34550',
                      }}
                      status="active"
                      percent={Item.percent}
                      showInfo={false} />
                  </SkillWrapper>
                )
              })
            }
          </Box>
        </MyRibbon>
      </Col>
      <Col span={12}>
        <MyRibbon placement="start" text="设计能力">
          <Box>
            {
              DesignSkills.map((Item, index) => {
                return (
                  <SkillWrapper key={index}>
                    <SkillItem>
                      <strong>{Item.name}</strong>
                      <strong>{Item.percent}%</strong>
                    </SkillItem>
                    <Progress
                      strokeColor={{
                        '0%': '#ecc87e',
                        '100%': '#c34550',
                      }}
                      status="active"
                      percent={Item.percent}
                      showInfo={false} />
                  </SkillWrapper>
                )
              })
            }
          </Box>
        </MyRibbon>
      </Col>
    </MyRow>
  )
}
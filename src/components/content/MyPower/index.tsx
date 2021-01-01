import { Col, Progress, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MyRibbon } from '../../../components/common';
import { CodeSkillsType, DesignSkillsType } from '../../../redux/actions';
import { RootState } from '../../../redux/reducers';


const SkillWrapper = styled.div`
`
const SkillItem = styled.div`
  display:flex;
  justify-content:space-between;
`

const MyRow = styled(Row)`
  font-size: 18px;
  width: 70vw;
  position: absolute;
  top: 50%;
  margin-top:-154.5px!important;
  @media screen and (max-width: 920px){
    width: 95vw;
    margin-top:-251.4px!important;
    font-size: small;
  }
`

const Box = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
  background: rgb(255 255 255 / 41%);
  border-radius:5px;
  padding:60px 15px 15px 15px;
`

export default function MyPower() {
  const codeSkills = useSelector((state: RootState) => state.codeSkills);
  const designSkills = useSelector((state: RootState) => state.designSkills);
  return (
    <MyRow gutter={[20, 10]}>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <MyRibbon placement="start" text="编程能力">
          <Box>
            {
              codeSkills.map((Item: CodeSkillsType, index: number) => {
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
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <MyRibbon placement="start" text="设计能力">
          <Box>
            {
              designSkills.map((Item: DesignSkillsType, index: number) => {
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
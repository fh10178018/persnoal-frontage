import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { MyRibbon } from '../../common'
import Articles from './Articles'

const MyRow = styled(Row)`
  font-size: 18px;
  width: 70vw;
  position: absolute;
  top: 50%;
  margin-top:-304.5px!important;
  @media screen and (max-width: 875px){
    width: 95vw;
    font-size: small;
  }
`
const Box = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
  background: #fafafabf;
  border-radius:5px;
  padding:60px 0 0 0;
  overflow:hidden;
`

export default function ContactMe() {
  return (
    <MyRow gutter={[20, 10]}>
      <Col span={24}>
        <MyRibbon placement="start" text="我的作品">
          <Box>
            <Articles></Articles>
          </Box>
        </MyRibbon>
      </Col>
    </MyRow>
  )
}
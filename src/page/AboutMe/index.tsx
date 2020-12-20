import { Row, Col, Typography, Layout } from 'antd';
import React, { Component, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Gallery from '../Gallery/Gallery';

const { Paragraph } = Typography;
const { Header, Content, Footer } = Layout;
const MyContent = styled(Content)`
  background-color:white;
  width:100%;
  height:90vh;
`
const MyLayout = styled(Layout)`
  margin: 50vh 50px 0 50px;
  transform: translateY(-50%);
`
const MyParagraph = styled(Paragraph)`
  font-size:24px;
`
export default function AboutMe() {

  return (
    <Gallery>
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <MyParagraph>
            嗨！我叫方晗，目前热衷于前端编程开发和创意宣传设计。
          </MyParagraph>
          <MyParagraph>
            我于2021年华东理工大学毕业，是一名跨专业“ 破浪者 ”, 这也是我个人简历页设计和开发所阐述的理念。
          </MyParagraph>
          <MyParagraph>
            虽然我没有过多的项目开发经验，但也具备一定的项目独立开发能力。
          </MyParagraph>
          <MyParagraph>
            而且擅长也比较广，所以希望今后能够学精。同时你可以在我的日志中看到我的部分作品。
          </MyParagraph>
          <MyParagraph>
            未来的我想成为一名全栈工程师，当然我要把眼前的事做好！
          </MyParagraph>
          <MyParagraph>
            同时本网站，也会在学习中不断完善，把交互和UI做到最好。
          </MyParagraph>
        </Col>
      </Row>
    </Gallery>
  )
}
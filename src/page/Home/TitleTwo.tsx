import React, { useCallback } from 'react'
import styled from "styled-components/macro";
import { Typography } from 'antd';
const { Paragraph } = Typography;

type PropsType = {
  isActive: boolean;
};

const FakeWrap = styled.div.attrs((props: PropsType) => {
  return {
    isActive: props.isActive,
  }
})`
  transition:height 500ms cubic-bezier(.7,.21,.48,.94);
  width:100%;
  height:232px;
  height:${props => useCallback(() => props.isActive, [props.isActive])() ? '232px' : 0};
`
const Wrap = styled.div.attrs((props: PropsType) => {
  return {
    isActive: props.isActive
  }
})`
  position:absolute;
  top:0;
  left:0;
  font-weight:bold;
  font-size: 18px;
  max-width:450px;
  width:100%;
  transition:500ms cubic-bezier(.7,.21,.48,.94);
  ${props => props.isActive ? 'animation:text-in 500ms ;' : 'opacity: 0;transform: translateX(-100%);'};
  transform-origin:left top;
  @media screen and (max-width: 875px){
    font-size: small;
  }
`

export default function TitleTwo(props: PropsType) {
  const nativeActive = useCallback(() => props.isActive, [props.isActive])()
  return (
    <div style={{ position: "relative" }}>
      <FakeWrap isActive={nativeActive}></FakeWrap>
      <Wrap isActive={nativeActive}>
        <Paragraph>
          我于2021年华东理工大学毕业，是一名跨专业“ 破浪者 ”, 这也是我个人简历页设计和开发所阐述的理念。
        </Paragraph>
        <Paragraph>
          虽然我没有过多的项目开发经验，但也具备一定的项目独立开发能力。
        </Paragraph>
        <Paragraph>
          而且擅长也比较广，所以希望今后能够学精。同时你可以在我的日志中看到我的部分作品。
        </Paragraph>
      </Wrap>
    </div>
  )
}
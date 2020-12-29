import React, { useCallback } from 'react'
import styled from "styled-components/macro";
import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { IntroductionType } from '../../../redux/actions';
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
 user-select: none;
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
  const introduction = useSelector((state: RootState) => state.introduction);
  return (
    <div style={{ position: "relative" }}>
      <FakeWrap isActive={nativeActive}></FakeWrap>
      <Wrap isActive={nativeActive}>
        {
          introduction.map((item: IntroductionType, index: number) => <Paragraph key={index}>{item.content}</Paragraph>)
        }
      </Wrap>
    </div>
  )
}
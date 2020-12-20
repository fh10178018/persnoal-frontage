import React, { useCallback } from 'react'
import styled from "styled-components/macro";
import name from "../../img/name.gif"
import hi from "../../img/hi.png"
import HeadLine from './HeadLine';

type PropsType = {
  isActive: boolean;
  isZoom: boolean;
};

const FakeWrap = styled.div.attrs((props: PropsType) => {
  return {
    isActive: props.isActive,
    isZoom: props.isZoom
  }
})`
  width:450px;
  height:282.68px;
  height:${props => useCallback(() => props.isZoom, [props.isZoom])() ? '121px' : '282.68px'};
  transition:height 500ms;
  @media screen and (max-width: 480px) {
    max-width:320px;
  }
`

const Wrap = styled.div.attrs((props: PropsType) => {
  return {
    isActive: props.isActive,
    isZoom: props.isZoom,
  }
})`
  position: absolute;
  top: 0;
  left:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width:450px;
  width:100%;
  font-size: 38px;
  transition:500ms;
  transform:${props => props.isZoom ? 'scale(0.4) translateX(80px) ' : 'scale(1)'};
  transform-origin:left top;
`
const Name = styled.img`
  max-width:450px;
  width:100%;
  @media screen and (max-width: 480px) {
    max-width:320px;
  }
`
const Introduce = styled.div`
  display: flex;
  font-size:45px;
  flex-direction: row;
  align-items: center;
  justify-content:start;
  font-weight: 900;
  letter-spacing: 20px;
  height: 70px;
  overflow: hidden;
  width: max-content;
  @media screen and (max-width: 480px) {
    letter-spacing: 20px;
    font-size:30px;
    height: 50px;
  }
`
const ChangeUl = styled.ul`
  list-style:none;
  padding:0;
  animation: textSlider 5s infinite;
  color:#d9363e;
  
`
const ChangeItem = styled.li`
`
const Hi = styled.div`
  background:url(${hi}) no-repeat;
  width:90%;
  height:35px;
  margin-bottom: 5px;
  background-size: 200px 35px;
  @media screen and (max-width: 480px) {
    width:290px;
    background-size: 120px 20px;
  }
`

export default function Title(props: PropsType) {
  const nativeActive = useCallback(() => props.isActive, [props.isActive])()
  const nativeZoom = useCallback(() => props.isZoom, [props.isZoom])()
  return (
    <>
      <FakeWrap isActive={nativeActive} isZoom={nativeZoom}></FakeWrap>
      <Wrap isActive={nativeActive} isZoom={nativeZoom}>
        <HeadLine headline="hi" />
        <Name src={name}></Name>
        <Introduce>
          <span>热衷于</span>
          <ChangeUl>
            <ChangeItem>前端开发</ChangeItem>
            <ChangeItem>创意设计</ChangeItem>
          </ChangeUl>
        </Introduce>
      </Wrap>
    </>
  )
}
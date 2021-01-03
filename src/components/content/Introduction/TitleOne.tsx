import React, { useCallback } from 'react'
import styled from "styled-components/macro";
import name from "../../../img/name.gif"
import { setImageLoaded } from '../../../redux/actions';
import store from '../../../redux/store';
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
  display: inline-block;
  width:450px;
  height:${props => useCallback(() => props.isZoom, [props.isZoom])() ? '121px' : '282.68px'};
  transition:height 500ms;
  @media screen and (max-width: 480px) {
    height:${props => useCallback(() => props.isZoom, [props.isZoom])() ? '95px' : '236.68px'};
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
  user-select: none;
  transform:${props => props.isZoom ? 'scale(0.4)' : 'scale(1)'};
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
  font-size:40px;
  flex-direction: row;
  align-items: center;
  justify-content:start;
  font-weight: 900;
  letter-spacing: 10px;
  height: 70px;
  overflow: hidden;
  width: max-content;
  @media screen and (max-width: 480px) {
    letter-spacing: 5px;
    font-size:30px;
    height: 50px;
  }
`
const ChangeUl = styled.ul`
  list-style:none;
  padding:0;
  margin: 0;
  animation: textSlider 5s infinite;
  color:#d9363e;
  
`
const ChangeItem = styled.li`
`

export default function Title(props: PropsType) {
  const nativeActive = useCallback(() => props.isActive, [props.isActive])()
  const nativeZoom = useCallback(() => props.isZoom, [props.isZoom])()
  const dispatch = store.dispatch
  const handleImageLoad = () => {
    // 用于判断页面是否加载完毕
    dispatch(setImageLoaded())
  }
  return (
    <>
      <FakeWrap isActive={nativeActive} isZoom={nativeZoom}></FakeWrap>
      <Wrap isActive={nativeActive} isZoom={nativeZoom}>
        <HeadLine headline="hi" />
        <Name src={name} onLoad={handleImageLoad}></Name>
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
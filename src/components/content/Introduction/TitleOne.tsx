import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components/macro";
import { setImageLoaded } from '../../../redux/actions';
import { RootState } from '../../../redux/reducers';
import store from '../../../redux/store';
import HeadLine from './HeadLine';
import Name from './Name';
type PropsType = {
  isActive: boolean;
  isZoom: boolean;
  loaded?: boolean;
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
    loaded: props.loaded
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
  ${props => props.loaded ? 'animation:bounceInLeft 1s;' : ''}
  transform:${props => props.isZoom ? 'scale(0.4)' : 'scale(1)'};
  transform-origin:left top;
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
  const isFirst = useSelector((state: RootState) => state.switchRecord.substring(state.switchRecord.length - 2, state.switchRecord.length) === '-0' && state.switchRecord.substring(0, 1) !== '1')
  const htmlIsLoading = useSelector((state: RootState) => state.htmlIsLoading);
  return (
    <>
      <FakeWrap isActive={nativeActive} isZoom={nativeZoom}></FakeWrap>
      <Wrap loaded={!htmlIsLoading && isFirst} isActive={nativeActive} isZoom={nativeZoom}>
        <HeadLine headline="hi" />
        <Name htmlIsLoading={htmlIsLoading} />
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
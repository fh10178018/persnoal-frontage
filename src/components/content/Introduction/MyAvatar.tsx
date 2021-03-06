import React, { useCallback } from 'react'
import styled from "styled-components/macro";
import myImage from "../../../img/myphoto.png"
import cloud from '../../../img/cloud.png'
import { RootState } from '../../../redux/reducers';
import { useSelector } from 'react-redux';

type propsType = {
  isActive: boolean;
}

type wrapType = {
  loaded: boolean;
}

const Wrap = styled.div.attrs((props: wrapType) => ({
  loaded: props.loaded
}))`
  display: inline-block;
  ${props => props.loaded ? 'animation:bounceInRight 1s;' : ''}
  
`
const MAvatar = styled.div`
  position: relative;
  background:url(${myImage}) ${props => props.theme.primary} no-repeat;
  box-shadow: inset -2px -2px 10px #0000008c;
  background-size:100% 100%;
  width:300px;
  height:300px;
  border-radius:50%;
  @media screen and (max-height: 860px) {
    width:200px;
    height:200px;
  }
`
type tagProps = {
  len: number;
  isActive: boolean;
}
const MyTag = styled.ul.attrs((props: tagProps) => {
  return {
    len: props.len,
    isActive: props.isActive
  }
})`
  list-style:none;
  position: absolute;
  width:auto;
  bottom:-33px;
  right:${props => -props.len * 15 + 'px'};
  font-weight:bold;
  color:white;
  transition:500ms;
  opacity: ${props => props.isActive ? 1 : 0};
  transform:${props => props.isActive ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(-180px)'};
  li{
    display:flex;
    justify-content:center;
    align-items:center;
  }
`
type itemProps = {
  num: number;
  len: number;
}
const MyTagItem = styled.li.attrs((props: itemProps) => {
  return {
    num: props.num,
    len: props.len
  }
})`
  width:${props => Math.floor(Math.sqrt(props.num + 1) * 77) + 'px'};
  height:${props => Math.floor(Math.sqrt(props.num + 1) * 77) + 'px'};
  background:url(${cloud}) no-repeat;
  background-size: ${props => `${Math.floor(Math.sqrt(props.num + 1) * 77)}px ${Math.floor(Math.sqrt(props.num + 1) * 77)}px`};
  margin-left:${props => Math.sqrt(props.len - props.num - 1) * 60 + 'px'};
  animation: ${props => `float-y ${Math.floor(Math.sqrt(props.num + 1) * 2400)}ms linear infinite`};
  @media screen and (max-width: 860px) {
    font-size:xx-small;
    width:${props => Math.floor(Math.sqrt(props.num + 1) * 63) + 'px'};
    height:${props => Math.floor(Math.sqrt(props.num + 1) * 63) + 'px'};
    background-size: ${props => `${Math.floor(Math.sqrt(props.num + 1) * 63)}px ${Math.floor(Math.sqrt(props.num + 1) * 63)}px`};
  }
`

export default function MyAvatar(props: propsType) {
  const resumes = useSelector((state: RootState) => state.resumes);
  const htmlIsLoading = useSelector((state: RootState) => state.htmlIsLoading);
  const isFirst = useSelector((state: RootState) => state.switchRecord.substring(state.switchRecord.length - 2, state.switchRecord.length) === '-0' && state.switchRecord.substring(0, 1) !== '1');
  const my = useCallback(() => ([{
    label: '年龄',
    value: Math.ceil((new Date().getTime() - resumes.birthday) / 31536000000)
  }, {
    label: '专业',
    value: resumes.major
  }]), [resumes.birthday, resumes.major])()
  const nativeActive = useCallback(() => props.isActive, [props.isActive])()
  return (
    <Wrap loaded={!htmlIsLoading && isFirst}>
      <MAvatar>
        <MyTag len={my.length} isActive={nativeActive}>
          {
            my.map((item, index) => <MyTagItem key={index} len={my.length} num={index}>{item.label}: {item.value}</MyTagItem>)
          }
        </MyTag>
      </MAvatar>
    </Wrap>
  )
}
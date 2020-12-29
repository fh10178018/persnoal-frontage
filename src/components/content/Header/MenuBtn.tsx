import React, { useCallback } from 'react';
import styled from 'styled-components';
const Wrap = styled.div.attrs((props: propsType) => ({
  isActive: props.isActive
}))`
  width: 60px;
  height: 45px;
  margin-right: -10px;
  margin-top: -10px;
  position: relative;
  transform: rotate(0deg) scale(0.4);
  transition: .5s ease-in-out;
  cursor: pointer;
  span{
     ${props => props.isActive ? 'background: white;' : ''}
  }
  span:nth-child(1),span:nth-child(2){
    top: 0px;
  }
  span:nth-child(3),span:nth-child(4){
    top: 18px;
  }
  span:nth-child(5),span:nth-child(6){
    top: 36px;
  }
  span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }
  span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }
  span:nth-child(1) {
    ${props => props.isActive ? 'transform: rotate(45deg);left: 5px;top: 7px;' : ''}
  }
  span:nth-child(2) {
    ${props => props.isActive ? 'transform: rotate(-45deg);left: calc(50% - 5px);top: 7px;' : ''}
  }
  span:nth-child(3) {
    ${props => props.isActive ? 'left: -50%;opacity: 0;' : ''}
  }
  span:nth-child(4) {
    ${props => props.isActive ? 'left: 100%;opacity: 0;' : ''}
  }
  span:nth-child(5) {
    ${props => props.isActive ? 'left: 5px;top: 29px;transform: rotate(-45deg);' : ''}
  }
  span:nth-child(6) {
    ${props => props.isActive ? 'transform: rotate(45deg);left: calc(50% - 5px);top: 29px;' : ''}
  }
  `
const Span = styled.span`
    display: block;
    position: absolute;
    height: 9px;
    width: 50%;
    background:#c14652;
    opacity: 1;
    transform: rotate(0deg);
    transition: 1s ease-in-out;
`
type propsType = {
  isActive: boolean
}

export default function Footer(props: propsType) {
  const active = useCallback(() => props.isActive, [props.isActive])()
  return (
    <Wrap isActive={active}>
      <Span></Span>
      <Span></Span>
      <Span></Span>
      <Span></Span>
      <Span></Span>
      <Span></Span>
    </Wrap>
  )
}
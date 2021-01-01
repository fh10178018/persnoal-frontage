import { DownOutlined } from '@ant-design/icons'
import React, { useCallback } from 'react'
import styled from 'styled-components'

const Wrap = styled.div.attrs((props: propsType) => ({
  isActive: props.isActive
}))`
  display:flex;
  justify-content:center;
  flex-direction: column;
  animation: float-y 5s infinite linear;
  color:#c14652;
  position: absolute;
  bottom: -45px;
  /* margin: 0 auto; */
  left: 0;
  right: 0;
  transition:opacity 500ms;
  opacity: ${props => props.isActive ? 1 : 0};
  span:nth-child(1){
    transform: scaleX(1.5);
    font-size: x-large;
  }
  span:nth-child(2){
    transform: scaleX(1.5);
    font-size: large;
    opacity: 0.8;
  }
`
type propsType = {
  isActive: boolean
}

export default function DropDownIcon(props: propsType) {
  const nativeActive = useCallback(() => props.isActive, [props.isActive])()
  return (
    <Wrap isActive={nativeActive}>
      <DownOutlined />
      <DownOutlined />
    </Wrap>
  )
}
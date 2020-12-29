import React, { useCallback } from 'react';
import styled from 'styled-components';
const Wrap = styled.div`
  position:fixed;
  bottom:10px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  font-size: xx-small;
`
export default function Footer() {
  const text = useCallback(() => process.env.REACT_APP_WEBSITE_COPYRIGHT, [])()
  return (
    <Wrap>{text}</Wrap>
  )
}
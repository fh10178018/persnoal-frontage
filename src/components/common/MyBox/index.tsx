import React from 'react'
import styled from 'styled-components'
import getBoxHeight from '../../../utils/getBoxHeight'

type porpsType = {
  children: React.ReactNode
}

const Wrap = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  position: relative;
  margin-top:57px;
  @media screen and (max-width: 875px){
    margin-top:0;
  }
`

export default function MyBox(props: porpsType) {
  const height = getBoxHeight()
  return (
    <Wrap style={{ height: height }}>
      {props.children}
    </Wrap>
  )
}
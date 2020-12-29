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
`

export default function MyBox(props: porpsType) {
  const height = getBoxHeight()
  return (
    <Wrap style={{ height: height }}>
      {props.children}
    </Wrap>
  )
}
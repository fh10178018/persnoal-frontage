import { Badge } from 'antd'
import { RibbonProps } from 'antd/lib/badge/Ribbon'
import React from 'react'
import styled from 'styled-components'

const MRibbon = styled(Badge.Ribbon)`
  background:linear-gradient(to right, rgb(236, 200, 126) 0%, rgb(195, 69, 80) 100%);
  box-shadow: 1px 1px 3px #d9363e;
  font-weight:bolder;
  font-size: x-large;
  height: 40px;
  border-radius: 0 20px 20px 0;
  line-height: 40px;
`
export default function MyRibbon(props: RibbonProps) {
  return (
    <MRibbon {...props} />
  )
}
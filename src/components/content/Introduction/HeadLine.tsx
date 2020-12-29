import React from 'react'
import styled from 'styled-components'
import hi from "../../../img/hi.png"

type propsType = {
  headline: string;
  marginbottom?: number;
}
const Wrap = styled.div.attrs((props: propsType) => ({ marginbottom: props.marginbottom }))`
  margin-bottom: ${props => (!!props.marginbottom ? props.marginbottom : 5) + 'px'};
  width:100%;
  @media screen and (max-width: 480px) {
    max-width:320px;
  }
`

export default function HeadLine(props: propsType) {
  return (
    <Wrap marginbottom={props.marginbottom}>
      <img src={hi} alt="hi"></img>
    </Wrap>
  )
}
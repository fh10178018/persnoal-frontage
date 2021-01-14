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
const H4 = styled.h4`
  font-family: SubFont;
  margin: 0;
  font-size: xxx-large;
  line-height: 40px;
  @media screen and (max-width: 480px) {
    max-width:320px;
    line-height: 30px;
    font-size: xx-large;
  }
`

export default function HeadLine(props: propsType) {
  return (
    <Wrap marginbottom={props.marginbottom}>
      <img src={hi} alt="hi"></img>
      <H4>HI，我叫</H4>
    </Wrap>
  )
}
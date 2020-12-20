import React, { useCallback } from 'react'
import styled from 'styled-components'
import hi from "../../img/hi.png"
import codepower from "../../img/codepower.png"
import experience from "../../img/experience.png"
import designpower from "../../img/designpower.png"
import { isValidKey } from '../../utils/common'

type propsType = {
  headline: string;
  marginbottom?: number;
}
const Wrap = styled.div.attrs((props: propsType) => ({ marginbottom: props.marginbottom }))`
  margin-bottom: ${props => (!!props.marginbottom ? props.marginbottom : 5) + 'px'};
  width:100%;
`
const imageList = {
  'hi': hi, 'codepower': codepower, 'experience': experience, 'designpower': designpower
}


export default function HeadLine(props: propsType) {
  const nativeImage = useCallback(() => {
    if (!isValidKey(props.headline, imageList)) {
      throw Error('invalid sequence');
    }
    return imageList[props.headline]
  }, [props.headline])()
  return (
    <Wrap marginbottom={props.marginbottom}>
      <img src={nativeImage} alt={props.headline}></img>
    </Wrap>
  )
}
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { Image } from 'antd'
const Wrap = styled.div`
  text-align:center;
`

type propsType = {
  imageUrl: string,
  type: 'qq' | 'weixin'
}
export default function QqAndWeixin(props: propsType) {
  const nativeImageUrl = useCallback(() => props.imageUrl, [props.imageUrl])()
  const isQQ = useCallback(() => (props.type === 'qq'), [props.type])()
  return (
    <Wrap>
      <Image
        width={200}
        height={200}
        src="error"
        fallback={"/api" + nativeImageUrl}
      />
      <h4>扫一扫二维码，{isQQ ? '加我QQ好友' : '加我微信好友'}。</h4>
    </Wrap>
  )
}
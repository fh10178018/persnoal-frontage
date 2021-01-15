import React from 'react'
import styled from 'styled-components'

type propsType = {
  headline: string;
}
const Wrap = styled.div`
  width:100%;
  line-height: 52px;
  height: 52px;
  margin-left:10px;
  @media screen and (max-width: 480px) {
    max-width:320px;
    line-height: 32px;
    height: 32px;
    margin-top: 6px;
  }
`
const Svg = styled.svg`
  transform:scale(0.8);
  transform-origin:left;
  @media screen and (max-width: 480px) {
    line-height: 32px;
  }
`

const Stop1 = styled.stop`
  stop-color:#cf635b;
  stop-opacity:1;
`

const Stop2 = styled.stop`
  stop-color:#c14652;
  stop-opacity:1;
`

export default function HeadLine(props: propsType) {
  return (
    <Wrap>
      <Svg viewBox="0 0 375 60" >
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop1 offset="0%" />
          <Stop2 offset="100%" />
        </linearGradient>
        <g clipPath="url(#hi)">
          <rect width="300" height="70" fill="url(#grad1)" />
        </g>
        <clipPath id="hi">
          <path d="M19.37,6.12,17.28,22H33.34l1.94-13.1L33.19,6.12H49.1L43.56,46.87H29.74l2.73-18H16.34l-2.52,18H0L5.54,8.14l-2.8-2Z" />
          <path d="M75.31,6.12,69.05,46.87H55.94l4.83-38L58.68,6.12Z" />
          <path d="M90,53.71H81.79l5-15.12h9.58Z" />
          <path d="M146.37,33.55l-9.93,2.59-1.51,11a5.61,5.61,0,0,1-2,3.42,5.53,5.53,0,0,1-3.67,1.33H115.7l6.41-6.62.79-5.48-7.77,2,1.08-7.56,7.77-2,1.51-10.94H118l1-6.84h7.49l.58-4.46-6.27,1,1-6.84L147,0l-1,6.84-5.54.94-.94,6.62h12.75L150.12,2l-1.73-2h13.68l2.52,14.4h13.89l-1,6.84H165.74l1.44,8.14,9.87-4.76-1.3,8.93L168.48,37l1.22,6.77h2.59L175.46,41l-1.58,10.8h-15l-1.66-9.43-11.44,5.47L147,39l8.79-4.17-2.38-13.54H138.52l-1,7.34L147.45,26Zm31.9-22.61H166l-1.37-9.57H176.9Z" />
          <path d="M227.37,41.26l-17.2,2.3,5.32-38.3-2-2.45h13.89l-4.46,31.82,5.54-.86,4.32-31L231.19.07h14L238,51.7h-12ZM185.47,2.81,187,4.18l-6.12,43.56h25l6.34-44.93Zm11,37.22h-4.1l4.18-29.52h4.1Z" />
        </clipPath>
      </Svg>
    </Wrap>
  )
}
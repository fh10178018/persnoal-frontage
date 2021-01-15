import React from 'react'
import styled from 'styled-components'
import title from "../../../img/title.png"
import { setImageLoaded } from '../../../redux/actions'
import store from '../../../redux/store'

const Img = styled.image`
  transform-origin: 130px -120px;
  animation: rotate 3s infinite linear;
`

// type propsType = {
//   htmlIsLoading: boolean
// }

export default function HeadLine (props) {
  const dispatch = store.dispatch
  const handleImageLoad = () => {
    dispatch(setImageLoaded())
  }
  return (
    <svg viewBox="0 0 375 174">
      <style type="text/css">{`
        #fanghan{
          font-family: SubFont;
          transform: scale(2.7);
        }
	  `}</style>
      <g clipPath="url(#fanghan)">
        <Img href={title} width="760" height="760" y="-500px" x="-250px" onLoad={handleImageLoad}></Img>
      </g>
      <clipPath id="fanghan">
        <path d="M44.86,51.76,47.3,33.91H23.69L15.12,58.46H1.44L15.19,18.93H5.69l.93-6.84H29.88l.36-2.73-2.3-2.74H44.35l-.79,5.47H66.82l-.94,6.84h-37l-2.81,8.14H62L58.25,53.71a5.68,5.68,0,0,1-5.62,4.75H38.38Z" />
        <path d="M75.82,11.16l-1.3-2.09H97L90.5,55.58H69.62ZM84,48.74,85.9,35.06H80.21L78.34,48.74Zm-2.8-20.52H86.9l1.73-12.31H82.94Zm41.4-5.33L121,12.74h-9.65L105.7,23H97.49l7.77-13.6-2.08-2.52h25L131,22.89Zm6.55,1.73L128.3,31,123,37.72h-8.93l5.33-7H97.49l.86-6.12Zm-10.44-9,.21,7.63h-7.2l-.28-7.63ZM95.47,38.37,92.73,57.74h33.41l2.74-19.37Zm21.81,13.11H103.82l.86-6.27h13.47Z" />
      </clipPath>
    </svg >
  )
}
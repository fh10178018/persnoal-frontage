import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import title from "../../../img/title.png"
import { setImageLoaded } from '../../../redux/actions'
import { RootState } from '../../../redux/reducers'
import store from '../../../redux/store'

const Text = styled.text`
  stroke: white;
  stroke-width: 4;
  font-weight:300;
  font-size:5.4em;
  text-shadow: #000 3px 4px 5px;
`
const Img = styled.image`
  transform-origin: 130px -120px;
  animation: rotate 3s infinite linear;
`

type propsType = {
  htmlIsLoading: boolean
}

export default function HeadLine(props: propsType) {
  const dispatch = store.dispatch
  const handleImageLoad = () => {
    dispatch(setImageLoaded())
  }
  const loaded = useCallback(() => !props.htmlIsLoading, [props.htmlIsLoading])()
  return (
    <svg viewBox="0 0 375 174">
      <g clipPath="url(#fanghan)">
        <Img href={title} width="760" height="760" y="-500px" x="-250px" onLoad={handleImageLoad}></Img>
      </g>
      <clipPath id="fanghan">
        {
          loaded ? <Text text-anchor="middle" dy="164px" style={{ fontFamily: loaded ? 'SubFont' : '' }}>方晗</Text> : ''
        }
      </clipPath>
    </svg >
  )
}
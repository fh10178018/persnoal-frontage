import React from 'react';
import styled from "styled-components/macro";
import wave from '../../img/wave.png'
import { setImageLoaded } from '../../redux/actions';
import store from '../../redux/store';

const Wrapper = styled.div`
  position:fixed;
  left:0;
  right:0;
  width:100vw;
  height:100vh;
  >div{
    overflow:hidden;
    width:100vw;
    position: absolute;
    bottom: 0;
  }
  img{
    position:absolute;
    left:0;
    bottom:0;
    width:100vw;
  }
`
const MyImage1 = styled.div`
height:10vw;
  animation: wave 3s infinite linear;
  img{
    top:-164.8vw;
  }
`
const MyImage2 = styled.div`
  height:21vw;
  animation: wave 2.7s infinite linear;
  img{
    top:-143.5vw;
  }
`
const MyImage3 = styled.div`
  height:8vw;
  animation: wave 1.2s infinite linear;
  img{
    top:-135vw;
  }
`
const MyImage4 = styled.div`
  height:13vw;
  animation: wave 1s infinite linear;
  img{
    top:-121.5vw;
  }
`
const MyImage5 = styled.div`
  height:16vw;
  animation: wave 2.5s infinite linear;
  img{
    top:-102.4vw;
  }
`
const MyImage6 = styled.div`
  height:28vw;
  animation: wave 1.3s infinite linear;
  img{
    top:-75.4vw;
  }
`
const MyImage7 = styled.div`
  height:26vw;
  animation: wave 2s infinite linear;
  img{
    top:-49vw;
  }
`
const MyImage8 = styled.div`
  height:49vw;
  animation: wave 3.4s infinite linear;
  img{
    top:0;
  }
`
export default function Background() {
  const dispatch = store.dispatch
  const handleImageLoad = () => {
    // 用于判断页面是否加载完毕
    dispatch(setImageLoaded())
  }
  return (
    <Wrapper>
      <MyImage8>
        <img alt={wave} src={wave} onLoad={handleImageLoad} />
      </MyImage8>
      <MyImage7>
        <img alt={wave} src={wave} />
      </MyImage7>
      <MyImage6>
        <img alt={wave} src={wave} />
      </MyImage6>
      <MyImage5>
        <img alt={wave} src={wave} />
      </MyImage5>
      <MyImage4>
        <img alt={wave} src={wave} />
      </MyImage4>
      <MyImage3>
        <img alt={wave} src={wave} />
      </MyImage3>
      <MyImage2>
        <img alt={wave} src={wave} />
      </MyImage2>
      <MyImage1>
        <img alt={wave} src={wave} />
      </MyImage1>
    </Wrapper>
  )
}
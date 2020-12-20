import React from 'react';
import styled from "styled-components/macro";
import wave1 from '../../img/wave1.png'
import wave2 from '../../img/wave2.png'
import wave3 from '../../img/wave3.png'
import wave4 from '../../img/wave4.png'
import wave5 from '../../img/wave5.png'
import wave6 from '../../img/wave6.png'
import wave7 from '../../img/wave7.png'
import wave8 from '../../img/wave8.png'

const Wrapper = styled.div`
  position:fixed;
  left:0;
  right:0;
  width:100vw;
  height:100vh;
  img{
    position:absolute;
    left:0;
    bottom:0;
    width:100vw;
  }
`
const MyImage1 = styled.img`
  animation: wave 3s infinite linear;
`
const MyImage2 = styled.img`
  animation: wave 2.7s infinite linear;
`
const MyImage3 = styled.img`
  animation: wave 1.2s infinite linear;
`
const MyImage4 = styled.img`
  animation: wave 1s infinite linear;
`
const MyImage5 = styled.img`
  animation: wave 2.5s infinite linear;
`
const MyImage6 = styled.img`
  animation: wave 1.3s infinite linear;
`
const MyImage7 = styled.img`
  animation: wave 2s infinite linear;
`
const MyImage8 = styled.img`
  animation: wave 3.4s infinite linear;
`
export default function Background() {
  return (
    <Wrapper>
      <MyImage8 src={wave8}></MyImage8>
      <MyImage7 src={wave7}></MyImage7>
      <MyImage6 src={wave6}></MyImage6>
      <MyImage5 src={wave5}></MyImage5>
      <MyImage4 src={wave4}></MyImage4>
      <MyImage3 src={wave3}></MyImage3>
      <MyImage2 src={wave2}></MyImage2>
      <MyImage1 src={wave1}></MyImage1>
    </Wrapper>
  )
}
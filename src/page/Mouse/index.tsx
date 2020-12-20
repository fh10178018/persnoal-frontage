// 鼠标跟踪
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers'
import useWinSize from '../../utils/useWinSize';

type PropsType = {
  isPointer: boolean;
  isDead: boolean;
};

const MouseWrapper = styled.div.attrs((props: PropsType) => {
  return {
    isPointer: props.isPointer,
    isDead: props.isDead
  }
})`
  position:absolute;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
	z-index: 99999;
  height: 46px;
  width: 46px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color:rgba(0, 0, 0, 0.25);
  transition: opacity .3s ease-in-out, transform 300ms ease-in-out;
  display:flex;
  justify-content:center;
  box-shadow: 0 0 22px rgba(0, 0, 0, 0.12);
  align-items:center;
  cursor: none;
  opacity:${props => (props.isPointer && !props.isDead) ? 1 : 0}
`
const MouseSpan = styled.span`
  position: relative;
  height: 40px;
  width: 30px;
  border-radius: 15px;
  display: block;
  border-radius: 15px;
  margin:0 auto;
  border: 3px solid white;
`
const MouseMove = styled.span`
  position: absolute;
  display: block;
  top: 29%;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  background: white;
  border-radius: 4px;
  animation: scroll-ani 2s linear infinite;
`
export default function Mouse() {
  const [postion, SetPostion] = useState([0, 0]);
  const pointer = useSelector((state: RootState) => state.cursour) === 'pointer';
  const [isDead, setIsDead] = useState(true)
  const isPC = useSelector((state: RootState) => state.isPC);
  const size = useWinSize();
  const useHandleMouseMove = useCallback((e: any) => {
    if ((e.clientX + 23) >= size.width || (e.clientY + 23) >= size.height || 0 >= e.clientX || 0 >= e.clientY) {
      setIsDead(true)
    }
    else setIsDead(false)
    SetPostion([e.clientY, e.clientX])
  }, [size.height, size.width])
  useEffect(() => {
    window.addEventListener('mousemove', useHandleMouseMove)
    return () => {
      window.removeEventListener('mousemove', useHandleMouseMove)
    }
  }, [useHandleMouseMove])
  return (
    <>
      {
        isPC ? (
          <MouseWrapper isPointer={pointer} isDead={isDead} style={{
            top: postion[0] + 'px', left: postion[1] + 'px'
          }}>
            <MouseSpan>
              <MouseMove></MouseMove>
            </MouseSpan>
          </MouseWrapper >
        ) : ''
      }
    </>
  )
}
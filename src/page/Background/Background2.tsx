// 采用konva做动态背景，暂搁置
import React, { Component, useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect } from 'react-konva';
import Konva from 'konva';
import Type from 'konva/types/Layer';
import useWinSize from '../../utils/useWinSize'
export default function Background() {
  const [state, setState] = useState({ color: 'green' })
  const winSize = useWinSize()
  const Star = useRef<Type.Layer>(null)
  useEffect(() => {
    console.log(Star.current)
    const Hexagon = new Konva.RegularPolygon({
      x: Math.ceil(Math.random() * winSize.width),
      y: winSize.height,
      sides: 6,
      radius: 20,
      stroke: '#ED412D',
      strokeWidth: 8,
    });

    if (Star.current) {
      //持续转动 动画
      Star.current.add(Hexagon);
      var amplitude = 100;
      var period = 60;
      //Animation对象
      var animate = new Konva.Animation(function (frame: any) {
        const curTime = (frame.time / 1000) % 16.8
        console.log(curTime, winSize.height / 60)
        Hexagon.y(
          winSize.height - curTime * period
        );
        Hexagon.x(
          amplitude * Math.sin(curTime * Math.PI / 3) + 100
        );
        Hexagon.rotate(0.5);
      }, Star.current);
      animate.start();
    }
  })
  return (
    <Stage width={winSize.width} height={winSize.height}>
      <Layer ref={Star}></Layer>
    </Stage>
  );
}
import React, { Component } from 'react'
import ArticlePagination from "./ArticlePagination";
import styled from 'styled-components';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


const Wrap = styled.div`
  width:100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  padding: 10px 0;
  @media (max-width: 830px){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-width: 0;
    .btn{
      position: static;
    }
  }
`
const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2,100%);
  width: 100%;
  padding:0 50px;
`
type BtnProps = {
  placement: 'left' | 'right'
}
const Btn = styled.button.attrs((props: BtnProps) => ({ placement: props.placement }))`
    top: 0;
    background: transparent;
    border: none;
    position: absolute;
    z-index: 11;
    cursor: pointer;
    width: 80px;
    height: 100%;
    transition: 0.8s;
    ${props => props.placement === 'left' ? 'left: 0;' : 'right: 0;'}
    i{
        color: #888888;
        margin: 0 auto;
        font-size: 30px;
        border: 2px solid transparent;
        border-radius: 50%;
        padding: 5px;
        width: 34px;
        height: 34px;
        transition: 0.8s;
    }
    :hover{
    opacity:0.5;
    i{
      text-shadow: 0 1px 2px rgba(0,0,0,.6);
      color: #d2b356;
    }
  }
  :focus{
    outline:0;
  }
  ::before{
    content: '';
    width: 80px;
    height: 100%;
    top: 0;
    position: absolute;
    z-index: -1;
    ${props => props.placement === 'left' ? 'left: 0;' : 'right: 0;'}
    background-image: linear-gradient(${props => props.placement === 'left' ? 'to right' : 'to left'},#f5f5f5 0,rgba(0,0,0,.0001) 100%);
  }
    @media (max-width: 830px){
      position: static;
    }
`

export default class Articles extends Component {
  render() {
    return (
      <Wrap>
        <Box>
          <ArticlePagination />
        </Box>
        <Btn placement="left" ><LeftOutlined /></Btn>
        <Btn placement="right"><RightOutlined /></Btn>
      </Wrap>
    )
  }
}
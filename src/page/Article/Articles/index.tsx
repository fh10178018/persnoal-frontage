import React, { Component } from 'react'
import './Articles.css'
import ArticlePagination from "../ArticlePagination";
import styled from 'styled-components';

type propTypes = {

}

const Wrap = styled.div`
  width:100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  padding: 10px 0;
  //渐变背景background-image: linear-gradient(方向, 颜色结束1, 颜色结束2, ...);
  >.btn-previous:before{
    left: 0;
    background-image: linear-gradient(to right,#f3f3f3 0,rgba(0,0,0,.0001) 100%);
  }
  >.btn-next:before{
    right: 0;
    background-image: linear-gradient(to left,#f3f3f3 0,rgba(0,0,0,.0001) 100%);
  }
  >.btn-previous{
    left: 0;
  }
  >.btn-next{
    right: 0;
  }
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
  grid-template-columns: repeat(3,100%);
  width: 100%;
  padding:0 50px;
`

const Btn = styled.button`
    top: 0;
    background: transparent;
    border: none;
    position: absolute;
    z-index: 11;
    cursor: pointer;
    width: 80px;
    height: 100%;
    transition: 0.8s;
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
                    <ArticlePagination />
                    <ArticlePagination />
                </Box>
                <Btn className="btn-previous p-0" ><i className="fa fa-chevron-left" /></Btn>
                <Btn className="btn-next p-0"><i className="fa fa-chevron-right" /></Btn>
            </Wrap>
        )
    }
}
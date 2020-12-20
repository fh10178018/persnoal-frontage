//用来展示文章的盒子链接
import { FullscreenOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import React, { useState } from 'react'
import styled from 'styled-components';


const Wrap = styled.div`
  background-color: white;
  border-radius:15px;
  overflow: hidden;
  cursor: pointer;
  height: 90%;
  transition: 500ms;
    .img-show{
    position: relative;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
    >.btn{
      border: 0;
      background-color: transparent;
      font-size: 20px;
      font-weight: bold;
      position: absolute;
      z-index: 12;
      color: #d2b356;
      top: 10px;
      right: 10px;
      opacity: 1;
      transition: 500ms;
      padding: 0;
      cursor: pointer;
    }
    >.btn:hover{

      font-size: 25px;
    }
    >.btn:focus{
      outline: 0;
    }
  }
  .img-show:before{
    content: '';
    position: absolute;
    z-index: 11;
    top: 0;
    right: 0;
    height: 100px;
    width: 100px;
    background-image: linear-gradient(to bottom left,#f3f3f3 0,rgba(0,0,0,.0001) 55%);
    opacity: 0;
    transition: 500ms;
  }
  .header{
    padding: 10px;
    .title{
      color: #282c34;
      font-size: 25px;
      line-height: 25px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    >.textloading{
      width: 50%;
      height: 25px;
      color: #f0ebda;
      background-color: #f0ebda;
    }
    .stats{
      display: flex;
      justify-content: start;
      opacity: 0;
      transition: 500ms;
      margin-top: 5px;
    }
  }
  :hover{
  height: 100%;
  .img-show{
    button{
      padding: 20px;
      opacity: 1;
    }

  }
  .img-show:before{
    opacity: 1;
  }
  .header{
    .stats{
      opacity: 1;
    }
  }
}
`

export default function ArticleBox() {
  const [imageStatus, setimageStatus] = useState("loading");
  return (
    <Wrap className="article-box">
      <div className="img-show">
        <img src="https://assets.codepen.io/3879263/internal/screenshots/pens/JjGVbjY.custom.png?fit=cover&format=auto&ha=false&height=360&quality=75&v=2&version=1596457569&width=640" />
        <a className="btn"><FullscreenOutlined /></a>
      </div>
      <div className="header">
        <h2 className={"title text" + imageStatus}>asd</h2>
        <div className="stats">
          <Tag color="#55acee">Twitter</Tag>
          <button><i className="fa fa-eye" /><span>231</span></button>
        </div>
      </div>
    </Wrap>
  )

}
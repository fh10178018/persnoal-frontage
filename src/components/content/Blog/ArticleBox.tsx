//用来展示文章的盒子链接
import { FullscreenOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setCursour } from '../../../redux/actions';
import { Article } from '../../../redux/reducers';
import { MyIconButton, MyTag } from '../../common';


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
      font-weight: bolder;
      position: absolute;
      z-index: 12;
      color: white;
      top: 10px;
      right: 10px;
      opacity: 0;
      transform:scale(0);
      transition: 500ms;
      padding: 0;
      cursor: pointer;
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
    background-image: linear-gradient(to bottom left,white 0,rgba(0,0,0,.0001) 55%);
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
    .btn{
      opacity:1;
      transform:scale(1)
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
type propsType = {
  handleShow: (item: Article) => void,
  item: Article
}

export default function ArticleBox(props: propsType) {
  const dispatch = useDispatch();
  return (
    <Wrap className="article-box" onClick={() => props.handleShow(props.item)} onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))} >
      <div className="img-show">
        <Image src={'/api' + props.item.imageUrl} preview={false} alt={props.item.imageUrl} />
        <span className="btn"><MyIconButton icon={<FullscreenOutlined />} /></span>
      </div>
      <div className="header">
        <h2 className="title">{props.item.title}</h2>
        <div className="stats">
          {props.item.types.map((item: string, index) => <MyTag key={index}>{item}</MyTag>)}
        </div>
      </div>
    </Wrap>
  )

}
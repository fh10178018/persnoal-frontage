import { Image } from 'antd';
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components';
import { Article } from '../../../redux/reducers';
import { MyModal } from '../../common';
import marked from 'marked';
import 'github-markdown-css/github-markdown.css'
type propsType = {
  visible: boolean,
  onHide: () => void,
  item: Article
}

const ImgWrap = styled.div`
  display:flex;
  justify-content:center;
  height:auto;
  width:100%;
  background-color:#25252852;
`

const MyMarkDown = styled(ReactMarkdown)`
  padding:8px;
`

export default function ArticleModal(props: propsType) {
  return (
    <MyModal top="0" title={props.item.title} visible={props.visible} id={props.item._id} onCancel={props.onHide} >
      <ImgWrap>
        <Image src={'/api' + props.item.imageUrl} preview={false} alt={props.item.imageUrl} />
      </ImgWrap>
      <MyMarkDown className="markdown-body" escapeHtml={false} source={props.item.content && marked(props.item.content)}></MyMarkDown>
    </MyModal>
  )
}
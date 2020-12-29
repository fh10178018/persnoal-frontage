import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../redux/reducers';
import { useOperateModal } from './api';
import ArticleBox from "./ArticleBox";
import ArticleModal from './ArticleModal';

const Wrap = styled.div`
    display: grid;
  grid-template-columns: repeat(2,minmax(0,50%));
  padding: 0 20px;
  grid-gap: 4rem 3rem;
  @media (max-width: 830px){
    grid-template-columns: minmax(0,100%);
    padding: 0 10px;
    grid-gap: 0.5rem 1rem;
    }
`
const Item = styled.div`
    height: 100%;
`

export default function ArticlePagination() {
  const articles = useSelector((state: RootState) => state.articles);
  const dispatch = useDispatch()
  const [curItem, visible, showModal, hideModal] = useOperateModal(dispatch);
  return (
    <Wrap id="0">
      {
        articles.data.map((item: any, index: number) => {
          return (
            <Item key={index}><ArticleBox key={index} item={item} handleShow={showModal} /></Item>
          )
        })
      }
      <ArticleModal visible={visible} onHide={hideModal} item={curItem}></ArticleModal>
    </Wrap>
  )
}
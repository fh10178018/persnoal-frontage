import React, { Component } from 'react'
import styled from 'styled-components';
import ArticleBox from "../ArticleBox";

const Wrap = styled.div`
    display: grid;
  grid-template-columns: repeat(3,minmax(0,50%));
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

export default class ArticlePagination extends Component {
    render() {
        return (
            <Wrap id="0">
                <Item ><ArticleBox /></Item>
                <Item ><ArticleBox /></Item>
                <Item ><ArticleBox /></Item>
            </Wrap>
        )
    }
}
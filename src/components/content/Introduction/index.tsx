import { Col, Row } from 'antd';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import MyBox from '../../common/MyBox';
import MyAvatar from './MyAvatar';
import TitleOne from './TitleOne';
import TitleTwo from './TitleTwo';

const MyRow = styled(Row)`
  height:378px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  .ant-col{
    height:100%;
  }
  @media screen and (max-width: 990px){
    align-content: start;
    height: auto;
    .ant-col{
      height:auto;
    }
  }
`
const MyCol = styled(Col)`
  @media screen and (max-width: 990px){
    width:50px;
  }
`
type propsType = {
  page: number
}

export default function Introduction(props: propsType) {
  const nativePage = useCallback(() => props.page, [props.page])()
  return (
    <MyBox>
      <MyRow align="middle" justify="center" gutter={[50, 0]}>
        <MyCol xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
          <TitleOne isActive={nativePage === 0} isZoom={nativePage === 1} ></TitleOne>
          <TitleTwo isActive={nativePage === 1}></TitleTwo>
        </MyCol>
        <Col xs={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }} style={{ textAlign: 'center' }}>
          <MyAvatar isActive={nativePage === 1}></MyAvatar>
        </Col>
      </MyRow>
    </MyBox>
  )
}
import { Col, Row } from 'antd';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../redux/reducers';
import DropDownIcon from './DropDownIcon';
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
  const isPC = useSelector((state: RootState) => state.isPC);
  return (
    <MyRow align="middle" justify="center" gutter={[50, 0]}>
      <MyCol xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
        <TitleOne isActive={nativePage === 0} isZoom={nativePage === 1} ></TitleOne>
        <TitleTwo isActive={nativePage === 1}></TitleTwo>
        {
          isPC ? '' : <DropDownIcon isActive={nativePage === 0} />
        }
      </MyCol>
      <Col xs={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }} style={{ textAlign: 'center' }}>
        <MyAvatar isActive={nativePage === 1}></MyAvatar>
      </Col>
    </MyRow>
  )
}
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
  height:289px;
  .ant-col{
    height:100%;
  }
  @media screen and (max-width: 990px){
    align-content: start;
    height: 500px;
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

const MyCol2 = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`

type propsType = {
  page: number
}

export default function Introduction(props: propsType) {
  const nativePage = useCallback(() => props.page, [props.page])()
  const isPC = useSelector((state: RootState) => state.isPC);
  return (
    <MyRow align="middle" justify="center" style={{ alignItems: 'center' }}>
      <MyCol xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
        <TitleOne isActive={nativePage === 0} isZoom={nativePage === 1} ></TitleOne>
        <TitleTwo isActive={nativePage === 1}></TitleTwo>
        {
          isPC ? '' : <DropDownIcon isActive={nativePage === 0} />
        }
      </MyCol>
      <MyCol2 xs={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }} >
        <MyAvatar isActive={nativePage === 1}></MyAvatar>
      </MyCol2>
    </MyRow>
  )
}
import { EnvironmentFilled, MailFilled, PhoneFilled, QqOutlined, WechatOutlined } from '@ant-design/icons'
import { Button, Col, message, Popconfirm, Popover, Row } from 'antd'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import CopyToClipboard from 'react-copy-to-clipboard';
import { RootState } from '../../../redux/reducers';
import { useSelector } from 'react-redux';
import QqAndWeixin from './QqAndWeixin';
import { MyIconButton } from '../../common';
import { useDispatch } from 'react-redux'
import { setCursour } from '../../../redux/actions'
const Wrap = styled.div`
  width:100%;
  height:100%;
`
const MyButton = styled(Button)`
  width:auto;
  min-width:263px;
  height: 80px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12)!important;
  background: rgb(255 255 255 / 41%)!important;
  border-radius:5px;
  margin-bottom:10px;
  text-align: left;
  cursor: pointer;
  >h3{
    margin-bottom:0;
    transition:500ms;
    transform-origin:left;
    >span{
      margin-left:8px;
    }
  }
  :hover{
    h3{
      transform:scale(1.1);
    }
  }
  @media screen and (max-width: 990px){
    width:100%;
    min-width: 0;
    height:auto;
    >h3{
      font-size: medium!important;
    }
  }
`
const MyRow = styled(Row)`
  align-content:space-between;
  height:100%;
`

export default function ContactsExisting() {
  const onCopy = (val: string) => {
    message.success({ top: 56, content: val + ' 已经复制' });
  }
  const resumes = useSelector((state: RootState) => state.resumes);
  const confirm = useCallback(() => {
    window.location.href = resumes.csdnUrl
  }, [resumes.csdnUrl])
  const dispatch = useDispatch();
  return (
    <Wrap>
      <MyRow >
        <Col span={24}>
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 24 }} >
              <CopyToClipboard text={resumes.tel} onCopy={onCopy}>
                <MyButton type="text" size="large" onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))}><h3><PhoneFilled /><span>{resumes.tel}</span></h3></MyButton>
              </CopyToClipboard>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 24 }}>
              <CopyToClipboard text={resumes.email} onCopy={onCopy}>
                <MyButton type="text" size="large" onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))}><h3><MailFilled /><span>{resumes.email}</span></h3></MyButton>
              </CopyToClipboard>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 24 }}>
              <CopyToClipboard text={resumes.address} onCopy={onCopy}>
                <MyButton type="text" size="large" onMouseEnter={() => dispatch(setCursour('hover'))} onMouseLeave={() => dispatch(setCursour('pointer'))}><h3><EnvironmentFilled /><span>{resumes.address}</span></h3></MyButton>
              </CopyToClipboard>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <h5><strong>社交网络</strong></h5>
          <Popover placement="top" content={<QqAndWeixin type="qq" imageUrl={resumes.weixinImageUrl} />} trigger="click">
            <MyIconButton icon={<WechatOutlined />} />
          </Popover>
          <Popover placement="top" content={<QqAndWeixin type="weixin" imageUrl={resumes.qqImageUrl} />} trigger="click">
            <MyIconButton icon={<QqOutlined />} style={{ marginLeft: '8px' }} />
          </Popover>
          <Popconfirm
            placement="top"
            title="是否跳转到方晗的CSDN博客"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
            trigger="click">
            <MyIconButton icon={<span className='anticon'>C</span>} style={{ marginLeft: '8px' }} />
          </Popconfirm>
        </Col>
      </MyRow>
    </Wrap>
  )
}
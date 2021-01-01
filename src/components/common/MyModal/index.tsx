import { HeartFilled } from '@ant-design/icons'
import { Modal } from 'antd'
import { ModalProps } from 'antd/lib/modal'
import React, { useCallback } from 'react'
import styled from 'styled-components'
import { MyIconButton } from '..'
import MyRibbon from '../MyRibbon'

const MModal = styled(Modal)`
  .ant-modal-content{
    background-color:transparent;
  }
  .ant-modal-header{
    display:none;
  }
  .ant-modal-body{
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 10px rgba(0,0,0,.2);
    background-color: white;
    align-self: center;
    margin: 40px auto;
    border-radius: 10px;
    overflow:hidden;
  }
  @media screen and (max-width: 990px){
    width:100%!important;
    .ant-modal-body{
      margin: 0 auto;
    }
  }
`
const Box = styled.div`
  padding:0 10px 10px 10px;
`

const Header = styled.header`
  display:flex;
  justify-content:flex-end;
  padding-right:10px;
  align-items:center;
  height: 60px;
`

type porpsType = {
  children: React.ReactNode,
  top?: string | number
}
export default function MyModal(props: ModalProps & porpsType) {
  const nativeStyle = useCallback(() => {
    return {
      top: typeof props.top === 'string' ? props.top : props.top + 'px'
    }
  }, [props.top])()
  return (
    <MModal {...props} footer={null} closable={false} style={nativeStyle} width={'70vw'} bodyStyle={{ padding: 0 }
    } >
      <MyRibbon placement="start" text={props.title}>
        <Header>
          <div className="action">
            <MyIconButton icon={<HeartFilled />} />
          </div>
        </Header>
        <Box>
          {props.children}
        </Box>
      </MyRibbon>
    </MModal>
  )
}
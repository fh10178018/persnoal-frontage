import { useState } from "react";
import { setWheel } from "../../../redux/actions";
import { Article } from '../../../redux/reducers';

// 操作模态框
export const useOperateModal = (dispatch: any) => {
  // 记录模态框显示状态
  const [visible, setVisible] = useState(false);
  // 模态框当前实例内容
  const [curItem, setItem] = useState(Object);

  const showModal = (item: Article) => {
    dispatch(setWheel(true)) // 将滚动监听关闭
    setItem(item);
    setVisible(true);
  };

  const hideModal = () => {
    dispatch(setWheel(false)) // 将滚动监听开启
    setVisible(false);
  };
  return [curItem, visible, showModal, hideModal] as const;
};

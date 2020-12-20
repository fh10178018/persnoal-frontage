import { PAGE_IS_FINISH, PAGE_IS_LOADING, SET_CURSOUR, SET_PAGE, CLIENT_IS_PC } from './actions'

const init = {
  isLoading: true,
  cursour: 'pointer',
  curPage: 0,
  pageList: ['主页', '关于我', '我的简历', '我的能力', '我的日志', '联系我'],
  isPC: true
}
const reducers = (state = init, action: any) => {
  switch (action.type) {
    case PAGE_IS_FINISH:
      return { ...state, isLoading: false }
    case PAGE_IS_LOADING:
      return { ...state, isLoading: true }
    case SET_CURSOUR:
      return { ...state, cursour: action.data }
    case SET_PAGE:
      return { ...state, curPage: action.data }
    case CLIENT_IS_PC:
      return { ...state, isPC: action.data }
    default:
      return state
  }
}

export default reducers
export type RootState = ReturnType<typeof reducers>
export const PAGE_IS_LOADING = 'page_is_loading'
export const PAGE_IS_FINISH = 'page_is_finish'
export const SET_CURSOUR = 'set_cursour'
export const SET_PAGE = 'set_page'
export const CLIENT_IS_PC = 'CLIENT_IS_PC'

export const setLoading = (val: boolean) => {
  if (val) return { type: PAGE_IS_LOADING }
  else return { type: PAGE_IS_FINISH }
}

export const setCursour = (val: string) => {
  return { type: SET_CURSOUR, data: val }
}

export const setPage = (val: number) => { // 页数操控，true为down ，false为up
  return { type: SET_PAGE, data: val }
}

export const setClient = () => { // 判断页面是否为PC，是为false
  const userAgentInfo = navigator.userAgent;
  const Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  let flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return { type: CLIENT_IS_PC, data: flag }
}
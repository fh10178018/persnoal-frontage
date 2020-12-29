import { MiddlewareAPI } from 'redux'
import { Api } from './api'
import { setBlogList, setCodeSkills, setDesignSkills, setExperience, setHtmlLoading, setIntroduction, setProgress, setResumes } from './redux/actions'
export const LoadProcedure = (store: MiddlewareAPI) => {
  const dispatch = store.dispatch
  // 用于判断页面是否加载完毕
  dispatch(setHtmlLoading(true))
  window.onload = function () {
    dispatch(setProgress(1))
    Api({
      url: "/blog/getBlogList",
      method: 'POST',
      data: { page: 1, rows: 4, type: '' }
    }).then((val) => {
      dispatch(setProgress(2))
      dispatch(setBlogList(val))
      Api({
        method: 'get',
        url: '/resumes/getNewResumes'
      }).then((res: any) => {
        dispatch(setResumes(res))
        dispatch(setProgress(3))
        Api({
          method: 'get',
          url: '/resumes/getExperience'
        }).then((res: any) => {
          dispatch(setExperience(res))
          dispatch(setProgress(4))
          Api({
            method: 'get',
            url: '/resumes/getIntroduction'
          }).then((res: any) => {
            dispatch(setIntroduction(res))
            dispatch(setProgress(5))
            Api({
              method: 'get',
              url: '/resumes/getDesignSkills'
            }).then((res: any) => {
              dispatch(setDesignSkills(res))
              dispatch(setProgress(6))
              Api({
                method: 'get',
                url: '/resumes/getCodeSkills'
              }).then((res: any) => {
                dispatch(setProgress(7))
                dispatch(setHtmlLoading(false))
                dispatch(setCodeSkills(res))
              })
            })
          })
        })
      })
    })
  }
}
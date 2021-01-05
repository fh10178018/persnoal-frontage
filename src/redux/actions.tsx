export const SET_CURSOUR = 'set_cursour'
export const SET_PAGE = 'set_page'
export const CLIENT_IS_PC = 'client_is_pc'
export const SET_PAGE_ACTION = 'set_page_action'
export const SET_WHEEL = 'set_wheel'
export const SET_BLOG_LIST = 'set_blog_list'
export const SET_PAGE_LOADING = 'set_page_loading'
export const SET_BLOG_LOADING = 'set_blog_loading'
export const SET_RESUMES = "set_resumes"
export const SET_DESIGN_SKILLS = "set_design_skills"
export const SET_CODE_SKILLS = "set_code_skills"
export const SET_INTRODUCTION = "set_introduction"
export const SET_EXPERIENCE = "set_experience"
export const SET_PROGRESS_NUM = "set_progress_num"
export const SET_IMAGE_LOADED = "set_image_loaded"
export const SET_SWITCH_RECORD = "set_switch_record"


export const setHtmlLoading = (val: boolean) => {
  return { type: SET_PAGE_LOADING, data: val }
}

export const setImageLoaded = () => {
  return { type: SET_IMAGE_LOADED }
}

export const setCursour = (val: string) => {
  return { type: SET_CURSOUR, data: val }
}

export const setPage = (val: number) => { // 页数操控，true为down ，false为up
  return { type: SET_PAGE, data: val }
}

export const setPageAction = (val: boolean) => {
  return { type: SET_PAGE_ACTION, data: val }
}

export const setWheel = (val: boolean) => {
  return { type: SET_WHEEL, data: val }
}

export const setProgress = (val: number) => {
  return { type: SET_PROGRESS_NUM, data: val }
}

export const setSwitchRecord = (val: string) => {
  return { type: SET_SWITCH_RECORD, data: val }
}

type ResumesType = {
  email: string,
  tel: string,
  address: string,
  weixinImageUrl: string,
  qqImageUrl: string,
  csdnUrl: string,
}

export const setResumes = (val: ResumesType) => {
  return { type: SET_RESUMES, data: val }
}

export type CodeSkillsType = {
  name: string,
  percent: number
}
export const setCodeSkills = (val: CodeSkillsType[]) => {
  return { type: SET_CODE_SKILLS, data: val }
}
export type DesignSkillsType = {
  name: string,
  percent: number
}
export const setDesignSkills = (val: DesignSkillsType[]) => {
  return { type: SET_DESIGN_SKILLS, data: val }
}

export type IntroductionType = {
  content: string
}
export const setIntroduction = (val: IntroductionType[]) => {
  return { type: SET_INTRODUCTION, data: val }
}

export type ExperienceType = {
  title: string,
  content: string
}

export const setExperience = (val: ExperienceType[]) => {
  return { type: SET_EXPERIENCE, data: val }
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

export const setBlogLoading = (val: boolean) => {
  return { type: SET_BLOG_LOADING, data: val }
}

export const setBlogList = (val: any) => {
  return { type: SET_BLOG_LIST, data: val }
}
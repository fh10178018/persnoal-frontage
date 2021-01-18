import {
  SET_CURSOUR,
  SET_PAGE,
  CLIENT_IS_PC,
  SET_PAGE_ACTION,
  SET_WHEEL,
  SET_BLOG_LOADING,
  SET_BLOG_LIST,
  SET_PAGE_LOADING,
  SET_RESUMES,
  SET_CODE_SKILLS,
  SET_DESIGN_SKILLS,
  SET_EXPERIENCE,
  SET_INTRODUCTION,
  SET_PROGRESS_NUM,
  SET_IMAGE_LOADED,
  SET_SWITCH_RECORD,
  SET_AROUND_STATE
} from './actions'
import React from 'react'
import {
  HomeOutlined,
  SolutionOutlined,
  BookOutlined,
  MessageOutlined,
  UserOutlined,
  BulbOutlined
} from '@ant-design/icons';

import Introduction from "../components/content/Introduction"
import MyPower from "../components/content/MyPower"
import MyResumes from "../components/content/MyResumes"
import Contacts from "../components/content/Contacts"
import Blog from "../components/content/Blog"

const init = {
  htmlIsLoading: true,
  blogIsLoading: false,
  cursour: 'pointer',
  curPage: 0,
  aroundState: 0,
  pageList: [
    { name: '主页', component: <Introduction page={0} />, icon: <HomeOutlined /> },
    { name: '关于我', component: <Introduction page={1} />, icon: <UserOutlined /> },
    { name: '我的简历', component: <MyResumes />, icon: <SolutionOutlined /> },
    { name: '我的能力', component: <MyPower />, icon: <BulbOutlined /> },
    { name: '我的作品', component: <Blog />, icon: <BookOutlined /> },
    { name: '联系我', component: <Contacts />, icon: <MessageOutlined /> }
  ],
  loadingProgress: ['页面初始化中', '获取日志列表信息', '获取最新简历页内容信息', '获取经验&学习列表信息', '获取介绍列表信息', '获取设计能力列表信息', '获取编程能力列表信息', '加载完毕'],
  progressNum: 0,
  pageAction: true, // true为下一页或下几页操作，false为相反
  isPC: true,
  wheelIsClose: false,
  resumes: {},
  codeSkills: [],
  designSkills: [],
  introduction: [],
  experience: [],
  articles: {},
  imageLoaded: 0,
  switchRecord: 'loading-0'// 页面加载记录，loading到0页面，0-1:0页面到1页面
}
const reducers = (state = init, action: any) => {
  switch (action.type) {
    case SET_CURSOUR:
      return { ...state, cursour: action.data }
    case SET_PAGE:
      return { ...state, curPage: action.data }
    case CLIENT_IS_PC:
      return { ...state, isPC: action.data }
    case SET_PAGE_ACTION:
      return { ...state, pageAction: action.data }
    case SET_WHEEL:
      return { ...state, wheelIsClose: action.data }
    case SET_BLOG_LOADING:
      return { ...state, blogIsLoading: action.data }
    case SET_BLOG_LIST:
      return { ...state, articles: action.data }
    case SET_PAGE_LOADING:
      return { ...state, htmlIsLoading: action.data }
    case SET_RESUMES:
      return { ...state, resumes: action.data }
    case SET_CODE_SKILLS:
      return { ...state, codeSkills: action.data }
    case SET_INTRODUCTION:
      return { ...state, introduction: action.data }
    case SET_DESIGN_SKILLS:
      return { ...state, designSkills: action.data }
    case SET_EXPERIENCE:
      return { ...state, experience: action.data }
    case SET_PROGRESS_NUM:
      return { ...state, progressNum: action.data }
    case SET_IMAGE_LOADED:
      return { ...state, imageLoaded: state.imageLoaded + 1 }
    case SET_SWITCH_RECORD:
      return { ...state, switchRecord: action.data }
    case SET_AROUND_STATE:
      return { ...state, aroundState: action.data }
    default:
      return state
  }
}

export default reducers
export type RootState = ReturnType<typeof reducers>
export interface Article {
  title: string,
  types: string[],
  content: string,
  imageUrl: string,
  _id: string,
  introduction: string,
  creatTime: number,
  editTime: number,
  viewNums: number,
  likeNums: number,
  __v: number
}
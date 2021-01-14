import React, { useEffect, useState } from 'react'
import Wrap from './page';
import zhCN from 'antd/lib/locale/zh_CN'; // 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'antd/dist/antd.css';
import './css/animations.css';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux'
import { RootState } from './redux/reducers'
import Loading from './page/Loading/Loading';
import Mouse from './page/Mouse';
import Footer from './components/content/Footer';
import GlobalFonts from './fonts'
function App() {
  const isLoading = useSelector((state: RootState) => state.htmlIsLoading);
  const [pageIsDelete, setPageIsDelete] = useState(isLoading)
  useEffect(() => {
    let timer = NaN
    if (!isLoading) {
      timer = setTimeout(() => {
        setPageIsDelete(false)
      }, 550)
    } else {
      setPageIsDelete(true)
    }
    return () => { clearTimeout(timer) }
  }, [isLoading])
  return (
    <ConfigProvider locale={zhCN}>
      <GlobalFonts />
      {
        pageIsDelete ? (<Loading />) : ''
      }
      <div className="App" >
        <Wrap />
        <Mouse />
        <Footer />
      </div>
    </ConfigProvider >
  )
}

export default App;

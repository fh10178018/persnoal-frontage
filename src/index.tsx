import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store'
import { setLoading, setClient } from './redux/actions'
import { ThemeProvider } from 'styled-components'

const theme = {
  primary: "#c14652",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// 用于判断页面是否加载完毕
window.onload = function () {
  store.dispatch(setLoading(false))
}
store.dispatch(setClient())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

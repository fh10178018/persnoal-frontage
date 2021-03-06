import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store'
import { setClient, setHtmlLoading } from './redux/actions'
import { ThemeProvider } from 'styled-components'
import GlobalFonts from './fonts'

const theme = {
  primary: "#c14652",
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalFonts />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

window.onload = function () {
  const loading = document.getElementById('loading')
  loading && document.body.removeChild(loading)
}

store.dispatch(setHtmlLoading(true))

store.dispatch(setClient())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

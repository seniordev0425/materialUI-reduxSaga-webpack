import "regenerator-runtime/runtime"
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from '@/routes'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { I18nextProvider } from "react-i18next"
import i18n from "@/i18n"

import axios from 'axios'

import { MuiThemeProvider } from '@material-ui/core/styles'
import { THEME } from '@/theme'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import createStore from '@/store'
import { selectAccessToken } from '@/store/modules/auth/selectors'

const { store, persistor } = createStore()
const history = createBrowserHistory()

/* Set up axios request interceptor for adding authorization header */
axios.interceptors.request.use((config) => {
  const token = selectAccessToken(store.getState())
  config.headers['Authorization'] = token ? `Bearer ${token}` : 'Bearer Guest'
  return config
})

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <MuiThemeProvider theme={THEME}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    </MuiThemeProvider>
  </I18nextProvider>,
  document.getElementById('app')
);

module.hot.accept();

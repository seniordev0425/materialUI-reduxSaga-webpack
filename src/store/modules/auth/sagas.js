import { takeLatest, put, call } from 'redux-saga/effects'

import { AuthTypes } from './actions'

import { apiCallSaga } from '@/utils/apiCall'
import { LOGIN_QUERY_PARAMS } from '@/services/authService'

function* checkUser(action) {
  
}

function* login(action) {
  const { variables } = action
  const payload = {
    query: LOGIN_QUERY_PARAMS,
    variables
  }
  yield call(apiCallSaga, { 
    payload,
    actionType: AuthTypes.LOGIN,
    onSuccess: (data) => {
      console.log('login Success', data)
    },
    onFailed: () => {}
   })
}

export const saga = function* () {
  yield takeLatest(AuthTypes.CHECK_USER, checkUser)
  yield takeLatest(AuthTypes.LOGIN, login)
}
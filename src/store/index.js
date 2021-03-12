import { all } from 'redux-saga/effects'
import { combineReducers } from 'redux'
import storeConfig from './storeConfig'

import { reducer as apiLoopStateReducer } from './modules/apiLoopState'
import { reducer as authReducer, saga as authSaga } from './modules/auth'

export default () => {
  const appReducer = combineReducers({
    auth: authReducer,
    apiLoopState: apiLoopStateReducer
  })

  return storeConfig(appReducer, function* rootSaga() {
    yield all([
      authSaga()
    ])
  })
}





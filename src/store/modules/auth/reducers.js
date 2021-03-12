import { createReducer } from 'reduxsauce'

import { INITIAL_STATE } from './initialState'
import { AuthTypes } from './actions'

export const loginSuccess = (state, { data }) => {
  return {
    ...state,
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    user: data.user
  }
}

export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.LOGIN_SUCCESS]: loginSuccess
})
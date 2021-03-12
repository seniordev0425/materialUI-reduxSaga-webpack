import { createReducer } from 'reduxsauce'

import { INITIAL_STATE } from './initialState'
import { ApiLoopStateTypes } from './actions'

export const apiStart = (state, { actionType }) => {
  return {
    ...state,
    [`${actionType}_REQUEST`]: true
  }
}

export const apiEnd = (state, { actionType }) => {
  return {
    ...state,
    [`${actionType}_REQUEST`]: false
  }
}

export const apiSuccess = (state, { actionType }) => {
  return {
    ...state,
    [`${actionType}_SUCCESS`]: true
  }
}

export const apiFailed = (state, { actionType }) => {
  return {
    ...state,
    [`${actionType}_FAILED`]: true
  }
}

export const reducer = createReducer(INITIAL_STATE, {
  [ApiLoopStateTypes.API_START]: apiStart,
  [ApiLoopStateTypes.API_END]: apiEnd,
  [ApiLoopStateTypes.API_SUCCESS]: apiSuccess,
  [ApiLoopStateTypes.API_FAILED]: apiFailed
})
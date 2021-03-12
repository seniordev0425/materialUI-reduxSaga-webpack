import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { API_URL } from '@/constants/env'
import ApiLoopStateActions from '@/store/modules/apiLoopState/actions'

export const HttpMethods = {
  POST: 'post',
  GET: 'get',
}

export const toFormData = (object) => {
  const keys = Object.getOwnPropertyNames(object)
  const formData = new FormData()
  keys.map(key => {
    formData.append(key, object[key])
  })
  return formData
}

const getRequestPayload = (payload, contentType, method = HttpMethods.POST) => {
  let requestPayload
  if (method === HttpMethods.GET) {
    requestPayload = { params: payload }
  } else if (method === HttpMethods.POST) {
    if (contentType === 'application/x-www-form-urlencoded') {
      requestPayload = { data: toFormData(payload) }
    } else {
      requestPayload = { data: payload }
    }
  }

  return requestPayload
}

const getAxiosConfig = (requestPayload, method, contentType, merchantId, storeId) => {
  return {
    baseURL: API_URL,
    method,
    headers: {
      'content-type': contentType || 'application/json',
      'x-myda-merchant': merchantId,
      'x-myda-store': storeId,
    },
    ...requestPayload,
  }
}

export function* apiCallSaga(data) {
  const { 
    payload, 
    contentType, 
    merchantId, 
    storeId,
    actionType,
    onSuccess,
    onFailed 
  } = data

  const requestPayload = getRequestPayload(payload, contentType)
  const config = getAxiosConfig(
    requestPayload,
    HttpMethods.POST,
    contentType,
    merchantId,
    storeId
  )
  try {
    yield put(ApiLoopStateActions.apiStart(actionType))
    
    const response = yield call(axios, config)
    onSuccess(response.data)
    yield put(ApiLoopStateActions.apiSuccess(actionType))
    console.log(response)

  } catch (e) {
    console.log('apiCallSagaError', e)
    yield put(ApiLoopStateActions.apiFailed(actionType))
    
    onFailed(e)
  } finally {
    yield put(ApiLoopStateActions.apiEnd(actionType))
  }
  
}
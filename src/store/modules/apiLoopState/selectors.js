export const selectIsApiProgress = (state, actionType) => state.apiLoopState[`${actionType}_REQUEST`]
export const selectHasApiSucceed = (state, actionType) => state.apiLoopState[`${actionType}_SUCCESS`]
export const selectHasApiFailed = (state, actionType) => state.apiLoopState[`${actionType}_FAILED`]
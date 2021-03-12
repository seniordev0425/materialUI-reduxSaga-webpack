import { createSelector } from 'reselect'

export const selectAuth = state => state.auth

export const selectCurrentUser = createSelector(selectAuth, auth => auth.user)
export const selectAccessToken = createSelector(selectAuth, auth => auth.accessToken)
export const selectRefreshToken = createSelector(selectAuth, auth => auth.refreshToken)
export const selectUserIsLoggedIn = createSelector(selectAccessToken, accessToken => accessToken ? true : false)
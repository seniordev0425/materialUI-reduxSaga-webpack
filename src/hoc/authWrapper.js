import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import { selectUserIsLoggedIn } from '@/store/modules/auth/selectors'

export const userIsLoggedIn = connectedRouterRedirect({
  redirectPath: '/login',
  allowRedirectBack: true,
  authenticatedSelector: selectUserIsLoggedIn,
  wrapperDisplayName: 'userIsLoggedIn'
})

export const userIsNotLoggedIn = connectedRouterRedirect({
  redirectPath: '/',
  allowRedirectBack: false,
  authenticatedSelector: state => !selectUserIsLoggedIn(state),
  wrapperDisplayName: 'userIsNotLoggedIn'
})

import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  checkUser: ['email'],
  login: ['variables'],
  loginSuccess: ['data']
})

export const AuthTypes = Types
export default Creators
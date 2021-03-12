
import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  apiStart: ['actionType'],
  apiEnd: ['actionType'],
  apiSuccess: ['actionType'],
  apiFailed: ['actionType']
})

export const ApiLoopStateTypes = Types
export default Creators
import { combineReducers } from 'redux'

import auth from './auth'
import user from './user'
import child from './child'
export default combineReducers({ auth, user, child })

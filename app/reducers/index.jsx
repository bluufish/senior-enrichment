import { combineReducers } from 'redux'
import students from './studentReducer'
import campuses from './campusReducer'

export default combineReducers({students,campuses})




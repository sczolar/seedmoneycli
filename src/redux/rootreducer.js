import reducer from './reducer'
import {combineReducers} from 'redux'

const rootreducer = combineReducers({
    data:reducer
})

export default rootreducer
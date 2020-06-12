import { createStore, applyMiddleware, compose } from 'redux'
import usersReducer from './Reducer'
import thunk from 'redux-thunk'

const Store = createStore(usersReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default Store
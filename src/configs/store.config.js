import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from '../reducers'
import rootSagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const configureStore = () => {
  let enhancers

  if (__DEV__) {
    // development env - enable dev tools
    /* eslint-disable import/no-extraneous-dependencies */
    const composeWithDevTools = require('redux-devtools-extension')
      .composeWithDevTools
    /* eslint-enable import/no-extraneous-dependencies */

    enhancers = composeWithDevTools(applyMiddleware(...middlewares))
  } else {
    // production env - exclude dev tools
    enhancers = compose(applyMiddleware(...middlewares))
  }

  const store = createStore(rootReducers, enhancers)

  sagaMiddleware.run(rootSagas)
  return store
}

export default configureStore()

import React from 'react'
import {render} from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Home from '../pages/containers/home'
import reducer from '../reducers/index'
import { Map as map } from 'immutable'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


// Construccion de un middleware
// function logger({dispatch,getState}){
//   return (next) => {
//     return (action) => {
//       console.log('vamos a enviar ésta acción', action);
//       const value = next(action)
//       console.log('Éste es mi nuevo estado', getState().toJS());
//       return value
//     }
//   }
// }

// const logger = ({dispatch,getState}) => next => action =>{
//   console.log('Éste es mi viejo estado', getState().toJS());
//   console.log('vamos a enviar ésta acción', action);
//   const value = next(action)
//   console.log('Éste es mi nuevo estado', getState().toJS());
//   return value
// }
const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
)

const homeContainer = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer)

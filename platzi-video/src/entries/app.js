import React, {Fragment} from 'react'
import {render} from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Videos from '../pages/containers/videos'
import reducer from '../reducers/index'
import { Map as map } from 'immutable'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from '../pages/components/header'
import Home from '../pages/components/home'
import NotFound from '../pages/components/not-found'


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
  <BrowserRouter>
    <Provider store={store}>
      <Fragment>
        <Header/>{/*Como hacer para que éste componente utilice history o location si no está
                  renderizado dentro de un Route?  */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/videos" component={Videos}/>
          <Redirect from='/v' to='/videos' />
          <Route component={NotFound}/>
          {/* Un aporte menor. No olvidar poner siempre la ruta de NotFound de
          ultima porque si se pone por encima de los Redirects estos no van
          a hacer el redireccionamiento. */}
        </Switch>
        {/* Switch solo renderiza el primer componente que haga match con la ruta
        que yo esté designando */}
      </Fragment>
    </Provider>
  </BrowserRouter>
  , homeContainer)

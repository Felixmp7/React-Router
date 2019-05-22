import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppServer from '../pages/containers/app-server'

const homeContainer = document.getElementById('home-container')

render(
  <BrowserRouter>
    <AppServer />
  </BrowserRouter>
  , homeContainer)

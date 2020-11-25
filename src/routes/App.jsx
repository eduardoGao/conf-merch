import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Checkout from '../containers/Checkout'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'

const Routes = () => {
  return (
      <Switch>
        <Route exact path="/:id" component={App} />
      </Switch>
  )
}

export default Routes
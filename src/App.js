import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './components/UI'

import { Main } from './views'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

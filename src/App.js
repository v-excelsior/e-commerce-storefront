import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './components/UI'

import routes from './routes'

const App = () => {
  return (
    <div className='app'>
      <Router>
      <Header />
        <div className='container'>
          <Switch>
            {
              routes.map((route, i) => {
                return (
                  <Route exact path={ route.path } key={ i }>
                    { React.createElement(route.component) }
                  </Route>
                )
              })
            }
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App

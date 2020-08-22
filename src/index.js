import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import history from './utils/history'
import * as serviceWorker from './serviceWorker'
import 'antd/dist/antd.less'

const App = () => {
  return <Router history={history}>{renderRoutes(routes)}</Router>
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

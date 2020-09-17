import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import axios from 'axios'
import { Spin } from 'antd'
import routes from './routes'
import history from './utils/history'
import { store, persistor } from './redux'
import * as serviceWorker from './serviceWorker'
import 'antd/dist/antd.less'

axios.defaults.baseURL =
  'https://europe-west3-belly-buddy-bf3e1.cloudfunctions.net/api'
// axios.defaults.baseURL =
//   'http://localhost:5001/belly-buddy-bf3e1/europe-west3/api'

axios.defaults.headers['Content-Type'] = 'application/json'

const App = () => {
  return <Router history={history}>{renderRoutes(routes)}</Router>
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spin size="large" />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

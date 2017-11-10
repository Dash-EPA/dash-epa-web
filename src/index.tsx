import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Debug from 'debug'
// import registerServiceWorker from './registerServiceWorker';
import { App } from './App/App'
import './index.css'

const debug = Debug('App:Index')

debug('It begins')

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
)
// registerServiceWorker();

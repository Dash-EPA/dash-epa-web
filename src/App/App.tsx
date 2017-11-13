import * as React from 'react'
import './App.css'
import * as Debug from 'debug'
import Perspective from './Sections/Perspective/Perspective'

const debug = Debug('App')

interface AppState {
  loadProgress: number
  loaded: boolean
  currentSection: string | null
}

export class App extends React.Component<{}, AppState> {

  constructor (props: {}) {
    super(props)
    debug('app constructor')
    this.state = {
      loaded: false,
      loadProgress: 0,
      currentSection: null
    }
  }

  render () {
    return (
      <div className="app">
        <Menu>

        </Menu>
        <Content>
          <Perspective />
        </Content>
      </div>
    )
  }
}
import * as React from 'react'
import * as Debug from 'debug'

const debug = Debug('App:Section')

interface SectionProps {
  onActivated: () => void
}

interface SectionState {

}

export default class Section extends React.Component<SectionProps, SectionState> {

  componentWillMount () {
    debug('Section component will mount')
  }

  render () {
    return (
      <div className="section">
        {this.props.children}
      </div>
    )
  }
}

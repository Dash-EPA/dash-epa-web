import * as React from 'react'
import Section from '../Section'
import './Perspective.css'
import * as Debug from 'debug'

const debug = Debug('Perspective')

export default class Perspective extends React.PureComponent {

    constructor(props: {}) {
        super(props)
        this.handleActivation = this.handleActivation.bind(this)
    }

    handleActivation() {
        debug('handle activation')
    }

    render() {
        return (
            <Section onActivated={this.handleActivation}>
                Perspective
            </Section>
        )
    }
}
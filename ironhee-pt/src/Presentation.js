import React, { Component } from 'react'
import radium from 'radium'
import Slide from './Slide'

class Presentation extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='ironhee-pt__presentation'>
        { children }
      </div>
    )
  }
}

Presentation.propTypes = {
  children: React.PropTypes.arrayOf(Slide)
}

export default radium(Presentation)

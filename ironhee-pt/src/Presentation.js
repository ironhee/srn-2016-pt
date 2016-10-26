import React, { Component } from 'react'
import Radium from 'radium'

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

export default Radium(Presentation)

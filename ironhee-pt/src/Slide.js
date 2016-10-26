import React, { Component } from 'react'
import Radium from 'radium'

class Slide extends Component {
  render () {
    return (
      <div className='ironhee-pt__slide'>
        { this.props.children }
      </div>
    )
  }
}

export default Radium(Slide)

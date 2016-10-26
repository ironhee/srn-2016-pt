import React, { Component } from 'react'
import Radium from 'radium'

class Slide extends Component {
  render () {
    const { isActive, style } = this.props

    return (
      <div
        className='ironhee-pt__slide'
        style={[
          styles.base,
          styles[style],
          ...isActive ? [] : [styles.inactive]
        ]}
      >
        { this.props.children }
      </div>
    )
  }
}

export default Radium(Slide)

const styles = {
  base: {
    width: '100%',
    height: '100%'
  },
  simple: {
    background: 'grey'
  },
  // status
  inactive: {
    display: 'none'
  }
}

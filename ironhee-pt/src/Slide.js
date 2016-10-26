import React from 'react'
import Radium from 'radium'

const Slide = ({ children, isActive }, { style }) => (
  <div
    className='ironhee-pt__slide'
    style={[
      styles.base,
      styles[style],
      ...isActive ? [] : [styles.inactive]
    ]}
  >
    { children }
  </div>
)

Slide.propTypes = {
  isActive: React.PropTypes.bool
}

Slide.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(Slide)

const styles = {
  base: {
    width: '100%',
    height: '100%'
  },
  simple: {
    background: '#eee'
  },
  // status
  inactive: {
    display: 'none'
  }
}

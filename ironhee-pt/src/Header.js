import React from 'react'
import Radium from 'radium'

const Slide = ({ children }, { style }) => (
  <h1
    className='ironhee-pt__title'
    style={[
      styles.base,
      styles[style]
    ]}
  >
    { children }
  </h1>
)

Slide.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(Slide)

const styles = {
  base: {
    margin: 0,
    padding: 0
  },
  simple: {
    margin: '0 20px',
    padding: 0,
    fontSize: '5em',
    fontFamilly: 'helvetica',
    borderBottom: '1px solid #555'
  }
}

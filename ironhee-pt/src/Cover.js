import React from 'react'
import Radium from 'radium'

const Cover = ({ children }, { style }) => (
  <h1
    className='ironhee-pt__cover'
    style={[
      styles.base,
      styles[style]
    ]}
  >
    { children }
  </h1>
)

Cover.contextTypes = {
  style: React.PropTypes.string.isRequired
}

export default Radium(Cover)

const styles = {
  base: {
    margin: 0,
    padding: 0
  },
  simple: {
    position: 'absolute',
    top: 'calc(50% - 40px)',
    width: '100%',
    textAlign: 'center',
    padding: 0,
    fontSize: '80px',
    fontFamilly: 'helvetica'
  }
}

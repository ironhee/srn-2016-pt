import React, { Component } from 'react'
import Radium from 'radium'

class Presentation extends Component {
  render () {
    const { children, slide, style = 'simple' } = this.props

    return (
      <div
        className='ironhee-pt__presentation'
        style={[
          styles.base,
          styles[style]
        ]}
      >
        { children ? children.map((child, index) =>
          <child.type
            key={index}
            {...child.props}
            style={style}
            isActive={slide === index}
          />
        ) : null }
      </div>
    )
  }
}

Presentation.defaultProps = {
  slide: 0
}

export default Radium(Presentation)

const styles = {
  base: {
    width: '100%',
    height: '100%'
  },
  simple: {}
}

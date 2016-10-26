import React, { Component } from 'react'
import Radium from 'radium'
import fp from 'lodash/fp'
import assert from 'assert'

class Controller extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slide: props.defaultSlide || 0,
      style: props.defaultStyle || 'simple',
      slideLength: props.children.props.children.length
    }
    this.onNextSlide = this.onNextSlide.bind(this)
    this.onPrevSlide = this.onPrevSlide.bind(this)
  }

  selectSlide (slide) {
    const { slideLength } = this.state
    assert(fp.isInteger(slide))
    assert(slide >= 0 || slide < slideLength, `slide out of range (should 0 <= slide < ${slideLength})`)
    this.setState({ slide })
  }

  onNextSlide () {
    const { slide, slideLength } = this.state
    const nextSlide = slide + 1
    if (nextSlide < slideLength) {
      this.selectSlide(nextSlide)
    }
  }

  onPrevSlide () {
    const { slide } = this.state
    const prevSlide = slide - 1
    if (prevSlide >= 0) {
      this.selectSlide(prevSlide)
    }
  }

  render () {
    const { children } = this.props
    const { slide, slideLength, style } = this.state

    return (
      <div
        className='ironhee-pt__controller'
        style={controllerStyle}
      >
        <children.type
          {...children.props}
          slide={slide}
          style={style}
        />
        <div
          className='ironhee-pt__controller__overlay'
          style={overlayStyle}
        >
          <span
            style={prevButtonStyles.base}
            onClick={this.onPrevSlide}
          >
            prev
          </span>
          <span
            style={nextButtonStyles.base}
            onClick={this.onNextSlide}
          >
            next
          </span>
          <div
            style={indexStyle.base}
          >
            { slide + 1 } / { slideLength }
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(Controller)

const controllerStyle = {
  width: '100%',
  height: '100%',
  position: 'relative'
}

const overlayStyle = {
  top: 0,
  left: 0,
  position: 'absolute',
  width: '100%',
  height: '100%'
}

const prevButtonStyles = {
  base: {
    top: '50%',
    left: 0,
    position: 'absolute'
  }
}

const nextButtonStyles = {
  base: {
    top: '50%',
    right: 0,
    position: 'absolute'
  }
}

const indexStyle = {
  base: {
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    position: 'absolute'
  }
}

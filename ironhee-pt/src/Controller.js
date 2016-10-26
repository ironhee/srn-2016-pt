import React, { Component } from 'react'
import Radium from 'radium'
import fp from 'lodash/fp'
import assert from 'assert'

class Controller extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: props.defaultSlide || 0,
      style: props.defaultStyle || 'simple',
      slideLength: props.children.props.children.length
    }
    this.onNextSlide = this.onNextSlide.bind(this)
    this.onPrevSlide = this.onPrevSlide.bind(this)
  }

  getChildContext () {
    return {
      style: this.state.style,
      slideIndex: this.state.slideIndex
    }
  }

  selectSlide (slideIndex) {
    const { slideLength } = this.state
    assert(fp.isInteger(slideIndex))
    assert(slideIndex >= 0 || slideIndex < slideLength, `slide out of range (should 0 <= slide < ${slideLength})`)
    this.setState({ slideIndex })
  }

  onNextSlide () {
    const { slideIndex, slideLength } = this.state
    const nextSlide = slideIndex + 1
    if (nextSlide < slideLength) {
      this.selectSlide(nextSlide)
    }
  }

  onPrevSlide () {
    const { slideIndex } = this.state
    const prevSlide = slideIndex - 1
    if (prevSlide >= 0) {
      this.selectSlide(prevSlide)
    }
  }

  render () {
    const { children } = this.props
    const { slideIndex, slideLength, style } = this.state

    return (
      <div
        className='ironhee-pt__controller'
        style={controllerStyle}
      >
        <children.type
          {...children.props}
          slideIndex={slideIndex}
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
            { slideIndex + 1 } / { slideLength }
          </div>
        </div>
      </div>
    )
  }
}

Controller.propTypes = {
  defaultSlide: React.PropTypes.number,
  defaultStyle: React.PropTypes.string
}

Controller.childContextTypes = {
  style: React.PropTypes.string.isRequired,
  slideIndex: React.PropTypes.number.isRequired
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

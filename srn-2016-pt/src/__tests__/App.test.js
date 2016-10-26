import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

it('renders', () => {
  renderer.create(
    <App />
  )
})

import React from 'react'
import renderer from 'react-test-renderer'
import Slide from '../Slide'

it('renders', () => {
  const component = renderer.create(
    <Slide />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

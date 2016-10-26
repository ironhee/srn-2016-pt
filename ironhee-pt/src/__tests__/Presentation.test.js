import React from 'react'
import renderer from 'react-test-renderer'
import Presentation from '../Presentation'
import Slide from '../Slide'

it('renders', () => {
  const component = renderer.create(
    <Presentation />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders with slides', () => {
  const component = renderer.create(
    <Presentation>
      <Slide />
      <Slide />
    </Presentation>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

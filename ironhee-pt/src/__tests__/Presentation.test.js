import React from 'react'
import renderer from 'react-test-renderer'
import Controller from '../Controller'
import Presentation from '../Presentation'
import Slide from '../Slide'

it('renders', () => {
  const component = renderer.create(
    <Controller>
      <Presentation>
        <Slide />
        <Slide />
      </Presentation>
    </Controller>
  )
  const tree = component.toJSON()
  expect(tree.children.length).toBe(2)
})

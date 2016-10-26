import React from 'react'
import renderer from 'react-test-renderer'
import Controller from '../Controller'
import Presentation from '../Presentation'
import Slide from '../Slide'
import Header from '../Header'

it('renders', () => {
  renderer.create(
    <Controller>
      <Presentation>
        <Slide>
          <Header>hello world</Header>
        </Slide>
      </Presentation>
    </Controller>
  )
})

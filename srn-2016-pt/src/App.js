import React from 'react'
import './App.css'
import {
  Controller,
  Presentation,
  Slide,
  Cover,
  Header,
  Paragraph
} from '../../ironhee-pt'

const App = () => {
  const style = {
    width: window ? window.innerWidth : 0,
    height: window ? window.innerHeight : 0
  }

  return (
    <div
      className='App'
      style={style}
    >
      <Controller>
        <Presentation>
          <Slide>
            <Cover>Hello world!</Cover>
          </Slide>
          <Slide>
            <Header>Hello world!</Header>
            <Paragraph>
              This is the page 1
            </Paragraph>
          </Slide>
          <Slide>
            <Header>Bye world!</Header>
            <Paragraph>
              This is the page 2
            </Paragraph>
          </Slide>
        </Presentation>
      </Controller>
    </div>
  )
}

export default App

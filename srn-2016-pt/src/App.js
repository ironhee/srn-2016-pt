import React from 'react'
import {
  Controller,
  Presentation,
  Slide,
  Cover,
  H1,
  H2,
  P,
  Ul,
  Li
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
            <Cover>
              <H1>쓸데없이 발표 어렵게 하기</H1>
              <H2>2016 Sunrin Network Day - Ironhee</H2>
            </Cover>
          </Slide>
          <Slide>
            <H1>발표하기 위해 필요한 것</H1>
            <Ul>
              <Li>발표 도구</Li>
              <Li>발표 내용</Li>
            </Ul>
          </Slide>
          <Slide>
            <Cover>
              <H1>Q&A</H1>
            </Cover>
          </Slide>
          <Slide>
            <iframe
              style={{ width: '100%', height: '100%', border: 'none' }}
              src='http://tts-srn.herokuapp.com/#/c/ironhee-bot-test'
            />
          </Slide>
        </Presentation>
      </Controller>
    </div>
  )
}

export default App

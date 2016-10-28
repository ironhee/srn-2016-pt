import React from 'react'
import ReactDOM from 'react-dom'
import {
  Controller,
  Presentation,
  Slide,
  Cover,
  P,
  H1,
  H2,
  Ul,
  Li,
  Code,
  simple
} from 'ironpt'
import './index.css'

const app = (
  <div
    className='App'
    style={{
      width: window ? window.innerWidth : 0,
      height: window ? window.innerHeight : 0
    }}
  >
    <Controller>
      <Presentation style={simple}>
        <Slide>
          <Cover>
            <H1>Full Stack JS</H1>
            <H2>2016 Sunrin Network Day - Ironhee</H2>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <P>
              JS 는 Full Stack 개발자에게 정말 적합한 언어 & 생태계이다.
            </P>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <P>
              Front-end 는 Webpack, Babel, React, Redux, React-Router... 수많은 라이브러리 생태계가 활성화 되어 있다.
            </P>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <P>
              Back-end 또한 Node.js 기반으로
              Express, GraphQL-js, GraphQL-Relay-js, Sequelize... 수많은 라이브러리 생태계가 활성화 되어 있다.
            </P>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <Code language='js'>
              {`
import React from 'react'

const Todo = ({ todos }) => ({
  <div className="todo">
    <ul>
      {todos.map(todo => (
        <li>{ todo.name }</li>
      ))}
    </ul>
  </div>
})

export default Todo
              `.trim()}
            </Code>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <P style={{ textAlign: 'center' }}>노잼</P>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <P style={{ textAlign: 'center' }}>그냥 즐겁게 네트워킹 하면 안돼요?</P>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <P style={{ textAlign: 'center' }}>선린 종특</P>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <img
              style={{
                display: 'inline-block',
                height: 500,
                margin: 'auto'
              }}
              src={require('./idiot-but-great.jpg')}
              alt=''
            />
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <P style={{ textAlign: 'center' }}><strike>병신같지만</strike> 멋있게 발표하자!</P>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <H1>쓸데없이 발표 어렵게 하기</H1>
            <H2><strike>정병희 선생님 죄송합니다!</strike></H2>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <Ul>
              <Li><strike>발표 봇 만들어서 대신 발표하게 하기</strike></Li>
              <Li><strike>발표 안하고 Q&A만 하기</strike></Li>
              <Li>Q&A 봇 만들기</Li>
              <Li>발표 라이브러리 만들어서 그걸로 발표하기</Li>
            </Ul>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <H2><a href='http://tts-srn.herokuapp.com/'>Q&A 봇</a></H2>
            <P>
              Source code: <a href='https://github.com/ironhee/srn-tts'>
                https://github.com/ironhee/srn-tts
              </a>
            </P>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <H2><a href='https://ironhee.github.io/ironpt/'>발표 라이브러리</a></H2>
            <P>
              Source code: <a href='https://github.com/ironhee/ironpt'>
                https://github.com/ironhee/ironpt
              </a>
            </P>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <H2>느낀 점</H2>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <P style={{ textAlign: 'center' }}>재미있는<strike>병신같은</strike> 일이 제일 잘 된다.</P>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <H2>부추긴 사람</H2>
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <img
              style={{
                display: 'inline-block',
                height: 500,
                margin: 'auto'
              }}
              src={require('./ayun.png')}
              alt=''
            />
          </Cover>
        </Slide>

        <Slide>
          <Cover>
            <H1>Q&A</H1>
          </Cover>
        </Slide>

        <Slide>
          <iframe
            style={{ width: '100%', height: '100%', border: 'none' }}
            src='https://tts-srn.herokuapp.com/#/c/ironhee-bot-test'
          />
        </Slide>
      </Presentation>
    </Controller>
  </div>
)

ReactDOM.render(
  app,
  document.getElementById('root')
)

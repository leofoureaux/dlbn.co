import React from 'react'
import IndexPage from './index'

const messages = {
  tagline: {
    noun: 'I',
    verbs: ['build', 'travel', 'love', 'practice', 'am'],
    things: [
      {
        verb: 0,
        name: 'websites',
      },
      {
        verb: 0,
        name: 'web applications',
      },
      {
        verb: 1,
        name: 'the world',
      },
      {
        verb: 2,
        name: 'peanuts',
      },
      {
        verb: 2,
        name: 'bicycling',
      },
      {
        verb: 3,
        name: 'yoga',
      },
      {
        verb: 4,
        name: 'Mateus, nice to meet you',
      },
    ],
    button: `Let's talk!`
  },
  about: {
    title: 'About',
    description: (
      <div>
        <p className="lead">Software developer with a focus on front end.</p>
        <p>Currently based in Santiago, Chile</p>
      </div>
    ),
    tech: 'Tech I like to work with'
  },
  projects: [
    {
      title: 'tripby.org',
      url: 'https://tripby.org',
      description: 'Psychoactive drug info'
    },
  ]
}

export default (props) => <IndexPage messages={messages} locale='en'/>

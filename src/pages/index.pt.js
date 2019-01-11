import React from 'react'
import IndexPage from './index'

const messages = {
  tagline: {
    noun: 'Eu',
    verbs: ['crio', 'viajo', 'amo', 'pratico', 'sou'],
    things: [
      {
        verb: 0,
        name: 'websites',
      },
      {
        verb: 0,
        name: 'web apps',
      },
      {
        verb: 1,
        name: 'o mundo',
      },
      {
        verb: 2,
        name: 'amendoim',
      },
      {
        verb: 2,
        name: 'pedalar',
      },
      {
        verb: 3,
        name: 'yoga',
      },
      {
        verb: 4,
        name: 'Mateus, prazer em conhecê-lo',
      },
    ],
    button: 'Vamos conversar!'
  },
  about: {
    title: 'Sobre',
    description: (
      <div>
        <p className="lead">Desenvolvedor de software com foco em front end.</p>
        <p>Atualmente em Santiago, Chile</p>
      </div>
    ),
    tech: 'Tecnologias que gosto de usar'
  },
  projects: [
    {
      title: 'TRIPBY',
      url: 'https://tripby.org',
      description: 'Informações sobre psicoativos'
    },
  ]
}

export default (props) => <IndexPage messages={messages} locale='pt'/>

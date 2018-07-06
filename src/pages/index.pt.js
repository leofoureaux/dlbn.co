import React from 'react'
import IndexPage from './index'

const messages = {
  tagline: {
    title: 'Eu crio',
    services: [
      'websites', 'aplicativos web', 'belas interfaces'
    ],
    button: 'Vamos conversar!'
  },
  about: {
    title: 'Sobre',
    description: (
      <div>
        <p className="lead">Desenvolvedor front-end. Criador do <a href="http://tripby.org">tripby.org</a></p>
        <p>Eu amo tecnologia e como ela conduz a evolução humana. É animador fazer parte disto.</p>
        <p>Atualmente estou vivendo como nômade, mochilando pela América do Sul.</p>
      </div>
    ),
    tech: 'Tecnologias que gosto de usar'
  }
}

export default (props) => <IndexPage messages={messages} locale='pt'/>

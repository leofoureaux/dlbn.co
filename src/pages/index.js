import React from 'react'
import Typist from 'react-typist';
import Badges from '../components/Badges'

import 'react-typist/dist/Typist.css'

import twitterLogo from '../assets/img/social/twitter.svg'
import githubLogo from '../assets/img/social/github.svg'
import instagramLogo from '../assets/img/social/instagram.svg'
import linkedinLogo from '../assets/img/social/linkedin.svg'
import mediumLogo from '../assets/img/social/medium.svg'

class IndexPage extends React.Component {
  constructor() {
    super()
  }
  trackCta() {
    if (typeof window !== 'undefined' && window.ga) {
      window.ga('send', 'event', 'Contact', 'Click CTA to go to contact page')
    }
  }
  componentDidMount() {
    if (typeof window !== `undefined`) {
      if (window.location.pathname === '/') {
        if (navigator.language === 'pt-BR' || navigator.language === 'pt') {
          window.___history.replace('/pt/')
        } else {
          window.___history.replace('/en/')
        }
      }
    }
  }
  render() {
    const messages = this.props.messages
    if (messages) {
      return (
        <div>
          <section className="py-3 py-md-4">
            <div className="d-flex align-items-end">
              <h1>
                <Typist>
                  {messages.tagline.noun}&nbsp;
                  {/* <br className="d-md-none" /> */}
                  {messages.tagline.things.map((thing, index, arr) => {
                    const verb = messages.tagline.verbs[thing.verb]
                    let previousVerb
                    let nextVerb
                    if (index === 0) {
                      previousVerb = messages.tagline.verbs[arr[arr.length - 1].verb]
                      nextVerb = messages.tagline.verbs[arr[index + 1].verb]
                    } else if (index === arr.length - 1) {
                      previousVerb = messages.tagline.verbs[arr[index - 1].verb]
                      nextVerb = messages.tagline.verbs[arr[0].verb]
                    } else {
                      previousVerb = messages.tagline.verbs[arr[index - 1].verb]
                      nextVerb = messages.tagline.verbs[arr[index + 1].verb]
                    }
                    return (
                    <div className="d-inline" key={index}>
                      <strong>{verb === previousVerb ? thing.name : `${verb} ${thing.name}`}</strong>
                      {index !== (arr.length - 1) && <Typist.Backspace
                        count={verb === nextVerb ?
                          thing.name.length
                          : thing.name.length + verb.length + 1
                        }
                        delay={768}
                      />}
                    </div>
                  )})}
                </Typist>
              </h1>
            </div>
          </section>
          <section className="mb-3">
            {messages.about.description}
          </section>
          <div className="d-block">
            <ul className="row p-0 list-unstyled">
              <li className="col" style={{flex: 0}}><a href="https://github.com/dlbnco"><img src={githubLogo} alt="" height="16"/></a></li>
              <li className="col" style={{flex: 0}}><a href="https://linkedin.com/in/dlbnco"><img src={linkedinLogo} alt="" height="16"/></a></li>
              <li className="col" style={{flex: 0}}><a href="https://instagram.com/dlbnco"><img src={instagramLogo} alt="" height="16"/></a></li>
              <li className="col" style={{flex: 0}}><a href="https://twitter.com/dlbnco"><img src={twitterLogo} alt="" height="16"/></a></li>
              <li className="col" style={{flex: 0}}><a href="https://medium.com/@dalbinaco"><img src={mediumLogo} alt="" height="16"/></a></li>
            </ul>
            <p className="mb-0">mateus@dalbinaco.com</p>
          </div>
          <div className="separator my-5"></div>
          <section className="mb-3">
            {messages.projects.map((project) => (
              <div className="d-inline-block">
                <a href={project.url}>
                  <h3><strong>{project.title}</strong></h3>
                </a>
                <p>{project.description}</p>
              </div>
            ))}
          </section>
          <div className="separator my-5"></div>
            <h4>{messages.about.tech}</h4>
            <Badges skills={[
              {
                icon: 'react',
                name: 'React',
                url: 'https://reactjs.org/',
                color: '#61DAFB'
              },
              {
                icon: 'redux',
                name: 'Redux',
                url: 'https://redux.js.org/',
                color: '#61DAFB'
              },
              {
                icon: 'graphql',
                name: 'GraphQL',
                url: 'https://graphql.org/',
                color: '#61DAFB'
              },
              {
                icon: 'gatsby',
                name: 'Gatsby',
                url: 'https://gatsbyjs.org/',
                color: '#61DAFB'
              },
            ]} />
        </div>
      )
    }
    return (<div/>)
  }
}
export default IndexPage

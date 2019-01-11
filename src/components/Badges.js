import React, { PropTypes } from 'react'

const Badges = React.createClass({
  render () {
    const skills = this.props.skills.map( (skill, index) =>
    <li className="mr-4" key={index}>
      <a href={skill.url} className="d-flex flex-column align-items-center">
        <img className="mb-2" style={{filter: 'invert(100%)'}} src={`https://unpkg.com/simple-icons@latest/icons/${skill.icon}.svg`} width="32" height="32" />
        <p>{skill.name}</p>
      </a>
    </li>
  )
  return (
    <ul className="d-flex list-unstyled p-0 mt-4">
      {skills}
    </ul>
  )
}
})

export default Badges

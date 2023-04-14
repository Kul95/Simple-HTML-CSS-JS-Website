import React from 'react'

const About = (props) => {
  return (
    <div>
      <h1>This is About..{props.name} </h1>
      <h2>Hi {props.name}</h2>
      <h2>My age is {props.age}</h2>
      <h2>my Gender is {props.gender}</h2>
      <h2>My Email is: {props.email}</h2>
    </div>
  )
}

export default About

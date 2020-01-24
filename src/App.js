import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "hanako", age: 5},
    { name: "Yuki", age: 32 }
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}
const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

// User.defaultProps = {
//   name: "???" , age: "???"
// }

export default App;

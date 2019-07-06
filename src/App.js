import React, { Component } from 'react';

// class App extends Component {
//   render() {
//
//       const greeting = "Hi, Tom!";
//       const dom = <h1 className="foo">{greeting}</h1>;
//
//       return (
//         <React.Fragment>
//           <label htmlFor="bar">{dom}</label>
//           <input type ="text" onChange={() => {console.log("Clicked")}} />
//         </React.Fragment>
//     )
//
//   }
// }

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "hanako", age: 5},
    {  }
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
User.defaultProps = {
  name: "???" , age: "???"
}

export default App;

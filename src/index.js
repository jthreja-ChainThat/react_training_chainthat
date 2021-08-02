import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import App from './app';
import WeatherApp from './weatherApp';
// import Child1 from "./test1";
// import Child2 from "./test2";
// import Error from './error';
import "./root.css";

// Function component
// 1. Start with capital letter
// 2. only return single element
// 3. apply style as object + styleName is as camelCase
// 4. class will refered as className
// const App = ({ name, greet}) => {
//   return (
//     <>
//       <h1>{name}</h1>
//       <h2 className="header">{greet}</h2>
//       <input type="text" style={{
//         backgroundColor: 'gray'
//       }} />
//       <input type="checkbox" />
//       <input type="password" />

//       <button type="button" onClick={() => {
//         console.log('button clicked');
//       }}>Submit</button>
//     </>
//   );
// };

// let a = 1;

// html will only rerender when props value change or state value;

// Four Stages of life cycle method

// Mouting

// -> constructor
//    -> 1. binding method
//    -> 2. base on props if you want to declare new State value
//    -> 3. api call
//    -> 4. call only once

// -> getDerivedStateFromProps
//    -> 1. base on prevProps & prevState if you want to derive new State value;

// -> render
//    -> render HTML

// -> componentDidMount
// ->     1 access dom element
// ->     2 add event listner
// ->     3 fetch initial data(api call)
// ->     4 call only once

// Updating

// -> getDerivedStateFromProps

// -> shouldComponentUpdate 

// -> render

// -> getSnapshotBeforeUpdate

// -> componentDidUpdate

// unmounting

//  componentWillUnmount

// error

// getDerivedStateFromError

// class App extends Component {
//   constructor(props) {
//     console.log("constructor");
//     super(props);

//     this.h2Ref = createRef();

//     this.state = {
//       a: 1,
//       b: 1,
//       user: {
//         name: "yagnesh",
//       },
//       // greetUser: `${props.greet}, ${props.name} `
//     };
//     // log user entry
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedStateFromProps");
//     return {
//       greetUser: `${props.greet}, ${props.name} `,
//     };
//   }

//   componentDidMount() {
//     console.log(document.getElementById("header"));
//     // O(logN)
//     // document.getElementById('header').style = "color: green"

//     // O(n)
//     // document.getElementsByClassName('header')[0].style = "color: green"

//     // O(1)
//     this.headerRef.style = "color: green";

//     // O(1)
//     this.h2Ref.current.style = "color: red";
//     document.addEventListener("copy", () => {
//       console.log("copied");
//     });
//   }



//   // shouldComponentUpdate(nextProps, nextState) {

//   // }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//       return 1;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(snapshot)
//   }
  


  


//   onClick = () => {
//     // this.setState({
//     //   a: this.state.a + 1
//     // })

//     this.setState(
//       (prevState, props) => {
//         console.log("prevState", prevState);
//         console.log("props", props);
//         return { b: prevState.b + 2 };
//       },
//       () => {
//         console.log(this.state.a);
//       }
//     );
//   };

//   changeUserName = () => {
//     this.setState(({ user }) => {
//       return {
//         user: {...user, name: 'rohit'},
//       };
//     });
//   };

//   render = () => {
//     console.log("render");
//     const { a, b, greetUser, user } = this.state;
//     const { name, greet } = this.props;


//     return (
//       <Error>
//         <h1
//           id="header"
//           className="header"
//           ref={(ref) => {
//             this.headerRef = ref;
//           }}
//         >
//           {name}
//         </h1>
//         <h2 ref={this.h2Ref}>{greet}</h2>
//         <h2>{greetUser}</h2>
//         <p>{`a: ${a}`}</p>
//         <p>{`b: ${b}`}</p>
//         <h2>{this.state.user.name}</h2>
//         {b < 2 && <Child1 user={user} />}
//         <Child2 />
//         <button type="button" onClick={this.onClick}>
//           Click Me
//         </button>
//         <button type="button" onClick={this.changeUserName}>
//           Change User Name
//         </button>
//       </Error>
//     );
//   };
// }

ReactDOM.render(
  //<App />,
  <WeatherApp />,
  document.getElementById("root")
);

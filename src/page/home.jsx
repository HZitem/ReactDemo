import React, { Component } from 'react';
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>About</div>
  );
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState:localStorage.getItem('loginState'),
      list: [
        { name: "Login", url: "/login" },
        { name: "Redux Page", url: "/reduxPage" },
        { name: "Nested Route", url: "/ParentRouter" },
      ]
    };
    this.myRef = React.createRef();
  };
  
  render() {
    return (
      <div className="Login">
        <p ref={this.myRef}>Home</p>
        <ul>
          {this.state.list.map((item, index) =>
            <li key={index}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          )}
        </ul>
        <About/>
        <button>Logout</button>
      </div>
    );
  }
}

export default Home;

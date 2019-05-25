import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: localStorage.getItem('loginState'),
    }
  };
  handleClick() {
    localStorage.setItem('loginState', 1);
    this.props.history.push({
      pathname: '/'
    })
  }
  render() {
    return (
      <div className="Login">
        <p>Login</p>
        <button onClick={this.handleClick.bind(this)}>Login</button>
      </div>
    );
  }
}

export default Login;

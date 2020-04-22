import React, { Component } from 'react';
import config from '../router/config'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

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
        { title: "Login", key: "/login" },
        { title: "Redux Page", key: "/reduxPage" },
        { title: "Nested Route", key: "/ParentRouter" },
        { title: "hook Demo", key: "/hookDemo" },
      ]
    };
    this.myRef = React.createRef();
  };

  componentDidMount(){
    const userRoles =  this.props.menus;
    let menu = config['menus'].filter((r) => {
      if( userRoles.indexOf(r.key) !== -1){
          return r ;
      }else{
          return null
      }
    })
    let nes = [...this.state.list,...menu];
    this.setState({
      list:nes
    })
    
  };
  render() {
    return (
      <div className="Login">
        <p ref={this.myRef}>Home</p>
        <ul>
          {this.state.list.map((item, index) =>
            <li key={index}>
              <Link to={item.key}>{item.title}</Link>
            </li>
          )}
        </ul>
        <About/>
        <button>Logout</button>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
      menus:state.userReducer.user.menus,
  }
}   
export default connect(mapStateToProps)(Home)    ;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store'
import { addTo }  from '../actions/cart-actions';
class reduxPage extends Component {
  constructor(){
    super();
    this.state = {}
  };
  add(){
    store.dispatch(addTo('testname')); 
  }
  render() {
    return (
      <div className="Login">
        <p>Redux Page</p>
        <ul>
          {this.props.list.map((item, index) =>
            <li key={index}>{item.name}</li>
          )}
        </ul>
        <button onClick={this.add.bind(this)}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      list: state.shoppingCart.cart
  }
}

export default reduxPage = connect(mapStateToProps)(reduxPage)

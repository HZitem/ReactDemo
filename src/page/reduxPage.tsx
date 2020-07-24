import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import {addTo,ajaxList} from '../actions/cart-actions';

interface State {

} 
interface Props {
  test: any;
  list: any[];
} 

class reduxPage extends Component<Props,State>{
  constructor (props){
    super(props);
    this.state = {}
  };
  componentDidMount() {
    console.log("run")
  }
  add(){
    store.dispatch(addTo('testname'));
  }
  test(){
    store.dispatch(ajaxList());
  }
  render(){
    let obj = this.props.test;//是否已经正确异步到数据
    let ul = null;
    if(obj){
       ul = <ul>{this.props.test.map((item,index) =><li key={index}>{item.name}</li>)}</ul>;
    }else{
      ul = <p>Error</p>
    }
    return (
      <div className="Login">
        <p>Redux Page</p>
        {ul}
        <ul>
          {this.props.list.map((item,index) =>
            <li key={index}>{item.name}</li>
         )}
        </ul>
        <button onClick={this.add.bind(this)}>Add</button>
        <button onClick={this.test.bind(this)}>Test Redux Ajax</button>
      </div>
    )
  }
}

function mapStateToProps(state:any){
  return {
    list:state.shoppingCart.cart,
    test:state.shoppingCart.test
  }
}

export default connect(mapStateToProps)(reduxPage);
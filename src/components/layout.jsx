import React, { Component } from 'react';

class Layout extends Component{

    render() {
        let color = {
            backgroundColor: "#333",
            paddinf:"30px"           
        };
        return (
            <div style={color}>{this.props.children}</div>
        )
    }
}

export default Layout;
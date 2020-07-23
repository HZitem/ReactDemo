import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import config from '../../router/config'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import "../../css/home.css"

const { Header, Sider, Content } = Layout;

interface Props {
  menus: any;
  children: any,
  path: String;
}

class TestLayout extends Component<Props, {}> {
  state = {
    collapsed: false,
    list: [],

  };

  componentDidMount() {
    const userRoles = this.props.menus;
    let menu = config['menus'].filter((r) => {
      if (userRoles.indexOf(r.key) !== -1) {
        return r;
      } else {
        return null
      }
    })
    let nes = [...this.state.list, ...menu];
    this.setState({
      list: nes
    })
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {this.state.list.map((item, index) =>
              <Menu.Item key={index}>
                <Link to={item.key}>{item.title}</Link>
              </Menu.Item>
            )}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    menus: state.userReducer.user.menus,
  }
}
export default connect(mapStateToProps)(TestLayout);
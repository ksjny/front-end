import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
        <Menu inverted className="footer">
            <Menu.Item>Copyright 2018</Menu.Item>
        </Menu>
    );
  }
}
export default Footer;

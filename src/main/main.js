import React, { Component } from 'react'
import MainRoutes from '../routes/mainRoutes'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

export default class Main extends Component {

    render() {
        return (
              <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} width='thin' icon='labeled' visible={true} vertical inverted>
                  <Menu.Item name='Logs'>
                    <Icon name='file' />
                    Logs
                  </Menu.Item>
                  <Menu.Item name='Medicine'>
                    <Icon name='medkit' />
                    Medicine
                  </Menu.Item>
                  <Menu.Item name='Profile'>
                    <Icon name='user' />
                    Profile
                  </Menu.Item>
                  <Menu.Item name='Sign Out'>
                    <Icon name='log out' />
                    Sign Out
                  </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <MainRoutes/>
                </Sidebar.Pusher>
              </Sidebar.Pushable>   
          )
    }
}
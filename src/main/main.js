import React, { Component } from 'react'
import MainRoutes from '../routes/mainRoutes'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

export default class Main extends Component {

    componentWillMount() {
        // when component is mounting, add dashboard to the route to display it 
        this.props.history.replace('main/dashboard')
    }

    render() {
        return (
              <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} width='thin' icon='labeled' visible={true} vertical inverted>
                  <Menu.Item name='Logs'>
                    <Icon name='home' />
                    Logs
                  </Menu.Item>
                  <Menu.Item name='Medicine'>
                    <Icon name='camera' />
                    Sign Out
                  </Menu.Item>
                  <Menu.Item name='Profile'>
                    <Icon name='gamepad' />
                    Profile
                  </Menu.Item>
                  <Menu.Item name='Sign Out'>
                    <Icon name='camera' />
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
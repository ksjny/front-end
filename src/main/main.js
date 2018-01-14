import React, { Component } from 'react'
import MainRoutes from '../routes/mainRoutes'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container } from 'semantic-ui-react'

export default class Main extends Component {

    goToLogs = () => {
      this.props.history.push('/main/dashboard')
    }

    goToMedicine = () => {
      this.props.history.push('/main/medicine')
    }

    goToDiagnosis = () => {
      this.props.history.push('/main/diagnosis')
    }

    goToProfile = () => {
      this.props.history.push('/main/profile')
    }

    render() {
        return (
              <Container style={styles.uiContainer}>
                <Sidebar as={Menu} width='thin' icon='labeled' visible={true} vertical inverted>
                  <Menu.Item link name='Logs' onClick={this.goToLogs}>
                    <Icon name='file' />
                    Logs
                  </Menu.Item>
                  <Menu.Item link name='Medicine' onClick={this.goToMedicine}>
                    <Icon name='medkit' />
                    Medicine
                  </Menu.Item>
                  <Menu.Item link name='Diagnosis' onClick={this.goToDiagnosis}>
                    <Icon name='doctor' />
                    Diagnosis
                  </Menu.Item>
                  <Menu.Item link name='Profile' onClick={this.goToProfile}>
                    <Icon name='user' />
                    Profile
                  </Menu.Item>
                  <Menu.Item link name='Sign Out'>
                    <Icon name='log out' />
                    Sign Out
                  </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                  <MainRoutes/>
                </Sidebar.Pusher>
              </Container>   
          )
    }
}

const styles = {
    uiContainer : {
        display: "inline-block",
        paddingLeft: "20px",
        paddingRight: "20px"

    }
}
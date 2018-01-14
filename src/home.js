import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'

export default class HomePage extends Component {

    goToLogin = () => {
        this.props.history.push('login')
    }

    goToSignUp = () => {
        this.props.history.push('signup')
    }

    render() {
        return( 
            <div>
                 <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: window.innerHeight, padding: '1em 0em' }}
                    vertical
                    >
                    <Container>
                    <Menu inverted pointing secondary size='large'>
                        <Menu.Item as='a' active>Home</Menu.Item>
                        <Menu.Item as='a'>About Us</Menu.Item>
                        <Menu.Item position='right'>
                        <Button as='a' inverted onClick={this.goToLogin}>Log in</Button>
                        <Button as='a' inverted style={{ marginLeft: '0.5em' }} onClick={this.goToSignUp}>Sign Up</Button>
                        </Menu.Item>
                    </Menu>
                    </Container>

                    <Container text>
                    <Header
                        as='h1'
                        content='Medi Logs'
                        inverted
                        style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                    />
                    <Header
                        as='h2'
                        content='Do whatever you want when you want to.'
                        inverted
                        style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                    />
                    <Button primary size='huge'>
                        Get Started
                        <Icon name='right arrow' />
                    </Button>
                    </Container>
                </Segment>
            </div>
        )
    }
}
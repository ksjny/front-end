import React, { Component } from 'react'
import Footer from './common/footer'
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
    Visibility
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
                    style={{ padding: '1em 0em' }}
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

                    <Grid padded verticalAlign="middle" textAlign="center" className="banner">
                        <Image wrapped className="blackOverlayImg" />
                        {/*
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
                        </Button>*/}
                        <Grid.Column mobile={6} className="bannerOverlay" computer={12} tablet={10} textAlign="left" verticalAlign="middle">
                            <Header className="headerPotLuck">Mediprep</Header>
                            <Header className="headerOrganizing">Be the best patient</Header>
                            <Divider horizontal className="headerOrganizing"></Divider>
                            <p className="headerSignUp">Sign up with Mediprep and start tracking today.</p>
                            <Button className="signUpBtn" color='olive' as={Link} to="/register">Sign Up</Button>
                            <div className="headerAlready">Already registered? <Link color='blue'to="/login">Log in.</Link></div>

                        </Grid.Column>
                    </Grid>
                    <Footer/>
                </Segment>
            </div>
        )
    }
}
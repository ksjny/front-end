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
    Visibility,
    Transition
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class AboutUs extends Component {

  constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    goToLogin = () => {
        this.props.history.push('login')
    }

    goToSignUp = () => {
        this.props.history.push('signup')
    }
        goToHome = () => {
        this.props.history.push('')
    }

    componentDidMount () {
        this.setState({
            visible: true
        })
    }

    render() {
        return( 
            <div>
                 <Segment
                    inverted
                    textAlign='center'
                    style={{ backgroundColor: "darkslategrey" }}
                    vertical
                    >
                    <Container>
                    <Menu inverted pointing secondary style={styles.header}size='large'>
                        <Menu.Item as='a' onClick={this.goToHome}>Home</Menu.Item>
                        <Menu.Item as='a'>About Us</Menu.Item>
                        <Menu.Item position='right'>
                        <Button as='a' inverted onClick={this.goToLogin}>Log in</Button>
                        <Button as='a' inverted style={{ marginLeft: '0.5em' }} onClick={this.goToSignUp}>Sign Up</Button>
                        </Menu.Item>
                    </Menu>
                    </Container>

                    <Segment style={{ padding: '8em 0em' }} vertical>
                        <Grid container stackable verticalAlign='middle'>
                          <Grid.Row>
                            <Grid.Column width={8}>
                              <Header as='h3' style={styles.paragraph}>We can help you track the status of your health!</Header>
                              <p style={{ fontSize: '1.33em', paddingTop: '20px', color: 'white' }}>
                                It's often difficult for doctors to give an accurate medical 
                                diagnosis without crucial details such as the frequency, severity and location of effects on the body.
                                With Mediprep, customers can easily track their symptoms, medications, and, overall status using Alexis, 
                                an affordable, out of the box home automation tool that is there when you need her and off when you don't. With the collected
                                information, complex computations can be run and share strictly within your inner health care circle in order to 
                                ensure that you are informed, healthy, and aware of your condition.
                              </p>
                            </Grid.Column>
                            <Transition animation={'fade right'} duration={500} visible={this.state.visible}>
                            <Grid.Column floated='right' width={6}>
                              <Image
                                unbordered
                                rounded
                                size='large'
                                src='/logo.png'
                              />
                            </Grid.Column>
                             </Transition>
                          </Grid.Row>
                        </Grid>
                      </Segment>
                    <Footer style={styles.header}/>
                </Segment>
            </div>
        )
    }
}
const styles = {
    header: {
          backgroundColor: "darkslategrey",
          borderWidth:"0px",
          background:"darkslategrey"
    },
    paragraph:{
       fontSize: '2em',
       color: 'white' 
    }
}
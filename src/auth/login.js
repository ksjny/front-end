import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Container, Menu, Header, Image, Message, Segment,Transition } from 'semantic-ui-react'
import ApiHelper from '../api/apiHelper'

export default class LoginForm extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            visible: false
        };

        this.login = this.login.bind(this)
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
     goToAbout = () => {
        this.props.history.push('About')
    }

    async login() {
      if (this.state.email && this.state.password) {
        let { users } = await ApiHelper.get('users')
        let user = users.filter(user => user.email === this.state.email)

        if (user) {
          localStorage.setItem('userId', user[0].id)
          localStorage.setItem('firstName', user[0].firstName)
          localStorage.setItem('lastName', user[0].lastName)
          localStorage.setItem('email', user[0].email)
          this.props.authenticateUser()
          this.props.history.push('main')
        } else {
          this.setState({ error : 'Error has occurred during log-in.' })
        }
      }
    }

    componentDidMount () {
        this.setState({
            visible: true
        })
    }

    render () {
      return ( 
        <div>
         <Segment
                    inverted
                    textAlign='center'
                    style={styles.top}
                    vertical
                    >
                    <Container>
                    <Menu inverted pointing secondary style={styles.header}size='large'>
                        <Menu.Item as='a' onClick={this.goToHome}>Home</Menu.Item>
                        <Menu.Item as='a'onClick={this.goToAbout}>About Us</Menu.Item>
                        <Menu.Item position='right'>
                        <Button as='a' inverted onClick={this.goToLogin}>Log in</Button>
                        <Button as='a' inverted style={{ marginLeft: '0.5em' }} onClick={this.goToSignUp}>Sign Up</Button>
                        </Menu.Item>
                    </Menu>
                    </Container>
             </Segment>

          <div className='login-form'>
          {/*
            Heads up! The styles below are necessary for the correct render of this example.
            You can do same with CSS, the main idea is that all the elements up to the `Grid`
            below must have a height of 100%.
          */}
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
            style={{height: window.innerHeight }}
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' style={styles.header} textAlign='center'>
                <Image src='/logo.png' />
                {' '}Log-in to your account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='E-mail address'
                    value={this.state.email}
                    onChange={(e, { name, value}) => this.setState({ email : value })}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    value={this.state.password}
                    onChange={(e, { name, value }) => this.setState({ password : value })}
                  />
                  <Transition animation={'scale'} duration={500} visible={this.state.visible}>
                  <Button onClick={this.login} color='teal' fluid size='large'>Login</Button>
                   </Transition>
                </Segment>
              </Form>
              <Message>
                New to us? <Link to="/signup">Sign Up</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </div>

       </div>


      )
    }
  }

  const styles = {
        header : {
        color: 'white',
        borderBottom:'0px',
        borderWidth: '0px'
    },
    top:{
          
          backgroundColor: "darkslategrey",
          height: '65px'
          
    }
}
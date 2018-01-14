import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Container, Menu, Header, Image, Message, Segment } from 'semantic-ui-react'

export default class LoginForm extends React.Component {

      goToLogin = () => {
        this.props.history.push('login')
    }

    goToSignUp = () => {
        this.props.history.push('signup')
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
                        <Menu.Item as='a' active>Home</Menu.Item>
                        <Menu.Item as='a'>About Us</Menu.Item>
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
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  />
      
                  <Button color='teal' fluid size='large'>Login</Button>
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
          
          backgroundColor: "darkslategrey"
          
    }
}
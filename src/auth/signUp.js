import React, { Component } from 'react';
import ApiHelper from '../api/apiHelper';
import { Link } from 'react-router-dom'
import { Button, Menu, Container,Form, Grid, Header, Image, Message, Transition, Segment } from 'semantic-ui-react'

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            error: '',
            displayErrors: false,
            visible:false
        };
        this.handleSubmit          = this.handleSubmit.bind(this);
        this.handleFNameChange     = this.handleFNameChange.bind(this);
        this.handleLNameChange     = this.handleLNameChange.bind(this);
        this.handleEmailChange     = this.handleEmailChange.bind(this);
        this.handlePasswordChange  = this.handlePasswordChange.bind(this);

    }

    async handleSubmit(event) {
        event.preventDefault();
        
        if (this.state.fname && this.state.lname && this.state.email && this.state.password) {
          let params = {}
          params.firstName = this.state.fname
          params.lastName = this.state.lname
          params.email = this.state.email
          params.password = this.state.password

          let response = await ApiHelper.post('users', params)

          if(response) {
            this.props.history.push('login')
          } else {
            this.setState({ displayErrors : true, error : 'Something went wrong when signing up.'})
          }

        } else {
          this.setState({ displayErrors : true, error : 'Please check the fields.'})
        }


    }

    handleFNameChange (e) {
        this.setState({fname: e.target.value});
    }

    handleLNameChange (e) {
        this.setState({lname: e.target.value});
    }

    handleEmailChange (e) {
        this.setState({email: e.target.value});
     }

     handlePasswordChange (e) {
        this.setState({password: e.target.value});
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


    componentDidMount () {
        this.setState({
            visible: true
        })
    }
  render() {
    const displayErrors = this.state.displayErrors
    const error = this.state.error
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
                        <Menu.Item as='a' onClick={this.goToHome} >Home</Menu.Item>
                        <Menu.Item as='a' onClick={this.goToAbout}>About Us</Menu.Item>
                        <Menu.Item position='right'>
                        <Button as='a' inverted onClick={this.goToLogin}>Log in</Button>
                        <Button as='a' inverted style={{ marginLeft: '0.5em' }} onClick={this.goToSignUp}>Sign Up</Button>
                        </Menu.Item>
                    </Menu>
                    </Container>
             </Segment>
      <div className='signUp-form'>
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
          {' '}Create an account
        </Header>
        <Form size='large'>
          <Segment stacked>
          <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='First Name'
              value={this.state.fname} onChange={this.handleFNameChange}
              />
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Last Name'
              value={this.state.lname} onChange={this.handleLNameChange}
            />
            <Form.Input
              fluid
              icon='mail'
              iconPosition='left'
              placeholder='E-mail address'
              value={this.state.email} onChange={this.handleEmailChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={this.state.password} onChange={this.handlePasswordChange}

            />
            <Transition animation={'scale'} duration={500} visible={this.state.visible}>
            <Button onClick={this.handleSubmit} color='teal' fluid size='large'>Sign Up</Button>
             </Transition>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to='/login'>Log In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
   </div>

    );
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

export default SignUp;

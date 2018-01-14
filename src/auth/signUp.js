import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
        };
        this.handleSubmit          = this.handleSubmit.bind(this);
        this.handleFNameChange     = this.handleFNameChange.bind(this);
        this.handleLNameChange     = this.handleLNameChange.bind(this);
        this.handleEmailChange     = this.handleEmailChange.bind(this);
        this.handlePasswordChange  = this.handlePasswordChange.bind(this);

    }
    handleSubmit(event) {
        // event.preventDefault();

        // if (!event.target.checkValidity()) {
        //         this.setState({
        //         invalid: true,
        //         displayErrors: true,
        //     });
        //     return;
        // }

        // const data = {
        //             email           : this.state.email,
        //             password        : this.state.password,
        //             confirmpassword : this.state.cPassword,
        //             firstName       : this.state.fname,
        //             lastName        : this.state.lname,
        //     };
      
        // axios({
        //     url: "https://potluckapi.azurewebsites.net/api/register",
        //     method: "post",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     data: JSON.stringify (data)
        // }).then(response => {
        //     this.setState({
        //         success: response.status === 201,
        //         displayErrors: false,
        //         error: ''
        //     })
        //     this.props.regIsSuccessful()
        //     this.props.history.push('/login')
        // }).catch(e => {
        //     this.setState({
        //         error: e.response.data.errors[0].description,
        //         displayErrors: true,
        //         success: false })
        // })
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

  render() {
    const displayErrors = this.state.displayErrors
    const error = this.state.error
    return (
      <div className='signUp-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
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

            <Button color='teal' fluid size='large'>Sign Up</Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <a href='#'>Log In</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    );
  }
}

export default SignUp;

import React, { Component } from 'react'
import { 
    Sidebar, 
    Segment, 
    Button, 
    Menu, 
    Image, 
    Icon, 
    Header,
    Table,
    Rating,
    Transition,
    Modal,
    Form
} from 'semantic-ui-react'

export default class Diagnosis extends Component {
    constructor(props) {
    super(props);
    this.state = {
            visible: false
    };
}


    componentDidMount () {

      this.setState({
        visible: true
      })
     }

     handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit () {
    this.setState({ email: '', name: '' });

}

 _refresh = () => {
        window.location.reload();
    }

    render() {
        const { name, email } = this.state
        return (
             <Transition animation={'fade right'} duration={500} visible={this.state.visible}>
            <Segment vertical style={styles.diagnosisContainer}>
                <Header size='huge' style={styles.header}>Diagnosis
                <button class="ui right floated teal button" onClick={this._refresh}>Refresh</button>
                <Modal trigger = {<button class="ui right floated teal button">Add diagnosis</button>}>
                <Modal.Header>Add Diagnosis</Modal.Header>
                        <Modal.Content>
                     <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                          <Form.Input placeholder='Diagnosis' name='Diagnosis' value={name} onChange={this.handleChange} />
                          <Form.Input placeholder='Severity' name='Severity' value={email} onChange={this.handleChange} />
                          <Form.Button content='Submit' />
                        </Form.Group>
                      </Form>
                        </Modal.Content>
                      </Modal>
                </Header>
                <Table celled padded>
                    <Table.Header>
                    <Table.Row textAlign="center">
                        <Table.HeaderCell singleLine>Time</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        {/*<Table.HeaderCell>Severity</Table.HeaderCell>*/}
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {/*
                    <Table.Row textAlign="center">
                        <Table.Cell>
                            <Header as='h5' textAlign='center'>10:40PM</Header>
                        </Table.Cell>
                        <Table.Cell singleLine>Headache</Table.Cell>
                        <Table.Cell>3</Table.Cell>
                    </Table.Row>
                    <Table.Row textAlign="center">
                        <Table.Cell>
                            <Header as='h5' textAlign='center'>8:00AM</Header>
                        </Table.Cell>
                        <Table.Cell singleLine>Weight</Table.Cell>
                        <Table.Cell>3</Table.Cell>
                    </Table.Row>*/}
                    </Table.Body>
                </Table>
           
            </Segment>
         </Transition>
        )
    }
}

const styles = {
    diagnosisContainer : {
        flexDirection : "column",
        width: "100%",
        minHeight : window.innerHeight
    },
        header : {
        color: 'white'
    }
}
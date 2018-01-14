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
    Transition,
    Rating,
    Modal,
    Form
} from 'semantic-ui-react'

export default class Medicine extends Component {
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

  handleSubmit = () => this.setState({ email: '', name: '' })


 _refresh = () => {
        window.location.reload();
    }

    render() {
        const { name, email } = this.state
        return (
            <Transition animation={'fade right'} duration={500} visible={this.state.visible}>
            <Segment vertical style={styles.medicineContainer}>
                    <Header size='huge' style={styles.header}>Medicines
                    <button class="ui right floated teal button" onClick={this._refresh}>Refresh</button>
                    <Modal trigger = {<button class="ui right floated teal button">Add medicine</button>}>
                <Modal.Header>Add medicine</Modal.Header>
                        <Modal.Content>
                     <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                          <Form.Input placeholder='Medicine' name='Medicine' value={name} onChange={this.handleChange} />
                          <Form.Input placeholder='Time' name='Time' value={email} onChange={this.handleChange} />
                          <Form.Button content='Submit' />
                        </Form.Group>
                      </Form>
                        </Modal.Content>
                      </Modal>
                </Header>
                    <Table celled padded>
                        <Table.Header>
                        <Table.Row textAlign="center">
                            <Table.HeaderCell singleLine>Name</Table.HeaderCell>
                            <Table.HeaderCell>Time Period</Table.HeaderCell>
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
                        </Table.Row>
                        */}
                        </Table.Body>
                    </Table>
            </Segment>
         </Transition>
        )
    }
}


const styles = {
    medicineContainer : {
        flexDirection : "column",
        width: "100%",
        minHeight : window.innerHeight
    },
        header : {
        color: 'white'
    }
}
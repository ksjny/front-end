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
import convertMs from '../util/convertMs'
import ApiHelper from '../api/apiHelper'

export default class Medicine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medications : [],
            visible: false
        };
    }

    async componentDidMount () {
        await this.loadMedications()
        this.setState({
            visible: true
        })
    }

    async loadMedications() {
        let { medications } = await ApiHelper.get('medication')
        let userId          = localStorage.getItem("userId") || 1;

        medications = (medications || []).filter(medication => medication.user === userId);

        this.setState({ medications })
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
                    <button className="ui right floated teal button" onClick={this._refresh}>Refresh</button>
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
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Time Period</Table.HeaderCell>
                            {/*<Table.HeaderCell>Severity</Table.HeaderCell>*/}
                        </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        {
                            this.state.medications.map((medication, index) => {
                                let split  = medication.time_period.split(' ')
                                let daysSeconds   = parseInt(split[0]) * 86400
                                let timeSplit     = split[1].split(':');
                                let timeSeconds   = (+timeSplit[0]) * 60 * 60 + (+timeSplit[1]) * 60 + (+timeSplit[2]); 

                                let timePeriod = convertMs(timeSeconds + daysSeconds)
                                return (
                                    <Table.Row key={index} textAlign="center">
                                        <Table.Cell singleLine>{medication.name}</Table.Cell>
                                        <Table.Cell>{`${timePeriod.d} days ${timePeriod.h} hours ${timePeriod.m} minutes ${timePeriod.s} seconds`}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
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
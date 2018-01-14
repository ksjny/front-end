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
    Transition
} from 'semantic-ui-react'
import ApiHelper from '../api/apiHelper'

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            symptoms : []
        };
    }

    async componentDidMount() {
        await this.loadSymptoms()
        this.setState({ visible: true })
    }

    async loadSymptoms() {
        let { symptoms } = await ApiHelper.get('symptom')
        let userId       = localStorage.getItem("userId") || 1;

        symptoms = (symptoms || []).filter(symptom => symptom.user === userId);

        this.setState({ symptoms })
    }

    render() {
        return (
         <Transition animation={'fade right'} duration={500} visible={this.state.visible}>
            <Segment vertical style={styles.dashboardContainer}>
                <Header size='huge' style={styles.header}>Logs</Header>
                <Table celled padded>
                    <Table.Header>
                    <Table.Row textAlign="center">
                        <Table.HeaderCell singleLine>Time</Table.HeaderCell>
                        <Table.HeaderCell>Location</Table.HeaderCell>
                        <Table.HeaderCell>Severity</Table.HeaderCell>
                        <Table.HeaderCell>Pain Type</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {
                        this.state.symptoms.map((symptom, index) => {
                            return (
                                <Table.Row key={index} textAlign="center">
                                    <Table.Cell>
                                    <Header as='h5' textAlign='center'>{ new Date(symptom.created_at).toLocaleDateString() }</Header>
                                    </Table.Cell>
                                    <Table.Cell singleLine>{symptom.location}</Table.Cell>
                                    <Table.Cell>{symptom.severity}</Table.Cell>
                                    <Table.Cell>{symptom.pain_type}</Table.Cell>
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
    dashboardContainer : {
        flexDirection : "column",
        width: "100%",
        minHeight : window.innerHeight
    },
    header : {
        color: 'white'
    }
}
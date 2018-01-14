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

export default class Diagnosis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diagnoses : [],
            visible: false
        };
    }


    async componentDidMount () {
        await this.loadDiagnosis()
        this.setState({
            visible: true
        })
    }

    async loadDiagnosis() {
        let { diagnoses } = await ApiHelper.get('diagnosis')
        let userId        = localStorage.getItem("userId") || 1;

        diagnoses = (diagnoses || []).filter(diagnosis => diagnosis.user === userId);

        this.setState({ diagnoses })
    }

    render() {
        return (
             <Transition animation={'fade right'} duration={500} visible={this.state.visible}>
            <Segment vertical style={styles.diagnosisContainer}>
           
                <Header size='huge' style={styles.header}>Diagnosis
                <button className="ui right floated teal button">Add diagnosis</button>
                </Header>
                <Table celled padded>
                    <Table.Header>
                    <Table.Row textAlign="center">
                        <Table.HeaderCell singleLine>Time</Table.HeaderCell>
                        <Table.HeaderCell>Diagnosis</Table.HeaderCell>
                        <Table.HeaderCell>Severity</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {
                        this.state.diagnoses.map((diag, index) => {
                            return (
                                <Table.Row key={index} textAlign="center">
                                    <Table.Cell>
                                        <Header as='h5' textAlign='center'>{ new Date(diag.created_at).toLocaleDateString()}</Header>
                                    </Table.Cell>
                                    <Table.Cell singleLine>{diag.name}</Table.Cell>
                                    <Table.Cell>{diag.severity}</Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                    
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
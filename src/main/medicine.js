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
    Rating
} from 'semantic-ui-react'

export default class Medicine extends Component {
    render() {
        return (
            <Segment vertical style={styles.medicineContainer}>
                    <Header size='huge'>Medicines</Header>
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
        )
    }
}


const styles = {
    medicineContainer : {
        flexDirection : "column",
        width: "100%",
        minHeight : window.innerHeight
    }
}
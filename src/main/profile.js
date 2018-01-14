import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

export default class Profile extends Component {
    render() {
        return (
            <Segment style={styles.profileContainer}>
                Profile!
            </Segment>
          )
    }
}

const styles = {
    profileContainer : {
        display: "flex", 
        flex : 1, 
        minHeight : window.innerHeight
    }
}
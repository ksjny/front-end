import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default ({ component: Component, isAuthenticated, ...rest }) => {
    console.log("coming here")
    console.log(Component)
    return (
        <Route {...rest} render={props => (
            isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
            pathname: '/',
            state: { from: props.location }
            }}/>
        )
        )}/>
    )
}
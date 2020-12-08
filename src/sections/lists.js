import React, { Component } from 'react';
import { LogoutButton } from './conditional'
import { LoginButton } from './conditional'

export default class ConditionalSection extends Component{
    constructor(){
        super()
        this.state = { isUserLogged: false }
    }
    render(){
        return (
            <div>
                <h4>Conditional Rendering</h4>
                { this.state.isUserLogged 
                    ? <LogoutButton /> 
                    : <LoginButton /> }
            </div>
        )
    }
}
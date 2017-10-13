import React, { Component } from 'react'

import Jumbotron from './Jumbotron'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Jumbotron/>
                <div>
                    <h1>Home Page</h1>
                    <p>This is the home page</p>
                </div>
            </div>
        )
    }
}

export default HomePage
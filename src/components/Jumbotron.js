import React, { Component } from 'react'

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                <h1>Hello, world!!</h1>
                <p>This is a Bootstrap theme that uses React.js components</p>
                <p>
                    <a className="btn btn-lg btn-primary" href="#" role="button">Learn more »</a>
                </p>
                </div>
            </div>
        )
    }
}

export default Jumbotron
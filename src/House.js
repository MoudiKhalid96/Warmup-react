import React, { Component } from 'react'
import houses from './Houses';


export default class House extends Component {
    constructor(props) {
        super(props)

        this.state = ({
            length: props.length,
        })
    }

    render() {

        return (
            <div>
                <br />
                <h2>{this.props.houses[this.props.length].houseName}</h2>
                <img src={this.props.houses[this.props.length].imgSrc} alt={`logo of ` + this.props.houses[this.props.length].houseName} />
                <p>Founder: {this.props.houses[this.props.length].founder}</p>
                <p>Element: {this.props.houses[this.props.length].element}</p>
                <hr />
                <br />
                <br />
            </div>
        )
    }
}

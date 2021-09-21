import React, { Component } from 'react'

export default class Character extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div>
                {(this.props.showNotableCharacter == true) ?
                    <div>
                        <h3>{this.props.houses[this.props.length].notableCharacter.charName}</h3>
                        <img src={this.props.houses[this.props.length].notableCharacter.imgSrc} alt={`notable character of ` + this.props.houses[this.props.length].houseName} />
                        <p>House: {this.props.houses[this.props.length].houseName}</p>
                    </div>
                    :
                    <div></div>
                }

            </div>
        )
    }
}

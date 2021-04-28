// Code DigitalClicker Component Here
import React, { Component } from 'react';


class DigitalClicker extends Component{
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    upClick = () => {
        this.setState({
            timesClicked: ++this.state.timesClicked
        })
    }

    render(){
        return(
            <button onClick={this.upClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker
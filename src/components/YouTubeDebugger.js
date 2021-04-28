// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
             }
        }
    }

    updateBitrate = () =>{

        // const {bitrate} = {...settings}
        this.setState(prevState => ({
               settings:{
                   ...prevState.settings,
                   bitrate:12
               }
        }))
    }

    updateResolution = () => {

        this.setState(prevState =>({
            settings:{
                ...prevState.settings,
                video:{
                    ...prevState.settings.video,
                    resolution: '720p'
                }
            }
         })
         )
    }

    render(){
        return (
            <div>
                <button onClick={this.updateBitrate} className="bitrate"></button>
                <button onClick={this.updateResolution} className="resolution"></button>
            </div>
        )
    }
}

export default YouTubeDebugger
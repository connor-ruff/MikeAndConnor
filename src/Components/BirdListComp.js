import React, { Component } from 'react'
import axios from 'axios'

export class BirdListComp extends Component {

    state = {
        loading: true,
        birdsObj: null
    }
    
    async componentDidMount(){
        const url = this.props.apiURL;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({birdsObj: data["Data"], loading: false})
    }

    render() {



        return (
            <div className="birdList">
                <h5>{this.props.head}</h5>
                <ul  className="bigList">

                {this.state.loading || this.state.birdsObj == null ? <div>Loading....</div> : 
                    this.state.birdsObj.map(bird =>
                        <li>{bird["Species"]} (ID: {bird["ID"]})</li>)
                }
                
                </ul>
   
            </div>
        )
    }
}

export default BirdListComp

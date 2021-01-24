import React, { Component } from 'react'
import Spinner from 'react-bootstrap/spinner'

export class BirdListComp extends Component {

    state = {
        loading: true,
        birdsObj: null
    }
    
    async componentDidMount(){
        const url = this.props.apiURL;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({birdsObj: data["Data"], loading: false})
    }

    render() {



        return (
            <div className="birdList">
               {
                   this.state.loading || this.state.birdsObj == null ?
                <h5>
                   <b> {this.props.head} </b>
                </h5>
                :
                <h5>
                   <b> {this.props.head} (Total: {this.state.birdsObj.length}): </b>
                </h5>
                }   
                <ul  style={{maxHeight: '200px'}}>

                {this.state.loading || this.state.birdsObj == null ? <div>
                        
                            
                        <Spinner animation="border" size='sm' role="status"></Spinner><p style={{display: 'inline'}}>  Loading....</p>

                     </div> : 
                    this.state.birdsObj.map( (bird, index) =>
                        <li key={index}>{bird["Species"]} (ID: {bird["ID"]})</li>)
                }
                
                </ul>
   
            </div>
        )
    }
}

export default BirdListComp

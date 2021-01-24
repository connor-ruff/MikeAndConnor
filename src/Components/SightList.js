import React, { Component } from 'react'

class SightList extends Component {
    
    render() {
        return (
            <div className="birdList">
                <h5>Sight List:</h5>
                 <ul>
                     {
                         this.props.birds.map( (bird, index) => 
                             <li key={index}>{bird}</li>
                             )
                     }
                 </ul>
            </div>
        )
    }
}

export default SightList

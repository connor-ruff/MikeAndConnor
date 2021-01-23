import React, { Component } from 'react'
import backYardBirds from '../Constants/backYardBirds'

class SightList extends Component {
    
    render() {
        return (
            <div className="birdList">
                <h5>Sight List:</h5>
                 <ul>
                     {
                         this.props.birds.map(bird => 
                             <li>{bird}</li>
                             )
                     }
                 </ul>
            </div>
        )
    }
}

export default SightList

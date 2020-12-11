import React, { Component } from 'react'
import backYardBirds from '../Constants/backYardBirds'

class SightList extends Component {
    render() {
        return (
            <div className="birdList">
                <h5>Backyard Sightings:</h5>
                 <ul>
                     {
                         backYardBirds.birdList.map(bird => 
                             <li>{bird}</li>
                             )
                     }
                 </ul>
            </div>
        )
    }
}

export default SightList

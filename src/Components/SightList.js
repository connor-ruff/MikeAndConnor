import React, { Component } from 'react'
import '../CSS/Birding.css'

class SightList extends Component {
    
    render() {
        return (
            <div className="birdList">
                <h5>Sight List ({this.props.birds.length}):</h5>
                 <ul >
                     {
                         this.props.birds.sort().map( (bird, index) => 
                             <li key={index}>{bird}</li>
                             )
                     }
                 </ul>
            </div>
        )
    }
}

export default SightList

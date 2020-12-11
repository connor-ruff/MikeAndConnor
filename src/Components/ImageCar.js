import React, { Component } from 'react'
import {Carousel, Container } from 'react-bootstrap'
import backYardBirds from '../Constants/backYardBirds'
import '../CSS/Birding.css'

class ImageCar extends Component {


    render() {

        
        return (
                <Carousel id='carO'>
                    {
                        backYardBirds.images.map(pic => 
                            <Carousel.Item className='carousel-item'>
                                <img 
                                    src={pic.src}
                                    height={pic.height} 
                                    />
                                <Carousel.Caption style={{textAlign: 'left'}}>
                                    <h3 style={{backgroundColor: 'gray'}}>{pic.bird}</h3>
                                    <p style={{backgroundColor: 'gray'}}>{pic.desc}</p>
                                </Carousel.Caption>
                            </Carousel.Item>)
                    }
                </Carousel>
        )
    }
}

export default ImageCar

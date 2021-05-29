import React, { Component } from 'react'
import {Carousel } from 'react-bootstrap'
import '../CSS/Birding.css'

class ImageCar extends Component {


    render() {

        
        return (
                <Carousel id='carO'>
                    {
                        this.props.pics.map( (pic, index) => 
                            <Carousel.Item key={index} className='carousel-item'>
                                <img 
                                    alt='Bird'
                                    src={pic.src}
                                  //  height={pic.height}
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

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
                                <Carousel.Caption style={{textAlign: 'left', margin: 0}}>
                                    <h3 style={{backgroundColor: 'none', fontStyle: 'bold' , fontSize: '2.5vw'}}>{pic.bird}</h3>
                                    <p style={{backgroundColor: 'none', fontSize: '1.5vw', fontStyle: 'bold'}}>{pic.desc}</p>
                                </Carousel.Caption>
                            </Carousel.Item>)
                    }
                </Carousel>
        )
    }
}

export default ImageCar

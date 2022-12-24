import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector, useDispatch } from 'react-redux';
import { selectImg, selectImages, isLoadingImages, loadBackgroundImages } from './backgroundSlice';

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const images = useSelector(selectImages);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="position-fixed" style={{
            zIndex: '-1'
        }}>
            <Carousel.Item>
                <img
                    className="d-block"
                    src={images[0].urls.regular}
                    alt="First slide"
                    style={{width: '100%', objectFit: 'cover'}}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block min-vh-100"
                    src={images[1].urls.regular}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block min-vh-100"
                    src={images[2].urls.regular}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import { selectImages } from './backgroundSlice';

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const images = useSelector(selectImages);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel fade activeIndex={index} onSelect={handleSelect} interval={null} className="position-fixed" style={{
            zIndex: '-1'
        }}>
            {images.map((image) => {
                return (
                    <Carousel.Item key={image.id}>
                        <img
                            className="d-block"
                            src={image.urls.regular}
                            alt="First slide"
                            style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

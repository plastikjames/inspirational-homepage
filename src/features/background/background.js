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
        <Carousel fade activeIndex={index} onSelect={handleSelect} controls={false} interval={null} className="position-fixed" style={{
            zIndex: '-1'
        }}>
            {images.map((image) => {
                return (
                    <Carousel.Item key={image.id}>
                        <div
                            className="d-block"
                            style={{
                                width: '100vw', height: '100vh', objectFit: 'cover', 
                                backgroundImage: "url(" + image.urls.regular + ")",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}

                        />
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

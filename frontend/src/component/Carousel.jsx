import { useState } from 'react';
import slider1 from '../assets/slider2.avif'
import slider2 from '../assets/slider3.jpg'
import slider3 from '../assets/slider4.avif'


function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };

    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                    <img className="d-block w-100" src={slider1} alt="First slide" />
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                    <img className="d-block w-100" src={slider2} alt="Second slide" />
                </div>
                <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                    <img className="d-block w-100" src={slider3} alt="Third slide" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
}

export default Carousel;

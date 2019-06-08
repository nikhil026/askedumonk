import React from 'react';
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
    '/images/usa.jpg',
    '/images/france.jpg',
    '/images/canada.jpg',
    '/images/austrlia.jpg',
    '/images/new_zealland.jpg'
];
 
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }
 
const Slideshow = () => {
    return (
       <Slide {...properties}>
        <div className="each-slide">
          <div>
          <img src={slideImages[0]} alt="student" />
          </div>
        </div>
        <div className="each-slide">
          <div>
          <img src={slideImages[1]} alt="student" />
          </div>
        </div>
        <div className="each-slide">
          <div>
          <img src={slideImages[2]} alt="student" />
          </div>
        </div>
        <div className="each-slide">
          <div>
          <img src={slideImages[3]} alt="student" />
          </div>
        </div>
        <div className="each-slide">
          <div>
          <img src={slideImages[4]} alt="student" />
          </div>
        </div>
      </Slide>
    )
}
export default Slideshow;
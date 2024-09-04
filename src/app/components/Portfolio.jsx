import React from 'react';
import ImageCarousel from './ImageCarousel';

const Portfolio = () => {
    const images = [
        "./gallery/1.png",
        "./gallery/2.png",
        "./gallery/3.png",
        "./gallery/4.png",
        "./gallery/5.png",
        "./gallery/6.png",
        "./gallery/7.png",
        "./gallery/8.png",
        "./gallery/9.png",
       
      ];
    return (
        <div id="Portfolio">
            <div className="container">
                <div className='aligner'>
                    <h3 className='ltitle'>Our Portfolio</h3>
                    <p>Explore some of the small-scale events we’ve had the pleasure of organizing. Our portfolio showcases the diversity and creativity of our work, reflecting the special moments we’ve helped create.</p>
                </div>
             
            </div>
            <ImageCarousel/>
        </div>
    );
};

export default Portfolio;
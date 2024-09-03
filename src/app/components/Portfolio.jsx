import React from 'react';

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
                <div className="marquee">
                    <div className="marquee-content">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`marquee-img-${index}`} className="marquee-image" />
                        ))}
                        {/* Duplicate images to create the infinite effect */}
                        {images.map((image, index) => (
                            <img key={`duplicate-${index}`} src={image} alt={`marquee-img-duplicate-${index}`} className="marquee-image" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
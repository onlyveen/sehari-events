import React from 'react';


const testimonials = [
  {
    name: "Vyadi Svanisri",
    image: "./papa.png", 
    text: `"I am more vocal about my thoughts and never confined to a team. With remote working and unquestioned infinite leaves, it is helping me be an excellent professional and a homemaker. AntStack lets me experiment, learn and enjoy my career!"`,
  },
  {
    name: "Vyadi Svanisri",
    image: "./papa.png", 
    text: `"AntStack culture believes in nurturing every individual and growing together as a family. it is helping me be an excellent professional and a homemaker. AntStack lets me experiment, learn and enjoy my career!"`,
  },
  {
    name: "Vyadi Svanisri",
    image: "./papa.png", 
    text: `"in nurturing every individual and growing together as a family. With a flat in nurturing every individual and growing together as a family. With a flat culture believes in nurturing every individual and growing together as a family.. AntStack lets me experiment, learn and enjoy my career!"`,
  },
  {
    name: "Vyadi Svanisri",
    image: "./papa.png", 
    text: `"AntStack culture in nurturing every individual and growing together as a family. With a flat believlearn and enjoy my career!"`,
  },
  {
    name: "Vyadi Svanisri",
    image: "./papa.png", 
    text: `"AntStack culture believes in nurturing every individual and growing together as a family. With a flat AntStack lets me experiment, learn and enjoy my career!"`,
  },
  {
    name: "Vyadi Svanisri",
    image: "./papa.png", 
    text: `"AntStack culture believes in nurturing every individual and growing together as a family. With a flat organization structure, I am more vocal about my thoughts and never confined to a team. With remote working and unquestioned infinite leaves, it is helping me be an excellent professional and a homemaker. AntStack lets me experiment, learn and enjoy my career!"`,
  },
  
];

const Testimonials = () => {
  return (
    <div className="testimonials">
     <img className="goldern" src="./golden-balloons.png" />
     <img className="purple" src="./purple-balloons.png" />
      <div className='container'>
        <div className='aligner'>
          <h3 className='ltitle'>Clients cheer for Us</h3>
          <p>Find out how our customers are spreading the word...!</p>
        </div>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className='person'>
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <h4>{testimonial.name}</h4>
              </div>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

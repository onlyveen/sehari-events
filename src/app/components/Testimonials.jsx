import React,{useState, useEffect} from 'react';
import axios from 'axios';

const AIRTABLE_PERSONAL_TOKEN = process.env.REACT_APP_AIRTABLE_PERSONAL_TOKEN || 'patF76yxaxs4gCjjt.0d557c56a243c1ed7c078db22e33edfe1c21dbe248dc9ad8eb0010135eaeb922';
const BASE_ID = 'appoH5SKOx6sP0tkO';
const TESTIMONIALS_TABLE_NAME = 'testimonials';


const fetchtesTimonials = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TESTIMONIALS_TABLE_NAME}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_PERSONAL_TOKEN}`,
      },
    });

    const records = response.data.records;

    // Map through the records and extract the relevant fields
    let testimonials = records.map(record => ({
      name: record.fields.name || '',
      text: record.fields.text || '',
      image: record.fields.image ? record.fields.image[0].url : null, // Access the image URL
      order: record.fields.order || 0, // Access the order field, default to 0 if not present
    }));

    // Sort the testimonials array by the order field
    testimonials.sort((a, b) => a.order - b.order);

    return testimonials;
  } catch (error) {
    console.error('Error fetching testimonials from Airtable:', error);
    return [];
  }
};


const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      const data = await fetchtesTimonials();
      setTestimonials(data);
    };

    getTestimonials();
  }, []);

  console.log(testimonials)
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

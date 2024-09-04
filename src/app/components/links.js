import axios from 'axios';

const AIRTABLE_PERSONAL_TOKEN = process.env.REACT_APP_AIRTABLE_PERSONAL_TOKEN || 'patF76yxaxs4gCjjt.0d557c56a243c1ed7c078db22e33edfe1c21dbe248dc9ad8eb0010135eaeb922';
const BASE_ID = 'appoH5SKOx6sP0tkO';
const TABLE_NAME = 'links';

export const fetchLinks = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_PERSONAL_TOKEN}`,
      },
    });

    const records = response.data.records;

    const links = {};

    // Populate the links object with the values from Airtable
    records.forEach(record => {
      const name = record.fields.name;
      const value = record.fields.value;
      const image = record.fields.image ? record.fields.image[0].url : null; // Access the image URL

      if (name) {
        links[name] = {
          value,
          image,
        };
      }
    });

    return links;
  } catch (error) {
    console.error('Error fetching links from Airtable:', error);
    return {};
  }
};

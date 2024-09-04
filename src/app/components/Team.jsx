import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AIRTABLE_PERSONAL_TOKEN = process.env.REACT_APP_AIRTABLE_PERSONAL_TOKEN || 'patF76yxaxs4gCjjt.0d557c56a243c1ed7c078db22e33edfe1c21dbe248dc9ad8eb0010135eaeb922';
const BASE_ID = 'appoH5SKOx6sP0tkO';
const TEAM_TABLE_NAME = 'team';

const fetchTeam = async () => {
    const url = `https://api.airtable.com/v0/${BASE_ID}/${TEAM_TABLE_NAME}`;
  
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${AIRTABLE_PERSONAL_TOKEN}`,
        },
      });
  
      const records = response.data.records;
  
      // Map through the records and extract the relevant fields
      let team = records.map(record => ({
        name: record.fields.name || '',
        designation: record.fields.designation || '',
        image: record.fields.image ? record.fields.image[0].url : null, // Access the image URL
        order: record.fields.order || 0, // Access the order field, default to 0 if not present
      }));
  
      // Sort the team array by the order field
      team.sort((a, b) => a.order - b.order);
  
      return team;
    } catch (error) {
      console.error('Error fetching team from Airtable:', error);
      return [];
    }
  };
  

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const getTeam = async () => {
      const data = await fetchTeam();
      setTeam(data);
    };

    getTeam();
  }, []);

  return (
    <div id="Team">
        <div className="container">
            <div className='aligner'>

                <h3 className='ltitle'>Meet Our Team</h3>
                <p>Behind every unforgettable event at Sehari Events is a passionate, creative team that brings dreams to life, turning special moments into lasting memories through meticulous planning, innovative design, and seamless collaboration.</p>
            </div>
            <div className="team-grid">
                {team.map((member, index) => (
                <div key={index} className="team-member">
                    {member.image && (
                    <img src={member.image} alt={`${member.name} | ${member.designation}`} className="team-member-image" />
                    )}
                    <h4>{member.name}</h4>
                    <p>{member.designation}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Team;

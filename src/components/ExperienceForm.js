import React from 'react';

const ExperienceForm = () => {
  return (
    <div className="section">
      <h2>Experience</h2>
      <div className="field">
        <label htmlFor="experienced-in">Experienced In:</label>
        <input type="text" id="experienced-in" />
      </div>
      <div className="field">
        <label htmlFor="for-at-least">For at Least:</label>
        <input type="text" id="for-at-least" />
      </div>
    </div>
  );
};

export default ExperienceForm;

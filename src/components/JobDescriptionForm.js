import React from 'react';

const JobDescriptionForm = () => {
  return (
    <div className="section">
      <h2>Describe Your Job</h2>
      <div className="field">
        <label htmlFor="position">Title/Position:</label>
        <input type="text" id="position" />
      </div>
      <div className="field">
        <label htmlFor="job-description">Job Description:</label>
        <textarea id="job-description"></textarea>
      </div>
      <div className="field">
        <label htmlFor="skills">Skills:</label>
        <input
          type="text"
          id="skills"
          placeholder="Please add skills that your job is required (e.g. java)"
        />
      </div>
    </div>
  );
};

export default JobDescriptionForm;

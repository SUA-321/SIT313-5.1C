import React from 'react';

const JobTypeRadio = ({ jobType, setJobType }) => {
  return (
    <div className="section">
      <h2>Select Job Type:</h2>
      <label>
        <input
          type="radio"
          value="freelance"
          checked={jobType === 'freelance'}
          onChange={() => setJobType('freelance')}
        />
        Freelance
      </label>
      <label>
        <input
          type="radio"
          value="employment"
          checked={jobType === 'employment'}
          onChange={() => setJobType('employment')}
        />
        Employment
      </label>
    </div>
  );
};

export default JobTypeRadio;
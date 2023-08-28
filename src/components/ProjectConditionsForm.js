import React from 'react';

const ProjectConditionsForm = () => {
  return (
    <div className="section">
      <h2>Project Conditions</h2>
      <div className="field">
        <label htmlFor="project-length">Project Length:</label>
        <input type="text" id="project-length" />
      </div>
      <div className="payment-fields">
        <div className="field">
          <label htmlFor="payment-min">Payment Min:</label>
          <input type="text" id="payment-min" />
        </div>
        <div className="field">
          <label htmlFor="payment-max">Payment Max:</label>
          <input type="text" id="payment-max" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="working-hours">Working Hours:</label>
        <input type="text" id="working-hours" />
      </div>
    </div>
  );
};

export default ProjectConditionsForm;

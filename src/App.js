import React, { useState } from 'react';
import './App.css';
import JobTypeRadio from './components/JobTypeRadio';
import JobDescriptionForm from './components/JobDescriptionForm';
import ProjectConditionsForm from './components/ProjectConditionsForm';
import ExperienceForm from './components/ExperienceForm';

function App() {
  const [jobType, setJobType] = useState('freelance');

  return (
    <div className="app-container">
      <div className="content-container">
        <h1 className="header">New Job</h1>
        <JobTypeRadio jobType={jobType} setJobType={setJobType} />
        <JobDescriptionForm />
        {jobType === 'freelance' && <ProjectConditionsForm />}
        {jobType === 'employment' && (
          <>
            <ProjectConditionsForm />
            <ExperienceForm />
          </>
        )}
                <button className="post-button">Post</button>
      </div>
    </div>
  );
}

export default App;

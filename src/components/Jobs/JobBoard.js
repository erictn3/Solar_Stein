import React, { useState, useEffect } from 'react';
import Job from './Job';
import data from '../../data.json';
 

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), []);

  return (
    <div>
      {/* <h1 className='text-4xl'>Hello</h1> */}
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          jobs.map((job) => <Job job={job} key=
          {job.id} />)
      )}     
    </div>
    
    
  )
}

export default Jobs;

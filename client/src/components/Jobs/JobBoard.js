import React, { useState, useEffect } from "react";
import Job from "./Job";
import API from '../../utils/API';
import data from "../../data.json";
import { Button } from '../Buttons/Button';

const Jobs = () => {
  let [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  // useEffect(() => setJobs(data), []);
  useEffect(() => {
        
  //   // async function getJobs() {
  //   //   return await API.getJobs();
  //   // }
  //   // let apiJobs = getJobs();

    API.getJobs().then(apiJobs => {
      console.log('Inside useEffect()');
      console.log(apiJobs);
      setJobs(apiJobs);
    });

    //setJobs(apiJobs);
  }, []);

  const filterFnc = ({ keySkills }) => {
    if (filters.length === 0) {
      return true;
    }

    const skillTags = [keySkills];

    if (keySkills) {
      skillTags.push(...keySkills);
    }

    // if (languages) {
    //   jobTags.push(...languages);
    // }

    return filters.every(filter => skillTags.includes(filter));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;
    setFilters([...filters, tag]);
  };

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter));
  };

  const clearFilters = () => {
    setFilters([]);
  }

  // const filteredJobs = jobs.filter(filterFnc);
  const filteredJobs = jobs;

  return (
    <>
      <div className='container m-auto'>
        {filters.length > 0 && (
          <div
            className={`flex bg-white shadow-lg -my-2 mb-16 mx-10 p-6 rounded relative`}>
            {filters.map((filter) => (
              <span
                className="mr-4 mb-4 p-2 rounded font-bold cursor-pointer text-blue-500 bg-blue-100 lg:mb-0"
                onClick={() => handleFilterClick(filter)}>
                  x {filter}
              </span>
            ))}
            <button onClick={clearFilters}
            className="font-bold text-gray-700 ml-auto">Clear</button>
          </div>
        )}
        {jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
          filteredJobs.map((job) => (
            <Job job={job} key={job._id} handleTagClick={handleTagClick} />
          ))
        )}
      
      </div>
    </>
  );
};

export default Jobs;

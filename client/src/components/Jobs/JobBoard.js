import React, { useState, useEffect } from "react";
import Job from "./Job";
import data from "../../data.json";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterFnc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const jobTags = [role, level];

    if (tools) {
      jobTags.push(...tools);
    }

    if (languages) {
      jobTags.push(...languages);
    }

    return filters.every(filter => jobTags.includes(filter));
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

  const filteredJobs = jobs.filter(filterFnc);

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
            <Job job={job} key={job.id} handleTagClick={handleTagClick} />
          ))
        )}
      </div>
    </>
  );
};

export default Jobs;

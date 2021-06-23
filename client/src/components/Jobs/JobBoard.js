import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Job from "./Job";
import API from '../../utils/API';
// import data from "../../data.json";
// import { Button } from '../Buttons/Button';

const Jobs = () => {
  let [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);
  const history = useHistory();

  // useEffect(() => setJobs(data), []);
  useEffect(() => {
        
  //   // async function getJobs() {
  //   //   return await API.getJobs();
  //   // }
  //   // let apiJobs = getJobs();

    API.getJobs().then(apiJobs => {

      setJobs(apiJobs);
    });

    //setJobs(apiJobs);
  }, []);

  const filterFnc = ({ keySkills }) => {
    if (filters.length === 0) {
      return true;
    }

    for (var keySkill of keySkills) {
      if (filters.includes(keySkill.skill) ){
        console.log(filters);
        return true;      
 
      }

    } 
    return false;

    // console.log(keySkills)
    // for (var key in keySkills) {
    //   // console.log(key.skill)
    //   for (var key2 in keySkills[key]) {
    //     // if (key2 === skill)
    //     console.log(key2);
    //     console.log(keySkills[key][key2]);
      
    
    //   }
    // }
    // const skillTags = [keySkills];

    // if (keySkills.skill) {
    //   skillTags.push(...keySkills);
    // }

    // return filters.some(filter => skillTags.includes(filter));
  };

  const handleJobClick = (jobId) => {
    console.log(jobId);
    history.push(`/stageForm/${jobId}`);
  }

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
            <Job job={job} key={job._id} onClick={handleJobClick} handleTagClick={handleTagClick} />
          ))
        )}
            {/* <Button></Button> */}
      </div>
    </>
  );
};

export default Jobs;

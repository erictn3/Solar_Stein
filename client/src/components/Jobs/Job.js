import React from 'react';

const Job = ({ job: {
  company,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools, } }) => {

    const jobTags = [role, level];

    if (tools) {
      jobTags.push(...tools);
    } 
    
    if (languages) {
      jobTags.push(...languages)
    }

  return(
    <div className="flex bg-white shadow-lg m-4 p-6">
      <div>
        <img src={logo} alt={company}/>
      </div>
      <div className="flex flex-col justify-between ml-4">

        <h3 className="font-bold text-blue-400">
          {company}
          {isNew && (
            <span className="text-blue-100 bg-blue-300 font-bold p-1 rounded-full m-2 py-1 px-2">
              New!
              </span>)}
          {featured && (
            <span className="text-blue-100 bg-black font-bold p-1 rounded-full py-1 px-2">
              Featured
              </span>)}

        </h3>

        <h2 className="font-bold text-xl">{position}</h2>

        <p className="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>

      </div>
      <div className="flex items-center justify-content ml-auto">
        
        { jobTags ? jobTags.map((jobTags) => <span className="text-blue-400 bg-blue-100 font-bold m-2 p-2">{jobTags}</span>) : ''}

      </div>
    </div>
  )
}

export default Job;

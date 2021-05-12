import React from "react";

const Job = ({
  job: {
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
    tools,
  }, 
  handleTagClick,
}) => {
  const jobTags = [role, level];

  if (tools) {
    jobTags.push(...tools);
  }

  if (languages) {
    jobTags.push(...languages);
  }

  return (
    <div
      className={`flex flex-col bg-white shadow-lg my-16 mx-10 p-6 rounded ${
        featured && "border-l-4 border-blue-500 border-solid"
      } lg:flex-row lg:my-4` }>
      <div>
        <img className="-mt-16 mb-4 w-20 h-20 lg:h-24 lg:w-24 lg:my-0" src={logo} alt={company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-blue-400">
          {company}
          {isNew && (
            <span className="text-blue-100 bg-blue-300 font-bold p-1 rounded-full m-2 py-1 px-2 uppercase text-sm">
              New!
            </span>
          )}
          {featured && (
            <span className="text-blue-100 bg-black font-bold p-1 rounded-full py-1 px-2 uppercase text-sm">
              Featured
            </span>
          )}
        </h3>

        <h2 className="font-bold text-xl my-2 lg:my-0" >{position}</h2>

        <p className="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0 cursor-pointer">
        {jobTags
          ? jobTags.map((jobTags) => (
              <span 
              onClick={() => 
                handleTagClick(jobTags)} 
                className="text-blue-400 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-0">
                {jobTags}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Job;

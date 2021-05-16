import React from "react";

const Job = ({
  job: {
    jobTitle,
    companyName,
    logo,
    // isOffer,
    salaryRangeMax,
    salaryRangeMin,
    keySkills,
    currentStatus
  }, 
  handleTagClick,
}) => {
  const skillTags = [];

  let isSalary = salaryRangeMin != null && salaryRangeMin >= 0 && salaryRangeMax != null && salaryRangeMax >= salaryRangeMin;

  if (keySkills) {
    skillTags.push(...keySkills.map((keySkill) => (keySkill.skill)));
  }

  const isOffer = currentStatus.toLowerCase() === "offer";

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0, 
    // (causes 2500.99 to be printed as $2,501)
  });
  // formatter.format(2500); /* $2,500.00 */

  return (
    <div
    // change featured to new for highlighting application status
      className={`flex flex-col bg-white shadow-lg my-16 mx-10 p-6 rounded ${
        isOffer && "border-l-4 border-blue-500 border-solid"
      } lg:flex-row lg:my-4` }>
      <div>
        <img className="-mt-16 mb-4 w-20 h-20 lg:h-24 lg:w-24 lg:my-0" src={logo} alt={companyName} />
      </div>
      <div className="flex flex-col justify-between ml-4 ">
        <h3 className="font-bold text-blue-400">
          {companyName}
          {/* {isOffer && (
            <span className="text-blue-100 bg-blue-300 font-bold p-1 rounded-full m-2 py-1 px-2 uppercase text-sm">
              Offer
            </span>
          )} */}

          {(
            <span className="text-blue-100 bg-black font-bold p-1 rounded-full m-1 py-1 px-2 uppercase text-sm">
              {currentStatus}
            </span>
          )}
        </h3>
        
        <h2 className="font-bold text-xl my-2 lg:my-0" >{jobTitle}</h2>

        {salaryRangeMin != null && salaryRangeMin >= 0 && salaryRangeMax != null && salaryRangeMax >= salaryRangeMin && (
          <p className="text-gray-700">
            {formatter.format(salaryRangeMin)} - {formatter.format(salaryRangeMax)}              
          </p>      
        )}

      </div>
      <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-500 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0 cursor-pointer">
        {skillTags
          ? skillTags.map((skillTag) => (
              <span 
              onClick={() => 
                handleTagClick(skillTag)} 
                className="text-blue-400 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-0">
                {skillTag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Job;

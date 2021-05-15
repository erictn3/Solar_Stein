import axios from "axios";
// Export an object containing methods we'll use for accessing the RandomUser API
export default {
  getUsers: function() {
    return axios.get("https://localhost.me/api/?results=100&nat=us");
  }

  getJobs: function( {
    const config = {
      method: 'get',
      url: 'http://localhost:3001/api/jobOpportunities'
    }
    
    return axios.get('http://localhost:3001/api/jobOpportunities', )
    data: {
      firstName: 'Finn',
      lastName: 'Williams'
    }
  }

};
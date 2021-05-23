import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // getUsers: function() {
  //   return axios.get('https://localhost.me/api/?results=100&nat=us');
  // },
  createUser: async function(user) {
    console.log('createUser()');
    console.log(user);
    const config = {
      method: 'POST',
      url: 'http://localhost:3001/api/users',
      data: user
    };
    let result = await axios(config);

    //let result = await axios.get('http://localhost:3001/api/jobopportunities');
    console.log(result.data);

    return result.data;
  },

  getJobs: async function() {
    const config = {
      method: 'get',
      // Local host change
      url: 'http://localhost:3001/api/jobopportunities'
    };
    let result = await axios(config);

    //let result = await axios.get('http://localhost:3001/api/jobopportunities');
    //console.log(result.data);

    return result.data;
  },

  getUser: async function(email) {
    console.log(`GET USER: ${email}`);
    const config = {
      method: 'POST',
      url: 'http://localhost:3001/api/users/get',
      data: { email }
    };
    console.log('GET USER CONFIG:');
    console.log(config);
    let result = await axios(config);

    console.log(result.data);
    return result.data;
  },

  signin: async function(user) {
    console.log('signin()');
    console.log(user);
    const config = {
      method: 'POST',
      url: 'http://localhost:3001/api/users/login',
      data: user
    };
    let result = await axios(config);

    //let result = await axios.get('http://localhost:3001/api/jobopportunities');
    console.log(result.data);

    return result.data;
  },

  logout: async function(user) {
    console.log('createUser()');
    console.log(user);
    const config = {
      method: 'POST',
      url: 'http://localhost:3001/api/users/logout',
      data: user
    };
    let result = await axios(config);

    //let result = await axios.get('http://localhost:3001/api/jobopportunities');
    console.log(result.data);

    return result.data;
  },

};
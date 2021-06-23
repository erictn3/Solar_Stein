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
      url: '/api/users',
      data: user
    };
    let result = await axios(config);

    console.log('RESPONSE HEADERS:');
    console.log(result.headers);
    console.log(result.data);

    return result.data;
  },

  createJob: async function(job) {
    console.log('createJob()');
    console.log(job);
    const config = {
      method: 'POST',
      url: '/api/jobopportunities',
      data: job
    };
    let result = await axios(config);

    return result.data;
  },

  getJobs: async function() {
    const config = {
      method: 'get',
      // Local host change
      url: '/api/jobopportunities'
    };
    let result = await axios(config);

    //let result = await axios.get('/api/jobopportunities');
    //console.log(result.data);

    return result.data;
  },

  getUser: async function(email) {
    console.log(`GET USER: ${email}`);
    const config = {
      method: 'POST',
      url: '/api/users/get',
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
      url: '/api/users/login',
      data: user
    };
    let result = await axios(config);

    //let result = await axios.get('/api/jobopportunities');
    console.log(result.data);

    return result.data;
  },

  logout: async function(user) {
    console.log('createUser()');
    console.log(user);
    const config = {
      method: 'POST',
      url: '/api/users/logout',
      data: user
    };
    let result = await axios(config);

    //let result = await axios.get('/api/jobopportunities');
    console.log(result.data);

    return result.data;
  },

};
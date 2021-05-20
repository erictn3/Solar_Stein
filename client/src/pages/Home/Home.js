import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import JobBoard from '../../components/Jobs/JobBoard';
import { Button } from '../../components/Buttons/Button';

const Home = () => {
  return (
    <div>
      <Navbar />
      <JobBoard />
      {/* <Button></Button> */}
    </div>
  )
}

export default Home

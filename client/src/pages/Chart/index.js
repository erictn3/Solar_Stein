import React from 'react';
import Chart from './Chart';
import Navbar from '../../components/Navbar/Navbar';

function ChartIndex() {
  return (
    <div className="App">
      <Navbar />
      <Chart legendPosition="bottom"/>
    </div>
  );
}

export default ChartIndex;

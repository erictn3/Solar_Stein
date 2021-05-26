import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Jobs from '../../components/Jobs/JobBoard';
import API from '../../utils/API';

function Chart(props) {
  const[chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    // API.getUser('eric@solarstein.io').then(user => {
    API.getJobs().then(jobs => {

      const jobsData = {
        applied: 0,
        phoneScreening: 0,
        technicalInterview: 0,
        codingChallenge: 0,
        onSite: 0,
        offer: 0
      };

      // console.log('USER:');
      // console.log(user);

      // if (user != null && user.jobOpportunities != null) {
      //   for (let job of user.jobOpportunities) {
        for (let job of jobs) {
          for (let stage of job.applicationStages) {
            switch(stage.name.toLowerCase().trim()) {
              case 'applied':
                jobsData.applied++;
                break;
              case 'phone screening':
                jobsData.phoneScreening++;
                break;
              case 'technical interview':
                jobsData.technicalInterview++;
                break;
              case 'coding challenge':
                jobsData.codingChallenge++;
                break;              
              case 'onsite':
                jobsData.onSite++;
                break;
              case 'offer':
                jobsData.offer++;
                break;
              default:
            }            
          }
        }
      // }

      const { applied, phoneScreening, technicalInterview, codingChallenge, onSite, offer } = jobsData;
      var stats = [applied, phoneScreening, technicalInterview, codingChallenge, onSite, offer];

      setChartData({
        labels: ['Applied', 'Phone Screening', 'Technical Interview', 'Coding Challenge', 'Onsite', 'Offer'], 
        datasets:[
          {
            label:'Job Opportunities',
            data: stats,
            backgroundColor: [
              'rgba(100,99,132,0.4)',
              'rgba(32,186,191,0.4)',
              'rgba(255,0,0,0.4)',
              'rgba(0,255,0,0.4)',
              'rgba(255,0,255,0.4)',
              'rgba(255,200,32,1)'
            ]
          }
        ]
      }

      );
    });
  }, []);

  return (
    <div className="chart">
      <Bar 
        data={chartData}
        options={{
          title: {
            display: props.displayTitle,
            text:'',
            fontSize:25
          },
          legend:{
            display: props.displayLegend, 
            position: props.legendPosition
          }
        }}  
      />
    </div>
  )
}

export default Chart;
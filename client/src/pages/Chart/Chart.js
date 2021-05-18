import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Applied', 'Phone Screening', 'Technical Interview', 'Coding Challenge', 'Onsite', 'Offer'], 
        datasets:[
          {
            label:'Job Opportunities',
            data:[
              110,
              40,
              30,
              10,
              10,
              5
            ],
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
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition:'right'
  }

  render() {
    return (
      <div className="chart">
        <Bar 
          data={this.state.chartData}
          options={{
            title: {
              display:this.props.displayTitle,
              text:'',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend, 
              position:this.props.legendPosition
            }
          }}  
        />
      </div>
    )
  }
}

export default Chart;
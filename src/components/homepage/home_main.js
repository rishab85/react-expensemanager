import React, {Component} from 'react';
import {Doughnut,Line} from 'react-chartjs-2';
import Paper from 'material-ui/Paper';

class Homemain extends Component{


  render(){
    const style ={
      height: 100,
 width: 100,
 margin: 20,
 textAlign: 'center',
 display: 'inline-block',
    }
    const data = {
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  };

  const linedata = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
    return(
      <div className="row">
      <div className="col-lg-12"><Paper style={style} zDepth={1} circle={true}>Hello</Paper></div>
        <div className="col-lg-6">
          <Doughnut data={data} />
        </div>
        <div className="col-lg-6">
          <Line data={linedata} />
        </div>
      </div>
    )
  }
}

export default Homemain;

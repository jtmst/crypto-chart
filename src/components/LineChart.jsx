import React from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Line
          width={100}
          height={500}
          data={{
            labels: this.props.dates,
            datasets: [
              {
                label: 'BTC',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: this.props.prices,
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: 'Bitcoin price (30 days)',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}

export default LineChart;

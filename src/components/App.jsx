import React from 'react';
import { hot } from 'react-hot-loader/root';
import LineChart from './LineChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: null,
      prices: null,
    };
  }

  componentDidMount() {
    fetch('/getChartData')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          dates: Object.keys(response),
          prices: Object.values(response),
        });
      })
      .catch((err) => {
        console.log('error fetching data: ', err);
      });
  }

  render() {
    return (
      <div>
        <h1>THIS IS A GRAPH</h1>
        <LineChart dates={this.state.dates} prices={this.state.prices} />
      </div>
    );
  }
}

export default hot(App);

import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import LineChart from './LineChart.jsx';
import Menu from './Menu.jsx';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dates: null,
//       prices: null,
//     };
//   }

//   componentDidMount() {
//     fetch('/getChartData')
//       .then((response) => {
//         return response.json();
//       })
//       .then((response) => {
//         this.setState({
//           dates: Object.keys(response),
//           prices: Object.values(response),
//         });
//       })
//       .catch((err) => {
//         console.log('error fetching data: ', err);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <Menu />
//         <LineChart dates={this.state.dates} prices={this.state.prices} />
//       </div>
//     );
//   }
// }

// refactor to utilize hooks

function App(props) {
  const [dates, setDates] = useState(null);
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    fetch('/getChartData')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setDates(Object.keys(response));
        setPrices(Object.values(response));
      })
      .catch((err) => {
        console.log('error fetching data: ', err);
      });
  });

  return (
    <div>
      <Menu />
      <LineChart dates={dates} prices={prices} />
    </div>
  );
}

export default hot(App);

import React, { Component } from 'react';

import './app.css';

class App extends Component {
  static priceRanges(prices) {
    const priceStatsArray = [0, 0, 0, 0];

    prices.forEach((price) => {
      priceStatsArray[price.price - 1] += 1;
    });

    return priceStatsArray;
  }

  constructor(props) {
    super(props);

    this.state = {
      prices: [],
    };
  }

  componentDidMount() {
    fetch('/api/v1/restaurants')
      .then((response) => (
        response.json()
      ))
      .then((data) => {
        this.setState({
          prices: App.priceRanges(data.data),
        });
      });
  }

  render() {
    const { prices } = this.state;
    let dollarString = '';

    return (
      <div className="app-container">
        <h2>Statistics</h2>
        <div className="stats-container">
          {
            prices.map((price) => {
              dollarString += '$';
              return (
                <div className="price-stats" key={price}>{`${dollarString} (${price})`}</div>
              );
            })
          }
          <p className="stats-disclaimer">Number of restaurants per price range</p>
        </div>
      </div>
    );
  }
}

export default App;

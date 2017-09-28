import React, { Component } from 'react';

const nullStats = {
  $: 0,
  $$: 0,
  $$$: 0,
  $$$$: 0,
};

const makeStats = (data) => { // eslint-disable-line
  return data.reduce((stats, restaurant) => {
    const copy = Object.assign({}, stats);
    switch (restaurant.price) {
      case 1:
        copy.$ += 0;
        break;
      case 2:
        copy.$$ += 1;
        break;
      case 3:
        copy.$$$ += 1;
        break;
      case 4:
        copy.$$$$ += 1;
        break;
      default:
        break;
    }
    return copy;
  }, nullStats);
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      stats: nullStats
    };
  }

  componentDidMount() {
    fetch('/api/v1/restaurants')
      .then(response => response.json())
      .then(({ data }) => {
        const stats = makeStats(data);
        this.setState({ stats });
      });
  }

  render() {
    return (
      <div>
        <h2>Statistics</h2>
        <div className="price-range">
          <ul>
            {
              Object.keys(this.state.stats).map(key => (
                <li key={key}>{key} ({this.state.stats[key]})</li>
              ))
            }
          </ul>
          <div>Number of restaurants per price range.</div>
        </div>
      </div>
    );
  }
}

export default App;

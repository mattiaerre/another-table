import React from 'react';
import PropTypes from 'prop-types';

const App = ({ restaurant }) => (
  <h1>{restaurant.name}</h1>
);

App.propTypes = {
  restaurant: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default App;

import React from 'react';


// return {1: 23, 2: 33, 3:33, '4: 0'}
const PriceBox = ({rangeNumber, numberofRestaurants}) => {
	let symbolString = '$'.repeat(rangeNumber + 1);

	return (
		<div>
			{symbolString}({numberofRestaurants})
		</div>
	)
}

const InfoBox = ({priceData}) => (
	<div>
		<PriceBox rangeNumber={0} numberofRestaurants={priceData['$']} />
		<PriceBox rangeNumber={1} numberofRestaurants={priceData['$$']} />
		<PriceBox rangeNumber={2} numberofRestaurants={priceData['$$$']} />
		<PriceBox rangeNumber={3} numberofRestaurants={priceData['$$$$']} />
	</div>
)


const App = () => {
	let priceData = {'$': 23, '$$': 33, '$$$':33, '$$$$': 0};

	return (
		<div>
			<h2>Statistics</h2>
  			<InfoBox priceData={priceData} />
		</div>
	);
};

export default App;

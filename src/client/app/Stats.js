import * as React from 'react';

export default class Stats extends React.Component{
	state;

	constructor(props){
		super(props);
		this.state = {
			data: null
		}
	}

	componentWillMount(){
		fetch('http://localhost:3000/api/v1/restaurants').then(resp => {
			const responseJson = resp.json();
			
			responseJson.then(response => {
				const { data } = response;
				this.setState({data: data});

			}).catch(err => {
				this.setState({data: null});
				console.log(err);
			})

		}).catch(function(err){
			console.log(err);
		});
	}

	renderPriceLayout(count) {
		return(
			<span>$</span>
		);
	}

	render(){

		const{ data } = this.state;

		const priceCountArr = [0, 0, 0, 0];

		if(data === null){
			return null;
		}

		data.map(record => {

			if(record.price === 1){
				priceCountArr[0] = priceCountArr[0] + 1;

			}

			if(record.price === 2){
				priceCountArr[1] = priceCountArr[1] + 1;

			}

			if(record.price === 3){
				priceCountArr[2] = priceCountArr[2] + 1;

			}

			if(record.price === 4){
				priceCountArr[3] = priceCountArr[3] + 1;

			}

		});


	return(
			<div className="main-container">	
				{priceCountArr.map((count, index) => (
					<div className="price-layout" key={index}>
					{ this.renderPriceLayout(count) }
					<span>{count}</span>
					</div>
				))}	
			</div>
		)
	}

}

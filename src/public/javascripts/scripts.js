let times = ["8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM" ];
times.map( (time, i)=> {
	//add the value & the text inside & append after the last option
	$(`<option value=${i}>${time}</option>`).appendTo('select#party_time');
})
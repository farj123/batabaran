// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d83025f23msh2355876d31891ddp17bfc7jsn44fb73b382c8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
// try {
// 	const response =  fetch(url, options);
// 	const result =  response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// this are not working 


function padTo2Digits(num) {
	return num.toString().padStart(2, '0');
}
  
function timeConvert(milliseconds) {
	let seconds = Math.floor(milliseconds / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);
  
	seconds = seconds % 60;
	minutes = minutes % 60;
	hours = hours % 24;
  
	return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
	  seconds,
	)}`;
  }



const getWeather = (city)=>{
cityName.innerHTML = city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
.then(Response => Response.json())
.then((Response) => 

{console.log(Response)

	cloud_pct.innerHTML = Response.cloud_pct
	// cloud_pct_1.innerHTML = Response.cloud_pct
	temp.innerHTML = Response.temp
	// temp_1.innerHTML = Response.temp
	feels_like.innerHTML = Response.feels_like
	// feels_like_1.innerHTML = Response.feels_like
	humidity.innerHTML = Response.humidity
	// humidity_1.innerHTML = Response.humidity
	humidity2.innerHTML = Response.humidity
	min_temp.innerHTML = Response.min_temp
	// min_temp_1.innerHTML = Response.min_temp
	max_temp.innerHTML = Response.max_temp
	// max_temp_1.innerHTML = Response.max_temp
	wind_speed.innerHTML  = Response.wind_speed
	// wind_speed_1.innerHTML  = Response.wind_speed
	wind_speed2.innerHTML  = Response.wind_speed
	wind_degrees.innerHTML = Response.wind_degrees
	// wind_degrees_1.innerHTML = Response.wind_degrees
	sunrise.innerHTML = Response.sunrise
	// sunrise_1.innerHTML = Response.sunrise
	sunset.innerHTML = Response.sunset
	// sunset_1.innerHTML = Response.sunset

})
.catch(err => console.error(err));
}

submit.addEventListener("click" , (e)=>{
	e.preventDefault();
	getWeather(city.value)
})

getWeather("Delhi")



const getWeather_1 = ()=>{
	// cityName_Shanghai.innerHTML = Shanghai;
	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai' , options)
	.then(Response => Response.json())
	.then((Response) => 
	
	{console.log(Response)
	
		cloud_pct_1.innerHTML = Response.cloud_pct
		temp_1.innerHTML = Response.temp
		feels_like_1.innerHTML = Response.feels_like
		humidity_1.innerHTML = Response.humidity
		min_temp_1.innerHTML = Response.min_temp
		max_temp_1.innerHTML = Response.max_temp
		wind_speed_1.innerHTML  = Response.wind_speed
		wind_degrees_1.innerHTML = Response.wind_degrees
		sunrise_1.innerHTML = Response.sunrise
		sunset_1.innerHTML = Response.sunset
	
	})
	.catch(err => console.error(err));
	}

	getWeather_1()


const getWeather_2 = ()=>{
		// cityName_Shanghai.innerHTML = Shanghai;
		
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow' , options)
	.then(Response => Response.json())
	.then((Response) => 
		
	{console.log(Response)
		
		cloud_pct_2.innerHTML = Response.cloud_pct
		temp_2.innerHTML = Response.temp
		feels_like_2.innerHTML = Response.feels_like
		humidity_2.innerHTML = Response.humidity
		min_temp_2.innerHTML = Response.min_temp
		max_temp_2.innerHTML = Response.max_temp
		wind_speed_2.innerHTML  = Response.wind_speed
		wind_degrees_2.innerHTML = Response.wind_degrees
		sunrise_2.innerHTML = Response.sunrise
		sunset_2.innerHTML = Response.sunset
		
	})
	.catch(err => console.error(err));
	}
	
	getWeather_2()



	const getWeather_3 = ()=>{
			
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London' , options)
	.then(Response => Response.json())
	.then((Response) => 
			
	{console.log(Response)
			
		cloud_pct_3.innerHTML = Response.cloud_pct
		temp_3.innerHTML = Response.temp
		feels_like_3.innerHTML = Response.feels_like
		humidity_3.innerHTML = Response.humidity
		min_temp_3.innerHTML = Response.min_temp
		max_temp_3.innerHTML = Response.max_temp
		wind_speed_3.innerHTML  = Response.wind_speed
		wind_degrees_3.innerHTML = Response.wind_degrees
		sunrise_3.innerHTML = Response.sunrise
		sunset_3.innerHTML = Response.sunset
		
	})
	.catch(err => console.error(err));
	}
		
	getWeather_3()


	const getWeather_4 = ()=>{
			
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai' , options)
		.then(Response => Response.json())
		.then((Response) => 
				
		{console.log(Response)
				
			cloud_pct_4.innerHTML = Response.cloud_pct
			temp_4.innerHTML = Response.temp
			feels_like_4.innerHTML = Response.feels_like
			humidity_4.innerHTML = Response.humidity
			min_temp_4.innerHTML = Response.min_temp
			max_temp_4.innerHTML = Response.max_temp
			wind_speed_4.innerHTML  = Response.wind_speed
			wind_degrees_4.innerHTML = Response.wind_degrees
			sunrise_4.innerHTML = Response.sunrise
			sunset_4.innerHTML = Response.sunset
			
		})
		.catch(err => console.error(err));
		}
			
		getWeather_4()
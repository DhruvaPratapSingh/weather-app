//  const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Seattle';
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42c6397e16msh1aac57ca9ff561bp1eba90jsnb6446742d2d1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) =>{
cityName.innerHTML = city;
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
 .then(Response => Response.json())
 .then((Response)=>{
	console.log(Response)
	cloud_pct.innerHTML =Response.cloud_pct
	Feels_like.innerHTML =Response.Feels_like
	humidity.innerHTML =Response.humidity
	Max_temp.innerHTML =Response.Max_temp
	Min_temp.innerHTML =Response.Min_temp
	sun_rise.innerHTML =Response.sun_rise
	sun_set.innerHTML =Response.sun_set
	temp.innerHTML =Response.temp
	temp1.innerHTML =Response.temp1
	wind_degree.innerHTML =Response.wind_degree
	wind_speed.innerHTML =Response.wind_speed
 })
 .catch(err => console.error(err));
}
 submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
 });
 getWeather("Delhi")

//  const url = 'https://national-weather-service.p.rapidapi.com/zones/%7Btype%7D/%7BzoneId%7D/forecast';
//  const options = {
// 	 method: 'GET',
// 	 headers: {
// 		 'X-RapidAPI-Key': '42c6397e16msh1aac57ca9ff561bp1eba90jsnb6446742d2d1',
// 		 'X-RapidAPI-Host': 'national-weather-service.p.rapidapi.com'
// 	 }
//  };
 
//  try {
// 	 const response = await fetch(url, options);
// 	 const result = await response.text();
// 	 console.log(result);
//  } catch (error) {
// 	 console.error(error);
//  }
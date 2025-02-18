url = `https://api.openweathermap.org/data/2.5/forecast?q=Novosibirsk&appid=e141b8f17ce637b7e460adc28a8f8895`;

// Fetch data from the API

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperatureCelsius = data.list[0].main.temp - 273.15;
    const weatherDescription = data.list[0].weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    let form = document.getElementById('form');
    form.innerHTML = `
    <div>        
        <div id="country">
            <h2>${data.city.name} ${data.city.country}</h2>
        </div>
        <div id="weather">
            <p>Temperature: ${temperatureCelsius.toFixed()}°C</p>
            <img src="${icon}">
            <p>${weatherDescription}</p>       
            <p>Speed wind: ${data.list[0].wind.speed * 3.6}</p>
            <p>Time of update weather forecast: ${data.list[0].dt_txt}</p>
            <p>Humidity: ${data.list[0].main.humidity} мм</p>   
            <p>Pressure: ${data.list[0].main.pressure} milibars</p>
        </div>
        <div id="Week-weather-forecast">

        </div>
    </div>
    `; 
    function renderWeeklyWeather(){
        var weather_forecast = document.getElementById("Week-weather-forecast");
        for(var i = 1; i < 8; i++){
            weather_forecast.innerHTML += `
            <p>Temperature: ${(data.list[i].main.temp - 273.15).toFixed()}°C</p>
            <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png">
            <p>${data.list[i].weather[0].description}</p>       
            <p>Speed wind: ${data.list[i].wind.speed * 3.6}</p>
            <p>Time of update weather forecast: ${data.list[i].dt_txt}</p>
            <p>Humidity: ${data.list[i].main.humidity} мм</p>   
            <p>Pressure: ${data.list[i].main.pressure} milibars</p>
            `;
        }
        
    }
    renderWeeklyWeather();
  }).catch(error => {error});
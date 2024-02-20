const swiperContainer = document.querySelector('.swiper-container');

const swiper = new Swiper(swiperContainer, {
  slidesPerView: 1,
  spaceBetween: 10, 
  breakpoints : {
    481: {
        slidesPerView: 5,
        spaceBetween: 10,
    }

  },
  draggable: true,
  
});


let enter = document.getElementById('input')
let button = document.getElementById('btn')

let weatherIcon =document.querySelector('.icon')
let weatherTemperature =document.querySelector('.degree')
let text = document.querySelector('.text')
let city = document.querySelector('.city-information')
let maxWeather = document.querySelector('.max-temp')
let minWeather = document.querySelector('.min-temp')

let todayWeathertext = document.getElementById('text')
let todayTemperature = document.getElementById('today-temp')
let sunsetSunrise = document.querySelector('.sunset-sunrise')
let humidity = document.querySelector('.humidity')
let uvIndex = document.querySelector('.uv-index')
let avgVisibility = document.querySelector('.avg-visibility')
let windDegree = document.querySelector('.wind-degree')
let windSpeed = document.querySelector('.wind-speed')
let windDirection = document.querySelector('.wind-direction')
let moonPhase = document.querySelector('.moon-phase')
let chanceOfRain = document.querySelector('.chance-of-rain')
let chanceOfSnow = document.querySelector('.chance-of-snow')
let pressure = document.querySelector('.pressure')



// the weather icons 
const humidityIcon = `<?xml version="1.0" ?><svg height="32" id="icon" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><defs><style>
.cls-1 {
  fill: none;
}
</style></defs><title/><path d="M23.4761,13.9932,16.8472,3.4365a1.04,1.04,0,0,0-1.6944,0L8.4941,14.0444A9.9861,9.9861,0,0,0,7,19a9,9,0,0,0,18,0A10.0632,10.0632,0,0,0,23.4761,13.9932ZM16,26.0005a7.0089,7.0089,0,0,1-7-7,7.978,7.978,0,0,1,1.2183-3.9438l.935-1.4888L21.2271,23.6411A6.9772,6.9772,0,0,1,16,26.0005Z"/><rect class="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32"/></svg>`

const uvIndexIcon = `<?xml version="1.0" ?><svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:#efcc00;}.cls-2{fill:none;stroke:#efcc00;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px;}.cls-3{fill:#fff;}</style></defs><title/><circle class="cls-1" cx="32" cy="32" r="17"/><line class="cls-2" x1="32" x2="32" y1="5" y2="11"/><line class="cls-2" x1="32" x2="32" y1="53" y2="59"/><line class="cls-2" x1="59" x2="53" y1="32" y2="32"/><line class="cls-2" x1="11" x2="5" y1="32" y2="32"/><line class="cls-2" x1="51.09" x2="46.85" y1="12.91" y2="17.15"/><line class="cls-2" x1="17.15" x2="12.91" y1="46.85" y2="51.09"/><line class="cls-2" x1="51.09" x2="46.85" y1="51.09" y2="46.85"/><line class="cls-2" x1="17.15" x2="12.91" y1="17.15" y2="12.91"/><path class="cls-3" d="M24.79,27.75V33.7c0,1.78.67,2.68,1.87,2.68s1.9-.86,1.9-2.68V27.75h2.33v5.79c0,3.19-1.61,4.7-4.3,4.7s-4.14-1.44-4.14-4.73V27.75Z"/><path class="cls-3" d="M35.35,38.08,32,27.75H34.6l1.26,4.37c.35,1.23.67,2.41.92,3.69h0c.26-1.24.58-2.47.93-3.65l1.32-4.41h2.48L38.07,38.08Z"/></svg>`

const avgVisibilityIcon = `<?xml version="1.0" ?><svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48H0z" fill="none"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/></svg>`

const windDegreeIcon = ``
const windSpeedIcon = `<?xml version="1.0" ?><svg enable-background="new 0 0 32 32" id="Outline" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><g><path d="M22,10H0V8h22c1.103,0,2-0.897,2-2s-0.897-2-2-2s-2,0.897-2,2h-2c0-2.206,1.794-4,4-4s4,1.794,4,4S24.206,10,22,10z"/><path d="M29,18h-1v-2h1c0.552,0,1-0.449,1-1s-0.448-1-1-1H18v-2h11c1.654,0,3,1.346,3,3S30.654,18,29,18z"/><path d="M23,22h-1v-2h1c0.552,0,1-0.449,1-1s-0.448-1-1-1H0v-2h23c1.654,0,3,1.346,3,3S24.654,22,23,22z"/><path d="M16,28c-2.206,0-4-1.794-4-4h2c0,1.103,0.897,2,2,2s2-0.897,2-2s-0.897-2-2-2H4v-2h12c2.206,0,4,1.794,4,4S18.206,28,16,28   z"/><rect height="2" width="2" x="2" y="12"/><rect height="2" width="10" x="6" y="12"/><rect height="2" width="2" y="20"/></g></svg>`
const moonPhaseIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.685 21.965c3.205-2.154 5.315-5.813 5.315-9.965s-2.11-7.811-5.315-9.965c5.202.353 9.315 4.673 9.315 9.965s-4.113 9.612-9.315 9.965z"/></svg>`
const chanceOfRainIcon = `<?xml version="1.0" ?><svg id="Glyph" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M41.54,46.33a1.29,1.29,0,0,1,1.61-.75A1.35,1.35,0,0,1,44,47.32l-1.61,4.21a1.44,1.44,0,0,1-1.74.74,1.37,1.37,0,0,1-.74-1.73Z"/><path d="M33.12,46.33a1.28,1.28,0,1,1,2.35,1l-2.85,7.8a1.29,1.29,0,0,1-1.74.75,1.31,1.31,0,0,1-.74-1.62Z"/><path d="M15.15,46.33a1.44,1.44,0,0,1,1.73-.75,1.39,1.39,0,0,1,.75,1.74l-2.85,7.8a1.33,1.33,0,0,1-1.74.75,1.3,1.3,0,0,1-.74-1.62Z"/><path d="M49.35,46.33A1.29,1.29,0,0,1,51,45.58a1.34,1.34,0,0,1,.86,1.74l-3,7.8a1.28,1.28,0,0,1-1.73.75,1.3,1.3,0,0,1-.75-1.62Z"/><path d="M33.61,9.78a18.83,18.83,0,0,1,6,3.84,17.28,17.28,0,0,1,4.33,7.43,6.91,6.91,0,0,1,2.23.37,7.72,7.72,0,0,1,2.23.75,10.07,10.07,0,0,1,5.46,6.07,10.49,10.49,0,0,1-.5,8.17,1.27,1.27,0,0,1-1.73.62A1.37,1.37,0,0,1,51,35.3a7.77,7.77,0,0,0,.37-6.2,8.21,8.21,0,0,0-4.09-4.58,9.31,9.31,0,0,0-1.74-.62,2.8,2.8,0,0,0-1-.12A12.78,12.78,0,0,1,44.64,26a19.21,19.21,0,0,1-.25,2.6,18.33,18.33,0,0,1-.5,2.6,1.37,1.37,0,1,1-2.6-.87,10.76,10.76,0,0,0,.5-2.1A14.23,14.23,0,0,0,42,26,15.32,15.32,0,0,0,37.7,15.48a15,15,0,0,0-5.82-3.6L31,11.63l-1.86-.37c-.62,0-1.24-.12-2-.12a14.69,14.69,0,0,0-10,4.09A14.48,14.48,0,0,0,12.42,25v1.11l-1.23.12a7.3,7.3,0,0,0-5.08,2.11,7.31,7.31,0,0,0,0,10.28,7.27,7.27,0,0,0,5.2,2.11c14.62,0,29.36-.25,44,0a4.69,4.69,0,0,0,3.35-1.49A4.79,4.79,0,0,0,60,35.92a5.77,5.77,0,0,0-.62-2.6,4.47,4.47,0,0,0-2-1.74L56.28,31l.62-1.11a17.67,17.67,0,0,0,.87-2.23A15.75,15.75,0,0,0,58,25.26a10,10,0,0,0-3-7.18,10.2,10.2,0,0,0-7.18-3H46.5l-1.37.25L45,14a6.87,6.87,0,0,0-2.36-4.21A6.24,6.24,0,0,0,38.19,8a6.13,6.13,0,0,0-3.34.87,7.2,7.2,0,0,0-1.24.87Z"/><path d="M24,46.33a1.28,1.28,0,1,1,2.35,1l-1.61,4.21a1.28,1.28,0,1,1-2.35-1Z"/></svg>`
const chanceOfSnowIcon = `<?xml version="1.0" ?><svg enable-background="new 0 0 32 32" id="Outline" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><g><path d="M8,28c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S9.654,28,8,28z M8,24c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1   S8.552,24,8,24z"/><path d="M16,30c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S17.654,30,16,30z M16,26c-0.552,0-1,0.448-1,1s0.448,1,1,1   s1-0.448,1-1S16.552,26,16,26z"/><path d="M24,28c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S25.654,28,24,28z M24,24c-0.552,0-1,0.448-1,1s0.448,1,1,1   s1-0.448,1-1S24.552,24,24,24z"/><g><path d="M23,20h-2v-2h2c2.757,0,5-2.243,5-5c0-2.515-1.876-4.646-4.364-4.958c-0.41-0.052-0.746-0.35-0.846-0.75    C22.011,4.177,19.219,2,16,2c-3.859,0-7,3.141-7,7c0,0.553-0.447,1-1,1c-2.206,0-4,1.794-4,4s1.794,4,4,4h7v2H8    c-3.309,0-6-2.691-6-6c0-2.984,2.19-5.467,5.047-5.925C7.512,3.546,11.35,0,16,0c3.916,0,7.341,2.507,8.547,6.173    C27.698,6.882,30,9.706,30,13C30,16.859,26.859,20,23,20z"/><rect height="2" width="2" x="17" y="18"/></g></g></svg>`
const pressureIcon = `<?xml version="1.0" ?><svg height="32" id="icon" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><defs><style>
.cls-1 {
  fill: none;
}
</style></defs><title/><path d="M22,30H10V25H6l10-9,10,9H22Z"/><path d="M16,16,6,7h4V2H22V7h4Z"/><rect class="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32"/></svg>`
const windDirectionIcon = `<?xml version="1.0" ?><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M1,11.5714286 L21,3 L12.4285714,23 L9.23529412,14.7647059 L1,11.5714286 Z M10.7810216,13.2189784 L12.5211751,17.7067427 L17.1921134,6.80788655 L6.29325726,11.4788249 L10.7810216,13.2189784 Z" fill-rule="evenodd"/></svg>`


// date function

const forecastDate = (localTime) =>{
    let date = new Date(localTime)
    // const daysOfTheWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
    const monthsOfTheYear = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    // const days = daysOfTheWeek[date.getDay()]
    const realDate = date.getDate()
    const year = date.getFullYear()
    const months = monthsOfTheYear[date.getMonth()]
    const hour = date.getHours()
    const minute = date.getMinutes()
    
    const second = new Date().getSeconds()

    // date formatting
    let dateSuffix = ''
    if (realDate == 1 || realDate == 21 || realDate == 31 ) {
        dateSuffix = 'st'
    }
    else if (realDate == 2 || realDate == 22) {
        dateSuffix = 'nd'
    }
    else if (realDate == 3 || realDate == 23){
        dateSuffix = 'rd'
    }
    else{
        dateSuffix = 'th'
    }
     
    // time formatting
    const formattedHour = hour < 10 ? `0${hour}` : hour
    const formattedMinute = minute < 10 ? `0${minute}` : minute
    const formattedSecond = second < 10 ? `0${second}` : second

    return `${realDate}${dateSuffix} of ${months}, ${year} - ${formattedHour}:${formattedMinute}:${formattedSecond}`
} 

const uvData = (uvIndex) =>{
    let uvCtn = ''
    if (uvIndex <= 2){
        return 'low'
    }
    else if (uvIndex >= 3 && uvIndex <=5) {
        return 'moderate'
    }
    else if (uvIndex == 6 || uvIndex == 7) {
        return 'High'
    }
    else if (uvIndex == 8 || uvIndex == 9 || uvIndex == 10) {
        return 'Very high'
    }
    else{
        return 'Extreme'
    }
    return `${uvCtn}`
}

// the is the api
const weatherData = (location) =>{
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'deddfbc86emshee46576b7dc0c87p19ca36jsn93908f8e80d0',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    }
    fetch(url, options)
        .then(res => {
            return res.json()
        }).then(data => {           
            showData(data)
            detailedWeatherData(data)
            hourlyWeatherForecast(data)
        })
        .catch( error =>{
            handleErrors(error)
    })
}

// this will display the default weather da
window.onload = () => {
    const defaultLocation = 'Ayobo';
    weatherData(defaultLocation);
}

// this handles errors
const handleErrors = (error) =>{
    console.log(error);
}

// this function is how the datas are being displayed on the browser
const showData = (data) =>{
    const localTime = data.location.localtime;
    const formattedDate = forecastDate(localTime);
    city.innerHTML =  `<p>${data.location.name}, ${data.location.region}, ${data.location.country}. As of ${formattedDate}</p>`;
    weatherIcon.innerHTML = `<img src=${data.current.condition.icon} alt="icon">`;
    weatherTemperature.innerHTML = `<p>${data.current.temp_c}&deg;<p>`;
    text.innerHTML = `${data.current.condition.text}`;
    maxWeather.innerHTML = `<p>Max Temperature:<span>${data.forecast.forecastday[0].day.maxtemp_c}&deg;</span></p>`;
    minWeather.innerHTML = `<p>Min Temperature:<span>${data.forecast.forecastday[0].day.mintemp_c}&deg;</span></p>`;
}

// this is another function scope to display some detailed weather information
const detailedWeatherData = (data) =>{
    
    console.log(data);
    // uvData = uv()
    todayWeathertext.innerHTML = `<p>Today's weather in ${data.location.name}, ${data.location.region}</p>`
    todayTemperature.innerHTML = `<div>Feels Like <p>${data.current.feelslike_c}&deg;</p></div>`
    sunsetSunrise.innerHTML =   `<p>Sunrise: ${data.forecast.forecastday[0].astro.sunrise}</p> <p>Sunset: ${data.forecast.forecastday[0].astro.sunset}</p>`

    humidity.innerHTML = `<div>
                            <span>${humidityIcon}</span>
                            <h1>Humidity: <p>${data.current.humidity}<p></h1>
                        <div>`
    pressure.innerHTML = `<div>
                            <span>${pressureIcon}</span>
                            <h1>Pressure: <p>${data.current.pressure_mb}<p></h1>
                        <div>`
    uvIndex.innerHTML = `<div>
                            <span>${uvIndexIcon}</span>
                            <h1>UV - Index:<p>${uvData(data.current.uv)}</p></h1>
                            <div>`
                            
    avgVisibility.innerHTML = `<div>
                            <span>${avgVisibilityIcon}</span>
                            <h1>Avg - Visibility : <p>${data.current.vis_km}km<p></h1>
                        <div>`
    windDegree.innerHTML = `<div>
                            <span>${windSpeedIcon}</span>
                            <h1>Wind degree : <p>${data.current.wind_degree}<p></h1>
                        <div>`
    windSpeed.innerHTML = `<div>
                            <span>${windSpeedIcon}</span>
                            <h1>Wind speed : <p>${data.current.wind_kph}kph<p></h1>
                        <div>`
    windDirection.innerHTML = `<div>
                            <span>${windDirectionIcon}</span>
                            <h1>Wind direction : <p>${data.current.wind_dir}<p></h1>
                        <div>`
    moonPhase.innerHTML = `<div>
                            <span>${moonPhaseIcon}</span>
                            <h1>Moon phase : <p>${data.forecast.forecastday[0].astro.moon_phase}<p></h1>
                        <div>`
    chanceOfRain.innerHTML = `<div>
                            <span>${chanceOfRainIcon}</span>
                            <h1>Chance of rainfall : <p>${data.forecast.forecastday[0].day.daily_chance_of_rain}<p></h1>
                        <div>`
    chanceOfSnow.innerHTML = `<div>
                            <span>${chanceOfSnowIcon}</span>
                            <h1>Chance of snow : <p>${data.forecast.forecastday[0].day.daily_chance_of_snow}<p></h1>
                        <div>`
    
}

const firstHour = (data) =>{
    const hour = document.querySelector('.hour00')
    const time = data.forecast.forecastday[0].hour[0].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[0].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[0].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[0].condition.text}</p>
                    </div>
    `
}

const secondHour = (data) =>{
    const hour = document.querySelector('.hour01')
    const time = data.forecast.forecastday[0].hour[1].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[1].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[1].condition.icon} alt="icon">
                       <p>${data.forecast.forecastday[0].hour[1].condition.text}</p>
                    </div> 
    `
}

const thirdHour = (data) =>{
    const hour = document.querySelector('.hour02')
    const time = data.forecast.forecastday[0].hour[2].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[2].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[2].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[2].condition.text}</p>
                    </div>
    `
}

const fourthHour = (data) =>{
    const hour = document.querySelector('.hour03')
    const time = data.forecast.forecastday[0].hour[3].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[3].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[3].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[3].condition.text}</p>
                    </div>
    `
}

const fifthHour = (data) =>{
    const hour = document.querySelector('.hour04')
    const time = data.forecast.forecastday[0].hour[4].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[4].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[4].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[4].condition.text}</p>
                    </div>
    `
}
const sixthHour = (data) =>{
    const hour = document.querySelector('.hour05')
    const time = data.forecast.forecastday[0].hour[5].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[5].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[5].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[5].condition.text}</p>
                    </div>
    `
}
const seventhHour = (data) =>{
    const hour = document.querySelector('.hour06')
    const time = data.forecast.forecastday[0].hour[6].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[6].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[6].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[6].condition.text}</p>
                    </div>
    `
}
const eightHour = (data) =>{
    const hour = document.querySelector('.hour07')
    const time = data.forecast.forecastday[0].hour[7].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[7].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[7].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[7].condition.text}</p>
                    </div>
    `
}
const ninthHour = (data) =>{
    const hour = document.querySelector('.hour08')
    const time = data.forecast.forecastday[0].hour[8].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[8].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[8].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[8].condition.text}</p>
                    </div>
    `
}
const tenthHour = (data) =>{
    const hour = document.querySelector('.hour09')
    const time = data.forecast.forecastday[0].hour[9].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[9].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[9].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[9].condition.text}</p>
                    </div>
    `
}
const eleventhHour = (data) =>{
    const hour = document.querySelector('.hour10')
    const time = data.forecast.forecastday[0].hour[10].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[10].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[10].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[10].condition.text}</p>
                    </div>
    `
}
const twelvethHour = (data) =>{
    const hour = document.querySelector('.hour11')
    const time = data.forecast.forecastday[0].hour[11].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[11].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[11].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[11].condition.text}</p>
                    </div>
    `
}
const thirteenthHour = (data) =>{
    const hour = document.querySelector('.hour12')
    const time = data.forecast.forecastday[0].hour[12].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[12].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[12].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[12].condition.text}</p>
                    </div>
    `
}
const fourteenthHour = (data) =>{
    const hour = document.querySelector('.hour13')
    const time = data.forecast.forecastday[0].hour[13].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[13].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[13].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[13].condition.text}</p>
                    </div>                    
    `
}
const fifteenthHour = (data) =>{
    const hour = document.querySelector('.hour14')
    const time = data.forecast.forecastday[0].hour[14].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[14].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[14].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[14].condition.text}</p>
                    </div>
    `
}
const sixteenthHour = (data) =>{
    const hour = document.querySelector('.hour15')
    const time = data.forecast.forecastday[0].hour[15].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[15].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[15].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[15].condition.text}</p>
                    </div>
    `
}
const seventeenthHour = (data) =>{
    const hour = document.querySelector('.hour16')
    const time = data.forecast.forecastday[0].hour[16].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[16].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[16].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[16].condition.text}</p>
                    </div>
    `
}
const eighteenthHour = (data) =>{
    const hour = document.querySelector('.hour17')
    const time = data.forecast.forecastday[0].hour[17].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[17].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[17].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[17].condition.text}</p>                       
                    </div>
    `
}
const nineteenthHour = (data) =>{
    const hour = document.querySelector('.hour18')
    const time = data.forecast.forecastday[0].hour[18].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[18].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[18].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[18].condition.text}</p>
                    </div>
    `
}
const twentiethHour = (data) =>{
    const hour = document.querySelector('.hour19')
    const time = data.forecast.forecastday[0].hour[19].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[19].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[19].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[19].condition.text}</p>
                    </div>
    `
}
const twentyFirstHour = (data) =>{
    const hour = document.querySelector('.hour20')
    const time = data.forecast.forecastday[0].hour[20].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[20].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[20].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[20].condition.text}</p>
                    </div>
    `
}
const twentySecondHour = (data) =>{
    const hour = document.querySelector('.hour21')
    const time = data.forecast.forecastday[0].hour[21].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[21].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[21].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[21].condition.text}</p>
                    </div>
    `
}
const twentyThirdHour = (data) =>{
    const hour = document.querySelector('.hour22')
    const time = data.forecast.forecastday[0].hour[22].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[22].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[22].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[22].condition.text}</p>
                    </div>
    `
}
const twentyFourthHour = (data) =>{
    const hour = document.querySelector('.hour23')
    const time = data.forecast.forecastday[0].hour[23].time.split(' ')[1]; 
    const [hourValue, minuteValue] = time.split(':'); 
    const formattedTime = `${hourValue}:${minuteValue}`; 
    hour.innerHTML = `
                    <div>
                        <p>${formattedTime}</p>
                        <h1>${data.forecast.forecastday[0].hour[23].temp_c}&deg;</h1>
                        <img src=${data.forecast.forecastday[0].hour[23].condition.icon} alt="icon">
                        <p>${data.forecast.forecastday[0].hour[23].condition.text}</p>
                    </div>
    `
}


                
// hourly weather information
const hourlyWeatherForecast = (data) =>{
    const hourlyText = document.querySelector('.hourly-message')
    hourlyText.innerHTML = `<h1>Hourly Forecast</h1>`
    
    firstHour(data)
    secondHour(data)
    thirdHour(data)
    fourthHour(data)
    fifthHour(data)
    sixthHour(data)
    seventhHour(data)
    eightHour(data)
    ninthHour(data)
    tenthHour(data)
    eleventhHour(data)
    twelvethHour(data)
    thirteenthHour(data)
    fourteenthHour(data)
    fifteenthHour(data)
    sixteenthHour(data)
    seventeenthHour(data)
    eighteenthHour(data)
    nineteenthHour(data)
    twentiethHour(data)
    twentyFirstHour(data)
    twentySecondHour(data)
    twentyThirdHour(data)
    twentyFourthHour(data)
}



// this button when clicked display the weather information
button.addEventListener('click', ()=>{
    let location = input.value
    weatherData(location)
})



   
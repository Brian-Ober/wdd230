

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=25d629e84171afcf41759ef986d9508d";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    const temp = ((jsObject.main.temp -273.15) * 1.8 + 32).toFixed(2);
    const windspeed = (jsObject.wind.speed)
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#caption').textContent = desc;
    if (temp < 50 && windspeed > 3) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    document.querySelector('#windchill').innerHTML = chill + '&#8457';}
    else {
    document.querySelector('#windchill').textContent = "N/A";
    }
    document.querySelector('#temp').textContent = temp;
    document.querySelector('#wind').textContent = windspeed;
}
getWeather();
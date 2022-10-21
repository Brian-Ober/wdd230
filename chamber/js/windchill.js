let temp = 49
let windspeed = 9
if (temp < 50 && windspeed > 3) {
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    document.querySelector('#windchill').innerHTML = chill + '&#8457';
}
else {
    document.querySelector('#windchill').textContent = "N/A";
}

document.querySelector('#temp').textContent = temp;
document.querySelector('#wind').textContent = windspeed;
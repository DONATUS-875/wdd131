const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const temperature = 28
const windSpeed = 10

document.querySelector("#temperature").textContent = temperature;
document.querySelector("#windspeed").textContent = windSpeed;

function calculateWindChill(temp, speed){
    return (
        13.12 + 0.6215 * temp - 11.13 * Math.pow(speed, 0.16) + 0.9635 * temp * Math.pow(speed, 0.16) 
    ).toFixed(1);
}

const windChill = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed)}`;
} else {
    windChill.textContent = "N/A"
}
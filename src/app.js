function displayTemperature(response){
    console.log(response.data);
    let temperatureElement=document.querySelector("#temperature");
    let cityElement=document.querySelector("#city");
    let descriptionElment=document.querySelector("#description");
    let humidityElment=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    temperatureElement.innerHTML=Math.round(response.data.main.temp);
    cityElement.innerHTML=response.data.name;
    descriptionElment.innerHTML=response.data.weather[0].description;
    humidityElment.innerHTML=response.data.main.humidity;
    windElement.innerHTML=Math.round(response.data.wind.speed);
}

let apiKey="619ae46dd09153325c06122c8c0b4325";      
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=Bali&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
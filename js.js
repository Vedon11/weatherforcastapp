function getWeather() {
    let city = document.getElementById("city").value;
    
    if (!city) {
        document.getElementById("weatherResult").innerHTML = "Please enter a city name.";
        return;
    }

    let functionUrl = "https://weatherappstoragecc.blob.core.windows.net/website-assets/js.js"; // Replace with your function URL

    fetch(${functionUrl}?city=${city})
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherResult").innerHTML = 
                Temperature: ${data.main.temp}°C, Weather: ${data.weather[0].description};
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = "Error fetching weather data.";
        });
}
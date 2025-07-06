async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = '9ad3831da3c98bab96d43a261c1c67da';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('weatherResult').innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById('weatherResult').innerText = "City not found!";
    }
  } catch (error) {
    document.getElementById('weatherResult').innerText = "Error fetching weather data.";
    console.error("Fetch error:", error);
  }
}



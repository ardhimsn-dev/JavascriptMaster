async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const temp = data.main.temp;
    const description = data.weather[0].description;

    document.getElementById("weatherResult").innerHTML = `
      <p>🌡️ Temperature: ${temp} °C</p>
      <p>☁️ Weather: ${description}</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

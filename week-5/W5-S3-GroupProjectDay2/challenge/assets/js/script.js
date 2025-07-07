document.addEventListener("DOMContentLoaded", function () {
  const API_KEY = "f23ee9deb4e1a7450f3157c44ed020e1";
  const resultDiv = document.getElementById("weatherResult");
  const loading = document.getElementById("loading");

  let isCelsius = true;
  let currentTempC = null;
  let feelsLikeC = null;

  document.getElementById("getWeather").addEventListener("click", async function () {
    const city = document.getElementById("city").value.trim();
    resultDiv.innerHTML = "";
    document.getElementById("suggestion").innerHTML = "";
    if (!city) return (resultDiv.innerHTML = "<p>Please enter a city name.</p>");

    loading.style.display = "block";

    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`;
      const geoResponse = await fetch(geoUrl);
      const geoData = await geoResponse.json();

      if (!geoData.length) return (resultDiv.innerHTML = "<p>City not found.</p>");

      const { lat, lon } = geoData[0];
      await fetchWeatherByCoords(lat, lon);
    } catch (error) {
      resultDiv.innerHTML = "<p>Error loading weather.</p>";
    } finally {
      loading.style.display = "none";
    }
  });

  async function fetchWeatherByCoords(lat, lon) {
    loading.style.display = "block";
    resultDiv.innerHTML = "";
    document.getElementById("suggestion").innerHTML = "";

    try {
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const currentResponse = await fetch(currentUrl);
      const currentData = await currentResponse.json();

      currentTempC = currentData.main.temp;
      feelsLikeC = currentData.main.feels_like;

      let currentHTML = `
        <h2>Today's Weather in ${currentData.name}</h2>
        <p><strong>${currentData.weather[0].main}</strong> - ${currentData.weather[0].description}</p>
        <p>🌡️ Temperature: ${currentTempC.toFixed(1)} °C</p>
        <p>💧 Humidity: ${currentData.main.humidity}%</p>
        <p>🌬️ Wind: ${currentData.wind.speed} m/s</p>
        <img src="https://openweathermap.org/img/wn/${currentData.weather[0].icon}.png" alt="${currentData.weather[0].description}">
        <hr>
      `;

      const sunrise = new Date(currentData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const sunset = new Date(currentData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      currentHTML += `
        <h4>🌅 Sunrise: ${sunrise}</h4>
        <h4>🌇 Sunset: ${sunset}</h4>
        <h4>🌡️ Feels Like: ${feelsLikeC.toFixed(1)} °C</h4>
      `;

      const condition = currentData.weather[0].main.toLowerCase();
      setWeatherBackground(condition);

      const { suggestion, imgUrl } = getClothingSuggestion(condition, currentTempC);
      document.getElementById("suggestion").innerHTML = `
        <h4>👕 What to Wear</h4>
        <p>${suggestion}</p>
        <img src="${imgUrl}" alt="Clothing Suggestion">
      `;

      resultDiv.innerHTML = currentHTML;
    } catch (error) {
      resultDiv.innerHTML = "<p>Weather fetch failed.</p>";
    } finally {
      loading.style.display = "none";
    }
  }

  function getClothingSuggestion(condition, temp) {
    let suggestion = "", imgUrl = "";
    if (condition.includes("rain")) {
      suggestion = "Wear a waterproof jacket and take an umbrella!";
      imgUrl = "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";
    } else if (condition.includes("snow")) {
      suggestion = "Dress warmly—coat, scarf, gloves.";
      imgUrl = "https://cdn-icons-png.flaticon.com/512/3075/3075977.png";
    } else if (condition.includes("clear") && temp > 25) {
      suggestion = "Sunny! Wear light clothes and sunglasses.";
      imgUrl = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    } else if (condition.includes("cloud")) {
      suggestion = "Cloudy skies—carry a light jacket.";
      imgUrl = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
    } else {
      suggestion = "Check local updates, wear layers!";
      imgUrl = "https://cdn-icons-png.flaticon.com/512/947/947845.png";
    }
    return { suggestion, imgUrl };
  }

  function setWeatherBackground(condition) {
    const body = document.body;
    body.style.backgroundImage = "";
    body.classList.remove("weather-rain", "weather-snow");

    if (condition.includes("rain")) {
      body.style.backgroundImage = "url('https://i.gifer.com/P8jP.gif')";
      body.classList.add("weather-rain");
    } else if (condition.includes("cloud")) {
      body.style.backgroundImage = "url('https://i.gifer.com/LSzq.gif')";
    } else if (condition.includes("clear")) {
      body.style.backgroundImage = "url('https://i.gifer.com/Lx0q.gif')";
    } else if (condition.includes("snow")) {
      body.style.backgroundImage = "url('https://i.gifer.com/3gF.gif')";
      body.classList.add("weather-snow");
    } else {
      body.style.backgroundImage = "url('https://i.gifer.com/fzmZ.gif')";
    }
  }

  document.getElementById("modeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
  });

  document.getElementById("unitToggle").addEventListener("click", function () {
    if (currentTempC === null) return;
    isCelsius = !isCelsius;
    const tempUnit = isCelsius ? "°C" : "°F";
    const convertedTemp = isCelsius ? currentTempC : (currentTempC * 9) / 5 + 32;
    const convertedFeelsLike = isCelsius ? feelsLikeC : (feelsLikeC * 9) / 5 + 32;

    const pTags = document.querySelector("#weatherResult").querySelectorAll("p");
    pTags[1].textContent = `🌡️ Temperature: ${convertedTemp.toFixed(1)} ${tempUnit}`;
    pTags[pTags.length - 1].textContent = `🌡️ Feels Like: ${convertedFeelsLike.toFixed(1)} ${tempUnit}`;
    this.textContent = isCelsius ? "Switch to °F" : "Switch to °C";
  });
    // Set initial background image based on weather condition

    // Set initial background image for clear weather

    document.body.style.backgroundImage = "url('https://i.gifer.com/fzmZ.gif')"; // Default background image for clear weather
    document.body.style.backgroundSize = "cover"; // Ensure the background image covers the entire body
    document.body.style.backgroundPosition = "center"; // Center the background image
    document.body.style.backgroundRepeat = "no-repeat"; // Prevent background image from repeating

  // Auto-detect location on load

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      await fetchWeatherByCoords(lat, lon);
    });
  }
});

// const API_KEY = "f23ee9deb4e1a7450f3157c44ed020e1";

// // First, get the latitude and longitude for the city
// const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

// // Call getWeather API when the button is clicked
// const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("getWeather").addEventListener("click", async function () {
        const city = document.getElementById("city").value.trim();
        const resultDiv = document.getElementById("weatherResult");
        resultDiv.innerHTML = "";

        if (!city) {
            resultDiv.innerHTML = "<p>Please enter a city name.</p>";
            return;
        }

        const API_KEY = "f23ee9deb4e1a7450f3157c44ed020e1";

        try {
            // 1. Get coordinates
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`;
            const geoResponse = await fetch(geoUrl);
            const geoData = await geoResponse.json();

            if (!geoData.length) {
                resultDiv.innerHTML = "<p>City not found.</p>";
                return;
            }

            const { lat, lon } = geoData[0];

            // 2. Get today's weather
            const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            const currentResponse = await fetch(currentUrl);
            const currentData = await currentResponse.json();

            let currentHTML = `
                <h2>Today's Weather in ${currentData.name}</h2>
                <p><strong>${currentData.weather[0].main}</strong> - ${currentData.weather[0].description}</p>
                <p>🌡️ Temperature: ${currentData.main.temp} °C</p>
                <p>💧 Humidity: ${currentData.main.humidity}%</p>
                <p>🌬️ Wind: ${currentData.wind.speed} m/s</p>
                <img src="https://openweathermap.org/img/wn/${currentData.weather[0].icon}.png" alt="${currentData.weather[0].description}">
                <hr>
            `;

            // 3. Get 5-day forecast
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            const forecastResponse = await fetch(forecastUrl);
            const forecastData = await forecastResponse.json();

            const dailyForecast = {};
            forecastData.list.forEach(entry => {
                const date = entry.dt_txt.split(" ")[0];
                if (!dailyForecast[date] && entry.dt_txt.includes("12:00:00")) {
                    dailyForecast[date] = entry;
                }
            });

            let forecastHTML = `<h2>5-Day Forecast</h2><div style="display:flex;gap:16px;overflow-x:auto;padding:10px;">`;
            for (const date in dailyForecast) {
                const day = dailyForecast[date];
                const weekday = new Date(day.dt_txt).toLocaleDateString(undefined, { weekday: "short" });
                forecastHTML += `
                    <div style="text-align:center;min-width:100px;">
                        <strong>${weekday}</strong><br>
                        <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}" title="${day.weather[0].description}">
                        <div>${day.main.temp_min.toFixed(0)}° / ${day.main.temp_max.toFixed(0)}°</div>
                    </div>
                `;
            }
            forecastHTML += "</div>";

            //add sunrise and sunset
            const sunrise = new Date(currentData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const sunset = new Date(currentData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            currentHTML += `
                <h2>Sunrise and Sunset</h2>
                <p>🌅 Sunrise: ${sunrise}</p>   
                <p>🌇 Sunset: ${sunset}</p>
            `;   
            //feel like temperature
            const feelsLike = currentData.main.feels_like.toFixed(0);
            currentHTML += `
                <h2>Feels Like</h2>
                <p>🌡️ Feels Like: ${feelsLike} °C</p>
            `;
            
forecastHTML = `
    <h2>5-Day Forecast</h2>
    <div style="display:flex;gap:16px;overflow-x:auto;padding:10px;scroll-snap-type:x mandatory;">
`;

for (const date in dailyForecast) {
    const day = dailyForecast[date];
    const weekday = new Date(day.dt_txt).toLocaleDateString(undefined, { weekday: "short" });

    forecastHTML += `
        <div style="
            text-align:center;
            min-width:100px;
            scroll-snap-align: start;
            background-color: rgba(255,255,255,0.05);
            padding: 8px;
            border-radius: 10px;
            flex-shrink: 0;
        ">
            <strong>${weekday}</strong><br>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}" title="${day.weather[0].description}">
            <div>${day.main.temp_min.toFixed(0)}° / ${day.main.temp_max.toFixed(0)}°</div>
        </div>
    `;
}
function setWeatherBackground(condition) {
    const body = document.body;
    body.style.backgroundImage = "";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";

    if (condition.includes("rain")) {
        body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?rain')";
    } else if (condition.includes("cloud")) {
        body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?cloudy')";
    } else if (condition.includes("clear")) {
        body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?sun')";
    } else if (condition.includes("snow")) {
        body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?snow')";
    } else {
        body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?weather')";
    }
    setWeatherBackground(currentData.weather[0].main.toLowerCase());

}
forecastHTML += "</div>";   

            resultDiv.innerHTML = currentHTML + forecastHTML;

        } catch (error) {
            console.error("Error:", error);
            resultDiv.innerHTML = "<p>Failed to load weather data. Please try again later.</p>";
        }
        document.getElementById("modeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});
document.body.classList.add("light-mode"); // Default mode
        setWeatherBackground(currentData.weather[0].main.toLowerCase());
    });
});

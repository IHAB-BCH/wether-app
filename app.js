let container = document.querySelector(".container");
let searchBox = document.querySelector(".search_box");
let searchButton = document.querySelector(".search_button");
let wetherBox = document.querySelector("wether_box");
let humidity = document.querySelector(".humidity span");
let wether_details = document.querySelector(".wether_details");
let wind = document.querySelector(".wind span");
let temp = document.querySelector(".temp");
let image = document.querySelector(".wether_box img");
let oops = document.querySelector(".oops");
searchButton.addEventListener("click", (e) => {
  const search = document.querySelector(".search_box input");

  if (search === "") return;
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=2fcfe85d925d4fceb98183416230408&q=${search.value}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if (data.location === undefined) {
        container.style.height = "400px";
        wind.style.opacity = "0";
        humidity.style.opacity = "0";
        oops.style.display = "block";
      }
      switch (data.current.condition.text) {
        case "Clear":
        case "Sunny":
          image.src = "resources/clear.png";
          container.style.height = "600px";
          wind.style.opacity = "1";
          humidity.style.opacity = "1";
          oops.style.display = "none";
          break;

        case "Snow":
          image.src = "resources/snow.png";
          container.style.height = "600px";
          wind.style.opacity = "1";
          humidity.style.opacity = "1";
          oops.style.display = "none";
          break;
        case "Light rain":
        case "Moderate rain":
        case "Moderate or heavy rain shower":
          image.src = "resources/rain.png";
          container.style.height = "600px";
          wind.style.opacity = "1";
          humidity.style.opacity = "1";
          oops.style.display = "none";
          break;
        case "Mist":
          image.src = "resources/mist.png";
          container.style.height = "600px";
          wind.style.opacity = "1";
          humidity.style.opacity = "1";
          oops.style.display = "none";
          break;
        case "Partly cloudy":
        case "Overcast":
          image.src = "resources/cloud.png";
          container.style.height = "600px";
          wind.style.opacity = "1";
          humidity.style.opacity = "1";
          oops.style.display = "none";
          break;
      }
      const temperature = document.querySelector(".temp .temperature");
      const condition = document.querySelector(".temp .condition");
      temperature.innerHTML = `${parseInt(data.current.temp_c)}°C`;
      condition.innerHTML = data.current.condition.text;
      wind.innerHTML = `${parseInt(data.current.wind_kph)} km/h`;
      humidity.innerHTML = `${parseInt(data.current.humidity)}`;
    });
});

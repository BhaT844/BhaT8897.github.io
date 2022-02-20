const API_KEY = "a7672843a14c4f02421214bcaf161858";

const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather strong:last-child");
        const city = document.querySelector("#weather strong:first-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name
    });
};

navigator.geolocation.getCurrentPosition(onGeoOk, () => {});

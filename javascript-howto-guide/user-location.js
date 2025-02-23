const successfulLookup = position => {
    const { latitude, longitude } = position.coords;
    fetch(https://api.opencagedata.com/geocode/v1/json?q=+&key=YOUR_API_KEY)
        .then(response => response.json())
        .then(data => console.log(data));
};

window.navigator.geolocation.getCurrentPosition(successfulLookup, console.log);

let allDays = [];
let searchInput = document.getElementById("searchbar");
searchInput.addEventListener("input", function (e) {
    let cname = (e.target.value);
    getData(cname);

})
async function getData(name) {
    var apiResp = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=69a088a307af4d6884c144844240301&q=${name}&days=3`
    );
    var finalResult = await apiResp.json();
    allDays = finalResult;
    displayCurrentDay();
    secondDay();
    Thirday();
}
getData("cairo");

function displayCurrentDay() {
    let dateString = allDays.forecast.forecastday[0].date;
    let dateObject = new Date(dateString);
    let day = dateObject.toLocaleDateString('default', {
        weekday: 'long'
    });
    let daynumber = dateObject.getDate();
    let month = dateObject.toLocaleDateString('default', {
        month: 'long'
    });
    document.querySelector(".dayname").innerHTML = day;
    document.querySelector(".daydate").innerHTML = daynumber + month;
    document.querySelector(".location").innerHTML = allDays.location.name;
    document.querySelector(".temp").innerHTML = allDays.current.feelslike_c + "°C";
    document.querySelector(".disc").innerHTML = allDays.current.condition.text;
    let imgElement = document.querySelector(".img2");
    imgElement.src = allDays.current.condition.icon
}

function secondDay() {
    let dateString = allDays.forecast.forecastday[1].date;
    let dateObject = new Date(dateString);
    let day = dateObject.toLocaleDateString("default", {
        weekday: "long"
    });
    document.querySelector(".dayname3").innerHTML = day;
    let imgElement = document.querySelector(".img3");
    imgElement.src = allDays.forecast.forecastday[1].day.condition.icon;
    document.querySelector(".temp3").innerHTML = allDays.forecast.forecastday[1].day.maxtemp_c + "°C";
    document.querySelector(".temp31").innerHTML = allDays.forecast.forecastday[1].day.mintemp_c + "°C";
    document.querySelector(".disc3").innerHTML = allDays.forecast.forecastday[1].day.condition.text;
}

function Thirday() {
    let dateString = allDays.forecast.forecastday[2].date;
    let dateObject = new Date(dateString);
    let day = dateObject.toLocaleDateString("default", {
        weekday: "long"
    });
    document.querySelector(".dayname4").innerHTML = day;
    let imgElement = document.querySelector(".img4");
    imgElement.src = allDays.forecast.forecastday[1].day.condition.icon;
    document.querySelector(".temp4").innerHTML = allDays.forecast.forecastday[2].day.maxtemp_c + "°C";
    document.querySelector(".temp41").innerHTML = allDays.forecast.forecastday[2].day.mintemp_c + "°C";
    document.querySelector(".disc4").innerHTML = allDays.forecast.forecastday[2].day.condition.text;
}
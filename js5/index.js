var weather;
var input = document.getElementById('input')


function getData(city) {
    var xml = new XMLHttpRequest();
    xml.open('GET', `https://api.weatherapi.com/v1/forecast.json?key=a2034aeb37e64fc5ad463724231902&q=${city}&days=3`);
    xml.send();
    xml.addEventListener('readystatechange', function () {
        if (xml.readyState == 4 && xml.status == 200) {
            weather = JSON.parse(xml.response)
            display();
        }
    })
};

getData('cairo');

function display() {
    var box = '';
    for (var i = 0; i < weather.forecast.forecastday.length; i++) {
        box += `
        <div class="col-md-4 bg-primary-subtle">
        <p>${weather.location.name}</p>
        <p>${weather.forecast.forecastday[i].date}</p>
        <p>${weather.forecast.forecastday[i].day.condition.text}</p>
        <p>${weather.forecast.forecastday[i].day.mintemp_c}</p>
        <p>${weather.forecast.forecastday[i].day.maxtemp_c}</p>
        <img src=${weather.forecast.forecastday[i].day.condition.icon}>
        </div>
        `
    }
    row.innerHTML = box;
   
}

function search(ele){
    getData(ele)
}
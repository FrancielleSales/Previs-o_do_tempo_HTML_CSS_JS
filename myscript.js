    //Global variables
    var btCheck = document.getElementById("idBtCheck");
    var fieldset = document.getElementById("idFildsetResult").hidden = true;

    //Start application
    btCheck.onclick = function () {
        seekWeather();
    }

   //Seek weather
    function seekWeather() {

        let cityCode = (document.getElementById("idCities").value);

        getWeather(cityCode);
    }

    //Get weather from external API
    function getWeather(cityCode) {
        var xhr = new XMLHttpRequest();

        //Searching by city code
        xhr.open("GET", "https://api.hgbrasil.com/weather?format=json-cors&key=1827d62b&woeid=" + cityCode + "")           

        xhr.addEventListener("load", function () {
            var answer = xhr.responseText;
            printData(answer)
        })
        xhr.send();
    }

    //Print data
    function printData(cityJson) {
        console.log(cityJson);

        let cityObj = JSON.parse(cityJson);

        document.getElementById("idDate").innerText = "Data: " + cityObj.results.date;
        document.getElementById("idCityName").innerText = "Cidade: " + cityObj.results.city;
        document.getElementById("idWeather").innerText = "Condição: " + cityObj.results.description;
        document.getElementById("idTemperature").innerText = "Temperatura: " + cityObj.results.temp + "°C";
        document.getElementById("idHumidity").innerText = "Umidade relativa: " + cityObj.results.humidity + "%";
        document.getElementById("idSunrise").innerText = "Nascer do sol: " + cityObj.results.sunrise;
        document.getElementById("idSunset").innerText = "Pôr do sol: " + cityObj.results.sunset;

        let fieldset = document.getElementById("idFildsetResult").hidden = false;

        console.log(cityObj.results.city);
    }
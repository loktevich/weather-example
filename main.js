$(function () {
    // const ACCESS_KEY = "3e4f9ea5d081aeaac363090093143f97";
    const ACCESS_KEY = "9216f20406c03eef00a05ca12e88a3b1";

    makeAPICall("http://api.openweathermap.org/data/2.5/weather?q=Vitebsk&units=metric&appid=" + ACCESS_KEY);
    // createTodayCard(getWeather());
    // makeAPICall("https://api.weatherstack.com/forecast?access_key=" + ACCESS_KEY + "&query=Vitebsk&unit=m");
    // createWeekCards("dfdfgdfgdfsg");

    function createTodayCard(response) {

        console.log("Hello");
        

        const weatherFullData = {
            city: response.name,
            country: response.sys.country,
            time: response.dt,
            icon: "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png",
            iconDescription: response.weather[0].description,
            temperature: response.main.temp,
            wind: response.wind.speed,
            humidity: response.main.humidity,
            pressure: response.main.pressure
        }

        $("<img src='" + weatherFullData.icon + "'>").appendTo("body");
    }

    function makeAPICall(url) {
        $.ajax({
            dataType: "json",
            url: url,
            success: function (resp) {
                createTodayCard(resp);
            },
            error: function (err, status) {
                // действия если ошибка
            }
        });
    }


});
function loadDate() {
    var currentDate = new Date();
    var dateString = currentDate.toString()
                        .split(" ")
                        .splice(0,4)
                        .join(" ");
                        
    $("#date").text(dateString);
}

function loadWeather() {
    var weather = $("#weather");
    var url = "https://api.forecast.io/forecast/";
    var apiKey = "85a83c26a1dd4afa7644b05d99d91d15"
}

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
function(data) {
    weather.text("Based on your current location, it is " + data.currently.temperature + "° F right now");

    });
}

function error() {
    alert("Unable to retrieve your location for weather");
}
navigator.geolocation.getCurrentPosition(success, error);

weather.text("fetching weather...");

function loadNews() {
    var news = $("#news");
    var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=";
    var apiKey = "367b5efb65384d97b42dbc82ef5d0005";
    
    $.getJSON(url + apiKey, function(date) {
        var titles = data.articles.map(function(articles) {
            return "<a href='" + articles.url + "'>" + articles.title + "</a>";
        });
        
        news.html(titles.join("<br><br>"));
    });
    
    news.text("fetching news...")
}

loadDate();
loadWeather();
loadNews();
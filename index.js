

var unirest = require("unirest");
var req = unirest("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats");
req.query({
    "country": "Brazil"
});
req.headers({
	"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
	"x-rapidapi-key": "77aede94demsh13d00d37d485ef4p1701f7jsnf35638a199a3"
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body.data);
});
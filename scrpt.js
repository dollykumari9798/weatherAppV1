const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f5286414d2mshe148c57cd903c69p1b6d6cjsndeef52e6e0ea",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

var Dataset = {};
// var dataset = {

//     "cloud_pct": 49,
//     "temp": 42,
//     "feels_like": 39,
//     "humidity": 8,
//     "min_temp": 42,
//     "max_temp": 42,
//     "wind_speed": 6.33,
//     "wind_degrees": 318,
//     "sunrise": 1681948142,
//     "sunset": 1681994222
//   }
function addData(data,ctynm) {
  var store = Object.values(data);
  var secondRow = document.getElementById("dataset");
  var str1 = secondRow.children;
  str1[0].innerHTML = ctynm;
  for (var i = 0; i < 10; i++) {
    str1[i + 1].innerHTML = store[i];
  }
}
var input =document.getElementById("ctynm");
var btn = document.getElementById("refresh");
btn.addEventListener("click", () => {
  var cty = input.value;
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cty}&country=India`, options)
	.then(response => response.json())
	.then(response => addData(response,cty))
	.catch(err => console.error(err));
  
});

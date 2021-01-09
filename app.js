var cont = document.querySelector(".container");

var btn = document.querySelector("button");
var input = document.querySelector("input");

var poster = document.getElementById("poster")

var title = document.getElementById("title")

var actors = document.getElementById("actors")
var movie = document.getElementById("movie")

var plot = document.getElementById("plot")
var rating = document.querySelector(".rating");

btn.addEventListener("click", function(){
    var name = "";
   name =  input.value

   gsap.from(".movie", {
    durtion: 3,
    y: 200,
    opacity: 1,
    ease: 
Power1.
easeOut

})

   var url = "http://www.omdbapi.com/?t="+name+"&apikey=201a5972"

   fetch(url)
   .then(response => {
   
       return response.json();
   }).then(data => {
   
   
    console.log(data)
   
   
title.innerHTML = data.Title;
actors.innerHTML = data.Actors;
poster.src = data.Poster;
   plot.innerHTML = data.Plot;

   rating.innerHTML = data.Rated;

   
   if(data.Rated === "TV-MA"){
       rating.style.background = "orange"
   } else if(data.Rated === "G"){
    rating.style.background = "green"
   } else if (data.Rated === "R"){
    rating.style.background = "red"
   } else if(data.Rated === "PG-13" || "PG"){
    rating.style.background = "dodgerblue"
   }
   });


})


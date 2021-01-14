var cont = document.querySelector(".container");

var btn = document.querySelector("button");
var input = document.querySelector("input");

var poster = document.getElementById("poster")

var title = document.getElementById("title")

var actors = document.getElementById("actors")
var movie = document.getElementById("movie")

var plot = document.getElementById("plot")
var rating = document.querySelector(".rating");
var grid = document.querySelector(".moviegrid");
var valid = document.querySelector(".valid")

gsap.from(".valid",{
    duration: 1,
    y: 100
})


btn.addEventListener("click", function(){


    gsap.from(".moviegrid", {
        duration: 1,
        y: -100,
        opacity: 0
    })
    

    if(input.value === ''){
        valid.innerHTML = "Please Enter a Movie Name"
        valid.style.color ="#ff3f34";
    } else if (input.value != ''){
        valid.innerHTML = ""
        valid.style.color ="#fff";
        
    }



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

   var url = "http://www.omdbapi.com/?s="+name+"&apikey=201a5972"

   fetch(url)
   .then(response => {
   
       return response.json();
   }).then(data => {
   
   var movies = data.Search
 

var output = '';

   for(var i in movies){



output +=
'<div class="flip-card">' +
'<div class="flip-card-inner">' +
'  <div class="flip-card-front">' +
'<img src=' + '"' + movies[i].Poster + '"' + '>' +
'  </div>' +
'<div class="flip-card-back">' +
' <h3>' + movies[i].Title + '</h3>' +
' <h4>'+ movies[i].Year + '</h4>' +
'<p></p>' +
'   </div>' +
'   </div>' +
'   </div>';



grid.innerHTML = output

    console.log(movies[i])




   }


   })


})


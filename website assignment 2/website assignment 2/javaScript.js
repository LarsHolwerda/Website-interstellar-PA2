// Creating the Artist class.
class Artist {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
}
// Creating the Director class as an extention of the Artist class.
class Director extends Artist {
  constructor(name, birthYear, moviesDirected) {
    super(name, birthYear);
    this.moviesDirected = moviesDirected;
  }
}
// Creating the Writer class as an extention of the Artist class.
class Writer extends Artist {
  constructor(name, birthYear, booksWritten) {
    super(name, birthYear);
    this.booksWritten = booksWritten;
  }
}
// Creating the Actor class as an extention of the Artist class, to store the stars.
class Actor extends Artist {
  constructor(name, birthYear, moviesStarred, pictureLink) {
    super(name, birthYear);
    this.moviesStarred = moviesStarred;
    this.pictureLink = pictureLink;
  }
}
// Creating the Movie class as a class that containts the structural representation of the entire film.
class Movie {
  constructor(
    title,
    genre,
    year,
    director,
    writers,
    stars,
    poster,
    trailer,
    plot
  ) {
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.director = director;
    this.writers = writers;
    this.stars = stars;
    this.poster = poster;
    this.trailer = trailer;
    this.plot = plot;
  }      

  // Add the title, genre, year, plot, director, writers, stars, poster and trailer to the actual webpage.
    render() {

        //Title header
        const titleHeaderTag = document.createElement("h1");
        const titleHeaderText = document.createTextNode(this.title);
        titleHeaderTag.appendChild(titleHeaderText);
        document.body.appendChild(titleHeaderTag);

        //Genre body
        const GenreTag = document.createElement("p");
        const GenreText = document.createTextNode("Genre: " + this.genre);
        GenreTag.appendChild(GenreText);
        document.body.appendChild(GenreTag);

        //Year body
        const yearTag = document.createElement("p");
        const yearText = document.createTextNode("Year: " + this.year);
        yearTag.appendChild(yearText);
        document.body.appendChild(yearTag);

        //Plot header
        const plotHeaderTag = document.createElement("h2");
        const plotHeaderText = document.createTextNode("The plot");
        plotHeaderTag.appendChild(plotHeaderText);
        document.body.appendChild(plotHeaderTag);
        //Plot body
        const plotBodyTag = document.createElement("p");
        const plotBodyText = document.createTextNode(this.plot);
        plotBodyTag.appendChild(plotBodyText);
        document.body.appendChild(plotBodyTag);

        //Director header
        const directorHeaderTag = document.createElement("h2");
        const directorHeaderText = document.createTextNode("The director");
        directorHeaderTag.appendChild(directorHeaderText);
        document.body.appendChild(directorHeaderTag);
        //Director body
        var directorBodyTag = document.createElement("p");
        directorBodyTag.id = "director";
        var directorBodyText = document.createTextNode(this.director.name);
        
        var tooltipDivDirector = document.createElement("div");
        var tooltipTextDivDirector = document.createElement("div");

        tooltipDivDirector.className = "tooltip";
        tooltipTextDivDirector.className = "tooltip--text";

        document.body.appendChild(directorBodyTag);
        directorBodyTag.appendChild(tooltipDivDirector);
        tooltipDivDirector.appendChild(directorBodyText);
        tooltipDivDirector.appendChild(tooltipTextDivDirector);
        
        

        //Writers header
        const writerHeaderTag = document.createElement("h2");
        const writerHeaderText = document.createTextNode("The writers");
        writerHeaderTag.appendChild(writerHeaderText);
        document.body.appendChild(writerHeaderTag);
        //Writers body
        movie.writers.forEach(function(writer) {
            var writerBodyTag = document.createElement("p");
            writerBodyTag.id = "writer";
            var writerBodyText = document.createTextNode(writer.name);

            var tooltipDivWriter = document.createElement("div");
            var tooltipTextDivWriter = document.createElement("div");

            tooltipDivWriter.className = "tooltip";
            tooltipTextDivWriter.className = "tooltip--text";

            document.body.appendChild(writerBodyTag);
            writerBodyTag.appendChild(tooltipDivWriter);
            tooltipDivWriter.appendChild(writerBodyText);
            tooltipDivWriter.appendChild(tooltipTextDivWriter);
            
        });
        
        //Stars header
        const starHeaderTag = document.createElement("h2");
        const starHeaderText = document.createTextNode("The actors")
        starHeaderTag.appendChild(starHeaderText);
        document.body.appendChild(starHeaderTag)
        //Stars body
        movie.stars.forEach(function(star){
            var starBodyTag = document.createElement("p");
            var starBodyText = document.createTextNode(star.name);
            starBodyTag.appendChild(starBodyText);
            document.body.appendChild(starBodyTag);
            
        })

        //Poster header
        const posterHeaderTag = document.createElement("h3");
        const posterHeaderText = document.createTextNode("The poster")
        posterHeaderTag.appendChild(posterHeaderText);
        document.body.appendChild(posterHeaderTag)
        //Poster Link
        const posterImageTag = document.createElement("img");
        posterImageTag.setAttribute("src", this.poster);
        posterImageTag.setAttribute("alt", "The Interstellar movie poster. A snowy unknown planet with an astronaut in the centre.");
        document.body.appendChild(posterImageTag);

        //Trailer header
        const trailerHeaderTag = document.createElement("h3");
        const trailerHeaderText = document.createTextNode("The trailer")
        trailerHeaderTag.appendChild(trailerHeaderText);
        document.body.appendChild(trailerHeaderTag)
        //Trailer link
        const trailerLinkTag = document.createElement('video');
        trailerLinkTag.src = this.trailer;
        trailerLinkTag.type = 'video/mp4';
        trailerLinkTag.controls = true;
        document.body.appendChild(trailerLinkTag);

  }
}

//Create instance of the director
const director = new Director("Chrisopher Nolan", 1970, [
  "Memento",
  "Tenet",
  "Inception",
]);
//Create instances of the writers
const writer1 = new Writer("Jonathan Nolan", 1976, [
  "The Prestige",
  "Westworld",
]);
const writer2 = new Writer("Woody allen", 1980, ["Book 3", "Book 4"]);

//Create instances of the stars
const star1 = new Actor(
  "Matthew McConaughey",
  1969,
  ["Dallas Buyers Club", "Mud"],
  "images/matthew.jpeg"
);
const star2 = new Actor(
  "Anne Hathaway",
  1982,
  ["Les Misérable", "The Dark Night Rises"],
  "images/anne.jpeg"
);
const star3 = new Actor(
  "Jessica Chastain",
  1977,
  ["Zero Dark Thirty", "Molly's Game"],
  "images/jessica.jpeg"
);

//Create instances of the movie (,using the objects created above).
const movie = new Movie(
  "Interstellar",
  "Science fiction",
  2014,
  director,
  [writer1, writer2],
  [star1, star2, star3],
  "images/poster.jpg",
  "videos/trailer.mp4",
  "In 2067, a global famine caused humanity to abandon scientific pursuits such as space exploration. Ex-NASA pilot Joseph Cooper is forced to work as a farmer. One day, Cooper experiences a gravitational anomaly in his daughter Murph's bedroom. He deduces it to be a pattern of GPS coordinates and arrives at a secret NASA facility headed by Professor Brand. Brand explains to Cooper that it is engaged in a secret mission to discover an exoplanet capable of supporting life and that he is working on a gravity-equation. He enlists Cooper's help to pilot an exploratory spacecraft with three other scientists - Romilly, Doyle, and Brand's daughter Amelia. The crew travels through a wormhole on board the Endurance to pass through to another galaxy. Their mission is to investigate three planets, orbiting a supermassive black hole called Gargantua, each of which was previously explored by a NASA scientist-explorer."
);

//Run the render function
movie.render();


const arrArtist = [];
console.log(arrArtist)
function addArtistsToList () { 
    var newContent = document.createTextNode(movie.director.name);
    arrArtist.push(newContent);
  
    for (let i = 0; i < movie.writers.length; i++){
        var newContent = document.createTextNode(movie.writers[i].name);
        arrArtist.push(newContent);
    }

    for (let i = 0; i < movie.stars.length; i++){
        var newContent = document.createTextNode(movie.stars[i].name);
        arrArtist.push(newContent);
    }
}
document.body.onload = addArtistsToList;
// eventlistener for the tooltip
var items = document.getElementsByClassName("tool");
function uitvoeren()
{
    var collectie = document.getElementsByTagName("*")

    for (let i = 0; i < collectie.length; i++) {
        if ((collectie[i].id == "director") || (collectie[i].id == "writer")) {
        
            collectie[i].addEventListener("mouseover", func, false);
            collectie[i].addEventListener("mouseleave", textReset, false);
        }

    }
    
}


var starNames = []
for (let i = 0; i < movie.stars.length; i++) {
  starNames.push(movie.stars[i].name)
}

var writerNames = []
for (let i = 0; i < movie.writers.length; i++) {
  writerNames.push(movie.writers[i].name)
}


// get the right text for the tooltip
function func()
{  
  var tooltip = document.querySelector(".tooltip--text");
  var targetItem = event.target;
  var appearedIn = [];
  var tooltipHasBeenSet = false;
  for (let i = 0; i < arrArtist.length; i++) {
          if (starNames.includes(arrArtist[i].textContent)) {
              for (let j = 0; j < movie.stars.length; j++) {
                if (targetItem.className == movie.stars[j].name){
                    appearedIn = appearedIn.concat(movie.stars[j].moviesStarred);
                    tooltip.textContent = arrArtist[i].textContent + " stars in the following movies: " + appearedIn.join(", ");                  
                }
              }
          }

          
          if (writerNames.includes(arrArtist[i].textContent)) {
            for (let x = 0; x < movie.writers.length; x++) {
              if (targetItem.textContent == movie.writers[x].name){
                if (!tooltipHasBeenSet) {
                      appearedIn = appearedIn.concat(movie.writers[x].booksWritten);
                      tooltip.textContent = arrArtist[i].textContent + " has written the following books: " + appearedIn.join(", ");
                }
              }
            }
          }

          if (movie.director.name == arrArtist[i].textContent) {
              if (targetItem.textContent == movie.director.name){
                      appearedIn = appearedIn.concat(movie.director.moviesDirected);
                      tooltip.textContent = arrArtist[i].textContent + " has directed the following movies: " + appearedIn.join(", ");
              }
          }

          
      }
    
  }
function textReset () {
  var tooltip = document.querySelector(".tooltip--text");
  tooltip.textContent = "";
}
window.addEventListener("load", uitvoeren, false);
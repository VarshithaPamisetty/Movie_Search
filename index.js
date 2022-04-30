const moviesJson = require('./movies.json');
class MovieAPI {
	constructor(movies) {
		this.movies = movies;
	}

	fetchAllMovies(){
		return this.movies;
	}
}


const API = new MovieAPI(moviesJson);
const allMovies = API.fetchAllMovies();

//add ids and random ratings for all movies
allMovies.forEach((movie, i) => {
	movie.id = i + 1 ;
	rating = Math.random() * (4) + 1;
	movie.rating = Math.round(rating * 10) / 10;
  });

  // create temporary variables to store allMovies so that the original array doesnt get affected
  var temp1 = allMovies;
  var temp2 = allMovies;
  var temp3 = allMovies;
  var temp4 = allMovies;
  var temp5 = allMovies;
  var temp6 = allMovies;
  
  // calculate the no. of movies present
  var length = allMovies.length;

  // function to filter out movies based on genre
  var result1 = [];
  function search_on_genre(new_genre) {
	result1 = (temp1.filter(movie => movie.genre == new_genre));
	return result1;
  }
  console.log(search_on_genre("Action"));

  // function to remove a movie with the given id
  function remove_element_with_id(id){
	const filtered = temp4.filter(movie => movie.id !== id);
	console.log(filtered);
  }
  remove_element_with_id(1);

  // function to filter out elements based on subtitle and thumb
  var result2 = [];
  function search_on_subtitle_thumb(new_subtitle, new_thumb) {
	result2 = (temp2.filter(movie => ((movie.subtitle).includes(new_subtitle)) && (movie.thumb == new_thumb)));
	return result2;
  }
  console.log(search_on_subtitle_thumb("Blender","images/ElephantsDream.jpg"));

  // function to search a movie based on its title
  var result3 = [];
  function search_by_name(name) {
	result3 = (temp3.filter(movie => (movie.title).includes(name)));
	return result3;
  }
  console.log(search_by_name("Steel"));

  // sort movies based on rating
  var result4a = [];
  result4a = allMovies;
  result4a.sort(function(a, b) {
	return a.rating - b.rating;
  });
  // function to display two top rated and two bottom rated movies
  function print_top_bottom_rated_movies(){
	return [result4a[1], result4a[2], result4a[length-2], result4a[length - 1]];
  }
  console.log(print_top_bottom_rated_movies());

  // function to print top 3 rated movies
  function print_top3_rated(){
	  for(let i = 1; i <= 3; i++){
		  console.log(result4a[i]);
	  }
  }
  console.log(print_top3_rated());

  // sort movies in reverse order based on rating
  result4b = allMovies;
  result4b.sort(function(a, b) {
	return b.rating - a.rating;
  });
  // function to sort movies in reverse rating order
  function print_reverse_rated_movies(){
	return result4b;
  }
  console.log(print_reverse_rated_movies());

  // function to search movie with the given id
  var result5 = [];
  function search_by_id(id) {
	result5 = (temp5.filter(movie => (movie.id == id)));
	return result5;
  }
  console.log(search_by_id(2));

  // function to update the title of a movie with the given id
  function change_title(new_id, new_title){
	temp6.forEach((movie) => {
		if (movie.id == new_id){
			movie.title = new_title;
		}
  });
}
change_title(2,"Elephant Day Dream");
console.log(temp6);

// function to add a movie to the list
function add_movie(description,sources,subtitle,thumb,title,genre){
	allMovies.push([description,sources,subtitle,thumb,title,genre]);
  }
  add_movie("The Smoking Tire meets up","http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4","By Google","images/WeAreGoingOnBullrun.jpg","We Are Going On Bullrunnn","Romance");
  allMovies.sort(function(a, b) {
	return a.id - b.id;
  }); 
  console.log(allMovies);

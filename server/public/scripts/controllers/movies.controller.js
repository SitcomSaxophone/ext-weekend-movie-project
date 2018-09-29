app.controller('MovieController', ['$http', function($http) {
    console.log('Movie Controller loaded');
    const vm = this;

let vm = this;

vm.movies = []

// GET all movies
vm.getMovies = function() {
    $http.get('/movies')
    .then(function(response) {
        console.log('response', response);
        vm.movies = response.data;
    })
}

// ADD(POST) a movie to the database
vm.addMovie = function (movie) {
    console.log(movie);
    let movieToAdd = { title: movies.title, release_date: movies.release_date, run_time: movies.run_time, image: movies.image, genre_id: movies.genre_id};
    $http({
        method: 'POST',
        url: 'movies',
        data: movieToAdd
    }).then((response) => {
        console.log('Error posting new listing:', error);
    });
    vm.getAllMovies();
} // end addMovie

vm.getAllMovies();


// DELETE a movie from the database
vm.deleteMovie = function(id) {
    $http.delete(`/movies/`, {params : {id: id}})
    .then(function() {
        vm.getAllMovies()
    })
};


    
}]); // end MovieApp.controller
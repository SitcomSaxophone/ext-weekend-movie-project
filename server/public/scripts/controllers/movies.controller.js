app.controller('MovieController', ['$http', function($http) {
    console.log('Movie Controller loaded');
    var self = this;

    self.movieArray = [];

    // GET all movies
    self.getAllMovies = function () {
        $http({
            method: 'GET',
            url: '/movies'
        }).then(function (response) {
            console.log('getAllMovies successful', response.data);
            self.movieArray = response.data;
        }).catch(function (error) {
            console.log('error getting properties from database', error);
        });
    };


    // ADD(POST) a movie to the database
    self.addMovie = function (movie) {
        console.log(movie);
        let movieToAdd = { title: movies.title, release_date: movies.release_date, run_time: movies.run_time, image: movies.image, genre_id: movies.genre_id };
        $http({
            method: 'POST',
            url: '/movies',
            data: movieToAdd
        }).then((response) => {
            console.log('Error posting new listing:', error);
        });
        self.getAllMovies();
    }; // end addMovie


    // DELETE a movie from the database
    self.deleteMovie = function (id) {
        $http.delete(`/movies/`, { params: { id: id } })
            .then(function () {
                self.getAllMovies();
            })
    };

    self.getAllMovies();


}]); // end MovieApp.controller
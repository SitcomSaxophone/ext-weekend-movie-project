app.controller('MovieController', ['$http', function ($http) {
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
        let movieToAdd = {
            title: movie.title,
            release_date: movie.release_date,
            run_time: movie.run_time,
            image: movie.image,
            genre_id: movie.genre_id
        };
        $http({
            method: 'POST',
            url: '/movies',
            data: movieToAdd
        }).then((response) => {
            console.log('Success posting new movie:', response);
        });
        self.getAllMovies();
    }; // end addMovie


    // DELETE a movie from the database
    self.deleteMovie = function (id) {
        $http.delete(`/movies/` + id)
            .then(function (response) {
                console.log('delete successful', response);
                self.getAllMovies();
            }).catch(function (error) {
                console.log('error deleting movies from database', error);
            });
    };

    // GET all genres
    self.getAllGenres = function () {
        $http({
            method: 'GET',
            url: '/genres/all'
        }).then(function (response) {
            console.log('getAllGenres successful', response.data);
            self.genreArray = response.data;
        }).catch(function (error) {
            console.log('error getting genres from database', error);
        });
    };

    // added 9/30
    // GET genre names 
    // self.getGenreName = function () {
    //     $http({
    //         method: 'GET',
    //         url: '/genres',
    //     }).then((response) => {
    //         console.log(response.data);
    //         self.genreArray = response.data;
    //     }).catch((error) => {
    //         console.log('error getting genre names from database', error);
    //     })
    // };


    self.getAllMovies();

    self.getAllGenres();



}]); // end MovieApp.controller
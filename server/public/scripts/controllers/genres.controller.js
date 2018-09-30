app.controller('GenreController', ['$http', function($http) {
    console.log('Genre Controller loaded');

    var self = this;
    self.genreArray = [];

// GET total number of movies in each genre
self.getGenresTotals = function () {
    $http({
        method: 'GET',
        url: '/genres',
    }).then((response) => {
        console.log(response.data);
        self.genreArray = response.data;
    }).catch((error) => {
        console.log('error getting genres from database', error);
    })
};




// Add (POST) a genre to the database
self.addNewGenre = function (genres) {
    console.log(genres);
    let GenreToAdd = { genre: genre.genre };
    $http({
        method: 'POST',
        url: '/genres',
        data: GenreToAdd
    }).then((response) => {
        console.log('The /genre POST was successful', response);
        vm.getAllGenres();
    }).catch((error) => {
        console.log('Error posting new genre:', error);
    })
};

self.getGenresTotals();
    
}])
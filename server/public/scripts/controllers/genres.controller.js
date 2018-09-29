app.controller('GenreController', ['$http', function($http) {
    console.log('Genre Controller loaded');
    const vm = this;

// GET total number of movies in each genre
vm.getGenresTotals = function () {
    S$http({
        method: 'GET',
        url: '/genres',
    }).then((response) => {
        console.log(response.data.results);
        vm.genreArray = response.data.results;
    }).catch((error) => {
        console.log('error getting properties from database', error);
    })
};




// Add (POST) a genre to the database
vm.addGenre = function (genres) {
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

vm.getAllMovies();
    
}])
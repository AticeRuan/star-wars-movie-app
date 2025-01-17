var moviesJSON=require('../movies.json');

exports.home=function(req,res){
    var movies=moviesJSON.movies;

    res.render('home',
{
    title:'Star Wars Movies',
    movies:movies,
    
});
};


//movie_single
exports.movie_single=function(req,res){ 

    var episode_number=req.params.episode_number;

    var movies=moviesJSON.movies;
    
    if (episode_number>9 || episode_number<1)
    {
        res.render('notFound',
    {
        movies:movies,
        title:'This is not the page you are looking for',
    });
    }
    else{    
        var movie=movies[episode_number-1];
        var title=movie.title;
        var main_characters=movie.main_characters;
        res.render('movie_single',
{
    title:title,
    movies:movies,
    movie:movie,
    main_characters:main_characters,
});}


};   

//not found
exports.notFound=function(req,res){ 
    var movies=moviesJSON.movies;
    res.render('notFound',
    {
        movies:movies,
        title:'This is not the page you are looking for',
    }
);
}
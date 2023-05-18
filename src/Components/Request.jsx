const key="afdbb2907c42df2f424e56c79cb4bf0c";


const request={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopReade:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTranding:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHerror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_ad`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

}

export default request;
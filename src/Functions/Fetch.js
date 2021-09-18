

export const getPopular = (state) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1825685076bae9d03ecba21a1d98f9f3&language=en-US&page=1`)
    .then((res) => res.json())
    .then((res) => {
        state(res.results)
    })
}

export const getTopRated = (state) => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=1825685076bae9d03ecba21a1d98f9f3&language=en-US&page=1`)
    .then((res) => res.json())
    .then((res) => {
        state(res.results)
    })
}

export const getUpcoming = (state) => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1825685076bae9d03ecba21a1d98f9f3&language=en-US&page=1`)
    .then((res) => res.json())
    .then((res) => {
        state(res.results)
    })
}

export const getNowPlaying = (state) => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1825685076bae9d03ecba21a1d98f9f3&language=en-US&page=1`)
    .then((res) => res.json())
    .then((res) => {
        state(res.results)
    })
}

export const getMovie = (id, state) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1825685076bae9d03ecba21a1d98f9f3&language=en-US`)
    .then((res) => res.json())
    .then((res) => {
        state(res)
    })
}

export const getSearch = (id, state) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=1825685076bae9d03ecba21a1d98f9f3&language=en-US&page=1&include_adult=false&query=${id}`)
    .then((res) => res.json())
    .then((res) => {
        state(res.results)
    })
}
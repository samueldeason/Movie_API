

export const getPopular = (state: any) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1825685076bae9d03ecba21a1d98f9f3&language=en-US&page=1`)
    .then((res) => res.json())
    .then((res) => {
        state(res.results)
    })
}

export const getTopRated = (state: any) => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=1825685076bae9d03ecba21a1d98f9f3&language=en-US&page=1`)
    .then((res) => res.json())
    .then((res) => {
        state(res.results)
    })
}

export const getUpcoming = (state: any) => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=1825685076bae9d03ecba21a1d98f9f3&language=en-US&page=1`)
    .then((res) => res.json())
    .then((res) => {
        state(res.results)
    })
}

export const getNowPlaying = (state: any) => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1825685076bae9d03ecba21a1d98f9f3&language=en-US&page=1`)
    .then((res) => res.json())
    .then((res) => {
        state(res.results)
    })
}

export const getMovie = (id: any, state: any) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1825685076bae9d03ecba21a1d98f9f3&language=en-US`)
    .then((res) => res.json())
    .then((res) => {
        state(res)
    })
}
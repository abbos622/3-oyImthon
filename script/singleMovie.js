const movieIdInURL = +new URLSearchParams(window.location.search).get("productId");
const singleTitle = document.querySelector(".single-title")
const singleComent = document.querySelector(".single-coment")
const singleCountry = document.querySelector(".single-country")
const singleImg = document.querySelector(".single-img");
const heroImg = document.querySelector(".hero__img");
const heroTitle = document.querySelector(".hero__title");
const movieCards = document.querySelector(".movie-cards");
const row = document.querySelector("#row")
const maruel = document.querySelector("#fantastik")
const isquars = document.querySelector("#isquars")
const multick = document.querySelector("#multick");
const opitions = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2MwYzgzOTg3NTcxMjk2ZWU0Zjc0NWE5ZDA0NWFlYiIsInN1YiI6IjY1MDEyY2E0ZTBjYTdmMDBjYmVhY2Y5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYfP040_hIkK8DZ5zzojmy-R92UTM0t_5FzD7NJP9Oo"
    }
}


fetch(`https://api.themoviedb.org/3/movie/${movieIdInURL}`, opitions)
    .then(response => response.json())
    .then(data => renderSingleM(data))



function renderSingleM(data) {
    console.log(data)
    singleImg.src = "https://image.tmdb.org/t/p/original" + data.poster_path;
    singleTitle.innerHTML = data.original_title;
    singleComent.innerHTML = data.overview;
    singleCountry.innerHTML = data.release_date;

}


fetch(`https://api.themoviedb.org/3/discover/tv`, opitions)
    .then(response => response.json())
    .then(data => renderMovie(data.results))


function renderMovie(movie) {
    const movieFragment = document.createDocumentFragment();
    movie.forEach(element => {
        const div = document.createElement("div")
        div.setAttribute("data-id", element.id)
        div.className = "movie__card"
        div.innerHTML = `
        <a href="./pages/singleMovie.html?productId=${element.id}">
            <img class="movie__card-img" src="https://image.tmdb.org/t/p/original${element.poster_path}" alt="${element.original_name}">
        </a>
        `
        movieFragment.appendChild(div)
    });
    movieCards.appendChild(movieFragment)
}


fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=28", opitions)
    .then(response => response.json())
    .then(data => renderRow(data))


function renderRow(rowData) {
    Const(rowData)
    row.appendChild(rowFragment);
}
fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=12", opitions)
    .then(response => response.json())
    .then(data => rendermMruel(data))


function rendermMruel(Data) {
    Const(Data)
    maruel.appendChild(rowFragment)

}


fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=35", opitions)
    .then(response => response.json())
    .then(data => renderMultick(data))

function renderMultick(mul) {
    Const(mul)
    multick.appendChild(rowFragment)

}

fetch("https://api.themoviedb.org/3/discover/movie?&with_genres=16", opitions)
    .then(response => response.json())
    .then(data => renderisquars(data))

function renderisquars(is) {
    Const(is);
    isquars.appendChild(rowFragment)
}

function Const(Data) {
    rowFragment = document.createDocumentFragment();
    Data.results.forEach(rowImg => {
        const divEl = document.createElement("div")
        divEl.className = "row__card";
        divEl.innerHTML = `
            <a href="./pages/singleMovie.html?productId=${rowImg.id}">
                <img class="row__img" src="https://image.tmdb.org/t/p/original${rowImg.poster_path}" alt="${rowImg.original_title}">
            </a>
            `
        rowFragment.appendChild(divEl)
    });
}
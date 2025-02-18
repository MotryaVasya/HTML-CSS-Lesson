// JSON.parse(); /*json/javascript*/
// JSON.stringify(); /*javascript/json*/
// /*
// HTTP

// method/url/headers/body
// */

// fetch('https://jsonplaceholder.typicode.com/posts/1').then(response =>{
//     if(response.ok){
//         throw new Error(`error: ${response.status}`);
//     }
//     return response.json();
// }).then(data=>{
//     console.log(data);

// }).catch(error=>{
//     console.error(error);
// })


/* 54326f80 */


const address = 'http://www.omdbapi.com/?';
const TOKEN = '54326f80';
let totalPages = 1;
let curentPage = 1;

function getMovie(page){
    const title = document.getElementById('search').value;
    const type = document.getElementById('type').value;
    const result = document.getElementById('result');
    let apiUrl = `${address}s=${title}&type=${type}&apikey=${TOKEN}&page=${page}&`;
    let pagination = document.getElementById('pagination');
    fetch(apiUrl).then(response => response.json()).then(data=>{
        if(data.Response === 'False'){
            result.innerHTML = '<p>Movies not found</p>';
            pagination.innerHTML = '<p>Movies not found!</p>';
        }else{
            let getMovieList = '';
            data.Search.forEach(movie=>{
                getMovieList += `<div>
                        <img src="${movie.Poster}">

                        <div>
                            <h2>${movie.Title}</h2>
                            <p>Type: ${movie.Type}</p>
                            <p>Year: ${movie.Year}</p>
                            <button onclick="getDetails(${movie.imdbID})">Details</button>
                            <div class="details" id="detail-${movie.imdbID}"></div>
                        </div>
                    </div>
                `;})
            result.innerHTML = getMovieList;
            totalPages = Math.ceil(data.totalResults / 10);
            renderPagination(page);
        }
    }).catch(error => console.error(error));
}
document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    getMovie(1);    
});
function getDetails(id){
    const detailsDiv = document.getElementById(`detail-${id}`);
    fetch(`${address}i=${id}&apikey=${TOKEN}`).then(response => response.json()).then(data=>{
        if(data.Response === 'False'){
            detailsDiv.innerHTML = '<p>Movie details not found</p>';
        }else{
            let getDetails = `
                <h2>${data.Title}</h2>
                <p>Year: ${data.Year}</p>
                <p>Rated: ${data.Rated}</p>
                <p>Genre: ${data.Genre}</p>
                <p>Director: ${data.Director}</p>
                <p>Actors: ${data.Actors}</p>
                <p>Plot: ${data.Plot}</p>
            `;
            detailsDiv.innerHTML = getDetails;
        }
    }).catch(error=>{
        console.error(error);
    })
}
function renderPagination(page){
    curentPage = page;
    let paginationBtn = '';
    const startPage =Math.max(1, page - 5);
    const endPage = Math.min(totalPages, page + 4);
    if (curentPage > 1){
        paginationBtn += `<button onclick="getMovie(${curentPage - 1})"></button>`;
    }
    for (let i = startPage; i < endPage; i++){
        paginationBtn += i===curentPage? `<button disabled>${i}</button>`: `<button onclick="getMovie(${i})">${i}</button>`;
    }
    pagination.innerHTML = paginationBtn;
}
console.log("funciona")
const requestUrl= '../json/peliculas.json'

async function fetchMoviesJson(){
    const response = await fetch(requestUrl);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies =>{
    for (let index = 0; index < movies.peliculas.length; index++) {
        
        const moviesSection= document.getElementById("moviesSection");
        
        let id =movies.peliculas[index].id;
        let title= movies.peliculas[index].nombre;
        let director= movies.peliculas[index].director;
        let gender= movies.peliculas[index].clasificacion;
        let img= movies.peliculas[index].caratula;
        {
            /*<div class="card" style="width: 18rem;">
                <img src="" class="card-img-top" alt="">
                <div class="card-body"
                    <h5 class="card-title">${id}. ${title}<h5>
                    <p class="card-text">${director} - ${gender} </p> 
                <div>
            <div>
            */
           
        }
        
        moviesSection.innerHTML +=`
            <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${id}. ${title}</h5>
            <p class="card-text">${director} - ${gender} </p>
            </div>
            </div>
        `
    }
}) 
let requestUrl = "/json/peliculas.json";
console.log("funciona");

async function fetchMoviesJson() {
  let response = await fetch(requestUrl);
  let movies = await response.json();
  return movies;
}

fetchMoviesJson().then((movies) => {
  for (let index = 0; index < movies.peliculas.length; index++) {
    let moviesSection = document.getElementById("moviesSection");

    let id = movies.peliculas[index].id;
    let title = movies.peliculas[index].nombre;
    let director = movies.peliculas[index].director;
    let gender = movies.peliculas[index].clasificacion;
    let img = movies.peliculas[index].caratula;

    moviesSection.innerHTML += `
          <div class="" >
            <div class="card m-4 p-2 bg-primary " style="width: 18rem;">
                <img src="${img}" class="card-img-top" alt="...">
                <div class="card-body bg-primary">
                    <h5 class="card-title bg-primary">${id}. ${title}</h5>
                    <p class="card-text bg-primary">${director} - ${gender} </p>
                </div>
            </div>
          </div>
        `;
  }
});

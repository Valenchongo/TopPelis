contenedor = document.getElementById("contenedor");
siguiente = document.querySelector(".sig");
anterior = document.querySelector(".ant");
botoness = document.querySelector(".botones");

pag = 1;
botones = [];
descrip=[];
img = [];
puntaje = [];
fecha = [];




function agregarbotones (i){
    botones[i] = document.querySelector(".s"+i)
    botones[i].addEventListener("click",()=>{
        contenedor.innerHTML = `<h4> ${puntaje[i]} / 10</h4>
        <img src="https://image.tmdb.org/t/p/w500/${img[i]}" class="img" > 
        <h3 class="descri">${descrip[i]}</h3>
        <h3 class = "fecha">${fecha[i]} </h3>  
        <button class="volver"> back </button>
    `
       botoness.style.display = "none"
       contenedor.style.flexDirection = "column"
       back = document.querySelector(".volver");
       back.addEventListener("click",()=>{
        contenedor.innerHTML = "";
        botoness.style.display = "flex"
        contenedor.style.flexDirection = "row"
        cargarpelis();
       })
       })
}

siguiente.addEventListener("click" , ()=>{

if(pag<=1000){
    contenedor.innerHTML = " ";
    pag++;
    cargarpelis();
    
}
})

anterior.addEventListener("click" , ()=>{
    
    if(pag>1){
        contenedor.innerHTML = " ";
        pag--;
        cargarpelis();
    }
    })



cargarpelis = async ()=>{

  try{  
   respuesta =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=18acbe02d7d3378990395c0f7036c7e0&lenguaje=es-MX&page=${pag}`);
   p = 1;
   datos = await respuesta.json();
    
   datos.results.forEach(element => {
    contenedor.innerHTML += `<div class="contenedorpelicula">
    <button class = "botonimg s${p}"><img src="https://image.tmdb.org/t/p/w500/${element.poster_path}"  class="class"> </button> 
    <h3 class="title"> ${element.title}</h3>
  </div>
 ` 
 console.log(element.release_date)
 img[p] =`${element.poster_path}`;
 descrip[p] = `${element.overview}`;
 puntaje[p] = `${element.vote_average}`
 fecha[p] = `${element.release_date}`

 p++;
   });

   for ( i = 1 ; i<=20 ; i++){
    agregarbotones (i)
   }
  
  }catch(error){
    console.log(error);
  }

}

cargarpelis();

contenedor = document.getElementById("contenedor");
siguiente = document.querySelector(".sig")
anterior = document.querySelector(".ant")
pag = 1;


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

   datos = await respuesta.json();
   console.log(datos);

   datos.results.forEach(element => {
    contenedor.innerHTML += `<div class="contenedorpelicula">
    <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}"  class="class">  
    <h3 class="title"> ${element.title}</h3>
  </div>`
   });

  }catch(error){
    console.log(error);
  }

}

cargarpelis();
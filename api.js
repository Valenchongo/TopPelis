contenedor = document.getElementById("contenedor");
siguiente = document.querySelector(".sig");
anterior = document.querySelector(".ant");
botoness = document.querySelector(".botones");

pag = 1;
botones = [];
descrip=[];
img = [];
puntaje = [];



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
 console.log(element.vote_average)
 img[p] =`${element.poster_path}`;
 descrip[p] = `${element.overview}`;
 puntaje[p] = `${element.vote_average}`
 p++;
   });
  
   boton1 = document.querySelector(".s1");
   boton2 = document.querySelector(".s2");
   boton3 = document.querySelector(".s3");
   boton4 = document.querySelector(".s4");
   boton5 = document.querySelector(".s5");
   boton6 = document.querySelector(".s6");
   boton7 = document.querySelector(".s7");
   boton8 = document.querySelector(".s8");
   boton9 = document.querySelector(".s9");
   boton10 = document.querySelector(".s10");
   boton11 = document.querySelector(".s11");
   boton12 = document.querySelector(".s12");
   boton13 = document.querySelector(".s13");
   boton14 = document.querySelector(".s14");
   boton15 = document.querySelector(".s15");
   boton16 = document.querySelector(".s16");
   boton17 = document.querySelector(".s17");
   boton18 = document.querySelector(".s18");
   boton19 = document.querySelector(".s19");
   boton20 = document.querySelector(".s20");

   boton1.addEventListener("click",()=>{
    contenedor.innerHTML = `<h4> ${puntaje[1]} / 10</h4>
    <img src="https://image.tmdb.org/t/p/w500/${img[1]}" class="img" > 
    <h3 class="descri">${descrip[1]}</h3>
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

   boton2.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[2]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[2]}"> 
    <h3 class="descri">${descrip[2]}</h3>
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

   boton3.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[3]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[3]}"> 
    <h3 class="descri">${descrip[3]}</h3>
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

   boton4.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[4]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[4]}"> 
    <h3 class="descri">${descrip[4]}</h3>
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

   boton5.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[5]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[5]}"> 
    <h3 class="descri">${descrip[5]}</h3>
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

   boton6.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[6]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[6]}"> 
    <h3 class="descri">${descrip[6]}</h3>
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

   boton7.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[7]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[7]}"> 
    <h3 class="descri">${descrip[7]}</h3>
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

   boton8.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[8]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[8]}"> 
    <h3 class="descri">${descrip[8]}</h3>
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

   boton9.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[9]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[9]}"> 
    <h3 class="descri">${descrip[9]}</h3>
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

   boton10.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[10]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[10]}"> 
    <h3 class="descri">${descrip[10]}</h3>
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

   boton11.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[11]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[11]}"> 
    <h3 class="descri">${descrip[11]}</h3>
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

   boton12.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[12]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[12]}"> 
    <h3 class="descri">${descrip[12]}</h3>
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

   boton13.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[13]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[13]}"> 
    <h3 class="descri">${descrip[13]}</h3>
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

   boton14.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[14]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[14]}"> 
    <h3 class="descri">${descrip[14]}</h3>
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

   boton15.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[15]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[15]}"> 
    <h3 class="descri">${descrip[15]}</h3>
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

   boton16.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[16]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[16]}"> 
    <h3 class="descri">${descrip[16]}</h3>
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

   boton17.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[17]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[17]}"> 
    <h3 class="descri">${descrip[17]}</h3>
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

   boton18.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[18]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[18]}"> 
    <h3 class="descri">${descrip[18]}</h3>
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

   boton19.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[19]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[19]}"> 
    <h3 class="descri">${descrip[19]}</h3>
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

   boton20.addEventListener("click",()=>{
    contenedor.innerHTML = `
    <h4> ${puntaje[20]} / 10</h4>
    <img class="img" src="https://image.tmdb.org/t/p/w500/${img[20]}"> 
    <h3 class="descri">${descrip[20]}</h3>
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

  }catch(error){
    console.log(error);
  }

}

cargarpelis();

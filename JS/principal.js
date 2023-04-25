const carrusel=document.querySelector('.carrusel')
let fotos=[  "../IMG/carrusel/foto1.jpg",   "../IMG/carrusel/foto2.jpg",   "../IMG/carrusel/foto3.jpg" ]
let indice=0
setInterval(()=>{
  if(indice<fotos.length){
    carrusel.src=fotos[indice]
    indice++
  }else{
    indice=0
  }
 
},2000)

const url="https://fakestoreapi.com/products"
const tarjetas=document.querySelector('.container__cards')
tarjetas.innerHTML=`<div id="loading">Cargando datos...</div>`
loading.style.display = 'block';

async function traer(){
  let elementos=null
  try{  
    const respuesta=await fetch(url)
    if (!respuesta.ok) {
      throw new Error('Error en la solicitud HTTP: ' + response.status);
    }
    const datos=await respuesta.json()
    elementos=Array.from(datos)
    datos.forEach(item=>{
      tarjetas.innerHTML+=`
      <div class="card">
      <h3 class="card__title">${item.title}</h3>
      <div class="card__image">
      <img src="${item.image}">
      </div>
      <p class="card__description">${item.description}</p>
      <p class="card__price">$${item.price}</p>
      <div class="card__button">
          <button class="btn btn-comprar">COMPRAR</button>
      </div>
  </div>  `})
  loading.style.display = 'none';
  }catch(error){
    tarjetas.innerHTML=`<div id="error">${error.message}</div>`
  }finally{
    loading.style.display = 'none';
  }

  const cerrar=document.querySelector('.modal__close')
  const ventanaModal=document.querySelector('.ventana__modal')
 
    cerrar.addEventListener('click',cerrarModal)
   

function cerrarModal(){
  ventanaModal.style.display='none'
}
  
  tarjetas.addEventListener('click',(evento)=>{
    let seleccionado
    modal=document.querySelector('.modal__body')
      if(evento.target.classList.contains('btn')){
        ventanaModal.style.display='flex'
        seleccionado=elementos.filter(item=>item.title==evento.target.parentElement.parentElement.querySelector('.card__title').textContent)        
        modal.innerHTML=`
      <div class="card">
      <h3 class="card__title">${seleccionado[0].title}</h3>
      <div class="card__image">
      <img src="${seleccionado[0].image}">
      </div>
      <p class="card__description">${seleccionado[0].description}</p>
      <p class="card__price">$${seleccionado[0].price}</p>
      <div class="card__button">
          <button class="btn btn-comprar">COMPRAR</button>
          <button class="btn btn-cancelar">CANCELAR</button>
      </div>
  </div>  `}

  const close=document.querySelector('.btn-cancelar')
  console.log(close)
   close.addEventListener('click',cerrarModal)
})
  

    
}
   


traer()




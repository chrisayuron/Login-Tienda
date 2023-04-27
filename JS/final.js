if(localStorage.getItem('producto')!=undefined ){
    const datos=JSON.parse(localStorage.getItem('producto'))
    const compra=document.querySelector(".compra__item")
    compra.innerHTML=`
    <h3 class="compra__item__title">${datos.title}</h3>
            <div class="compra__item__image">
                <img src="${datos.image}" alt="artículo comprado">
            </div>
            <p class="compra__item__price">$${datos.price}</p>`
}else{
    console.log('no hay datos')
    
    
}

const regresar=document.querySelector('.regresar')
regresar.addEventListener('click',()=>{
    location.assign("./principal.html")
})
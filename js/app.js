const tamano = document.querySelector('.tamano');
const punto = document.querySelectorAll('.punto');

punto.forEach((cadaPunto,i )=> { 
    punto[i].addEventListener('click', ()=>{
        let posicion = i;
        let operation = posicion * (-(100 / 7));
        
        tamano.style.transform = `translateX(${operation}%)`;

        punto.forEach((cadaPunto,i)=>{
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');
    })
})



/* Slider */
const tamano3 = document.querySelector('.tamano3') /*contenedor*/
const punto3 = document.querySelectorAll('.punto3')

punto3.forEach((cadaPunto,i )=> {
    punto3[i].addEventListener('click', ()=> {
        let posicion3 = i
        let operation3 = posicion3 * (-(100 / 4))
        
        tamano3.style.transform = `translateX(${operation3}%)`

        punto3.forEach((cadaPunto,i)=>{
            punto3[i].classList.remove('activo3')
        })
        punto3[i].classList.add('activo3')
        console.log(i)
    })
})
 



/*jquery funciones */
$('.fa-square-facebook').hover(function() {
    $(this).addClass('fa-beat');
}, function() {
    $(this).removeClass('fa-beat');
});

$('.fa-instagram').hover(function() {
    $(this).addClass('fa-beat');
}, function() {
    $(this).removeClass('fa-beat');
});

$('.fa-youtube').hover(function() {
    $(this).addClass('fa-beat');
}, function() {
    $(this).removeClass('fa-beat');
});

/*Menú Hamburguesa*/

$(".hamb").click(function(e){
    e.preventDefault();
    $("header .menu").toggleClass("open");
    $(".hamb i").toggleClass("fa-circle-xmark");
});

$("header .menu .lista_p li").click(function(){
    $("header .menu").removeClass("open");
    $(".hamb i").removeClass("fa-circle-xmark");
});

$(function($){
    var $navbar = $("header .cabecera .hamb");
    $(window).scroll(function(event){
        var $current = $(this).scrollTop();
        if( $current > 1 ){
            $navbar.addClass("color");
        }else{
            $navbar.removeClass("color");
        }
    });
});

/*Alerta Buscador*/
function getInputValue(){
    var inputVal=document.getElementsByClassName(".busqueda").value;
    alert("Este es un buscador de productos. Funcionara Proximamente :)")
}
function getInputValue2(){
    var inputVal=document.getElementsByClassName(".boton_suscribete").value;
    alert("Te haz suscrito. Bienvenido a Geekland.com.pe")
}


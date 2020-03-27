//Varibles
const carbuy = document.getElementById('carrito');
const courses = document.getElementById('lista-cursos');
const selectionCourse = document.querySelector('#lista-carrito tbody');
//Listeners
loadEventListener();
function loadEventListener(){
courses.addEventListener('click', courseBuy);
}
//Funciones
function courseBuy(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){//solo se ejecutar si al elemento darle click y concide con la clase este correra
        const course =e.target.parentElement.parentElement;//seleccionamos la seccion de card 
    }
    console.log(course);
    
}
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
    if(e.target.classList.contains('agregar-carrito')){
        const course =e.target.parentElement.parentElement;
    }
    readDataCourse(course);
}

function readDataCourse(course){
    const infoCourse ={
        imagen: course.querySelector('img').src, 
        titulo: course.querySelector('h4').innerText,
        precio: course.querySelector('p span').innerText,
        id : course.querySelector('a').getAttribute('data-id')
    }
    carInsert(infoCourse);
    
}

function carInsert(course){
    const row = document.createElement('tr'); 
    row.innerHTML = ` 
        <td><img src="${course.imagen}" width = 120px> </td>
        <td>${course.titulo} </td>
        <td>${course.precio} </td>
        <td><a href="#" class="borrar-curso" data-id="${course.id}">X</td>
    `
    selectionCourse.appendChild(row);
}
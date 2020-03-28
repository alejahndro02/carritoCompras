//Varibles
const carbuy = document.getElementById('carrito');
const courses = document.getElementById('lista-cursos');
const selectionCourse = document.querySelector('#lista-carrito tbody');
const emptyCarBtn= document.getElementById('vaciar-carrito');
//Listeners
loadEventListener();
function loadEventListener(){
    courses.addEventListener('click', courseBuy);
    carbuy.addEventListener('click', courseDelete);
    emptyCarBtn.addEventListener('click', emptyCar);
    document.addEventListener('DOMContentLoaded', readLocalStorage);
}
//Funciones
function courseBuy(e){
    e.preventDefault();
    const course =e.target.parentElement.parentElement;
    if(e.target.classList.contains('agregar-carrito')){
        course;
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
    saveCourseLocalStorage(course);
}

function courseDelete (e){  
    e.preventDefault();
    let course = e.target.parentElement.parentElement;
    if(e.target.classList.contains('borrar-curso')){
        course.remove();
    }
}

function emptyCar(){
    while(selectionCourse.firstChild){
        selectionCourse.removeChild(selectionCourse.firstChild);
        return false 
    }
}


function saveCourseLocalStorage(course){
    let courseSave = courseGetLocalStorage();    
    courseSave.push(course);
    localStorage.setItem('cursos', JSON.stringify(courseSave));
}
function courseGetLocalStorage(){
    let courseLS =[];
    let item = localStorage.getItem('cursos');
    if(item == null){
        courseLS;
    }else{
        courseLS = JSON.parse(item); 
    }
    return courseLS;
}

function readLocalStorage(){
    let courseLS = courseGetLocalStorage();
    courseLS.forEach((course)=>{
        const row = document.createElement('tr'); 
            row.innerHTML = ` 
                <td><img src="${course.imagen}" width = 120px> </td>
                <td>${course.titulo} </td>
                <td>${course.precio} </td>
                <td><a href="#" class="borrar-curso" data-id="${course.id}">X</td>
            `
            selectionCourse.appendChild(row);
    })
}
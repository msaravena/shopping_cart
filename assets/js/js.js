import { getProducts, addProduct, deleteTask } from './crud.js';

getProducts();

window.addProduct = addProduct
window.deleteTask = deleteTask

const hamburguer = document.querySelector('.hamburguer');
const navMain = document.querySelector('.nav')

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');    
    navMain.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburguer.classList.remove('active');  
    navMain.classList.toggle('active');

}));


const current = document.querySelector('#currentimg');
const imgs = document.querySelectorAll('.imgs img');

imgs.forEach(img => img.addEventListener('click', 
imgClick));

function imgClick(e){
    imgs.forEach(img => (img.style.opacity = 1));
    current.src = e.target.src;
    e.target.style.opacity = opacity;
}


window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.top = '0';
    } else {
        header.style.top = '-800px';
    }
});

const searchIcon = document.getElementById('searchIcon');
const searchBar = document.getElementById('searchBar');
const searchContainer = document.querySelector('.search-container');

searchIcon.addEventListener('click', function() {
    searchIcon.style.display='none';
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchBar.focus();
    }
});

const menuIcon= document.getElementById('menuIcon');
const cross=document.getElementById('cross');
const menu=document.getElementById('menu');

menuIcon.addEventListener('click',function() {
  menuIcon.style.display='none';
  cross.style.display='block';
  menu.style.top='13.5vh'
})

cross.addEventListener('click',function(){
  menuIcon.style.display='block';
  cross.style.display='none';
  menu.style.top='-800px'
})


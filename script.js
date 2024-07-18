
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-120px';
    }
});

const searchIcon = document.getElementById('searchIcon');
const searchBar = document.getElementById('searchBar');
const searchContainer = document.querySelector('.search-container');

searchIcon.addEventListener('click', function() {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchBar.focus();
    }
});


// menu settings----------------------------

var sidemeu=document.getElementById("navbar");

function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
}

// ---------------------------------------
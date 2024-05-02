document.addEventListener('DOMContentLoaded', function() {
    var searchIcon = document.querySelector('.searchIcon');
    var searchBar = document.getElementById('searchBar');

    searchIcon.addEventListener('click', function() {
        searchBar.classList.toggle('active');
    });
});
// Get the search icon element
// var searchIcon = document.getElementById("searchIcon");

// var searchBar = document.getElementById("searchBar");
// searchIcon.onclick = function() {
//     searchBar.style.display = (searchBar.style.display === "none") ? "block" : "none";
// };

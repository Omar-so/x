document.addEventListener('DOMContentLoaded', function() {
  var searchIcon = document.querySelector('.searchIcon');
  var searchBar = document.getElementById('searchBar');

  searchIcon.addEventListener('click', function() {
      searchBar.classList.toggle('active');
});
});
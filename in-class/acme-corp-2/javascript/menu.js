$(document).ready(function() {
  function toggleMenu(e) {
    e.preventDefault();
    $("header nav").toggleClass("expanded");
  }
    $('#logo').click(toggleMenu);

});

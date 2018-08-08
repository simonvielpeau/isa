//= require jquery
//= require bootstrap
//= require_tree .


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown-isa").classList.toggle("show-isa");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  console.log("test");
  if (!event.target.matches('.dropbtn-isa')) {

    var dropdowns = document.getElementsByClassName("dropdown-content-isa");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-isa')) {
        openDropdown.classList.remove('show-isa');
      }
    }
  }
}

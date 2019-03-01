  
  (function($) {
  
    // Menu filer
    $("#menu-flters li a").click(function() {
      $("#menu-flters li a").removeClass('active');
      $(this).addClass('active');
  
      var selectedFilter = $(this).data("filter");
      //  $("#menu-wrapper").fadeTo(100, 0);
  
 
      setTimeout(function() {
        $(selectedFilter).slideDown();
        //$("#menu-wrapper").fadeTo(300, 1);
      }, 300);
    });
  
    // Add smooth scrolling to all links in navbar + footer link
    $(".sidenav a").on('click', function(event) {
      var hash = this.hash;
      if (hash) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function() {
          window.location.hash = hash;
        });
      }
  
    });
  
      
  })(jQuery);
  var aTags= document.getElementsByTagName('a'); // Creates an array containing all *A tags*.
function init() { // Called after DOM Content is loaded or after window.load
for (var i = 0; i < aTags.length; i++) {
aTags[i].onclick = function () { console.log("A Tag Value: ", this.innerText); }; // displays the value of a specific A tag in the console.
}
}
 
document.addEventListener("DOMContentLoaded", init, false); //or window.onload = init;
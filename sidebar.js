// JS for expandable sidebar used on chapter pages

var main = function() { // js running on page
  $('.sidebar-link').click(function() {
    $('.sidebar-sub').toggle(); // expandable sidebar // can't use children on li?
  });
};

$(document).ready(main); // loads the jquery

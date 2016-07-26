// JS for subject page


var main = function() { // js running on page
  $('.title-menu-item-unselected a').hover(function() {
    $(this).parent().toggleClass('title-menu-item-hovered'); // toggle menu item hovered class
  });
};



$(document).ready(main); // loads the jquery

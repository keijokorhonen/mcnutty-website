// JS for subject page


var main = function() { // js running on page
  $('.title-menu-item').click(function() {
    $('.title-menu-item').removeClass('title-menu-item-selected'); // remove menu item class from previous item
    $(this).addClass('title-menu-item-selected'); // add menu item selected class
    $(this).children('a').addClass('title-menu-link-active');
  });
};



$(document).ready(main); // loads the jquery

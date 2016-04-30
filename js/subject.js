// JS for subject page


var main = function() { // js running on page
  $('.title-menu-item').click(function() {
    $('.title-menu-item').removeClass('title-menu-item-selected'); // remove menu item class from previous item
    $(this).addClass('title-menu-item-selected'); // add menu item selected class
    $(this).children('a').addClass('title-menu-link-active');
  });
  $('#menu-assessments').click(function() { // change content on menu item click
    $('#chapters').hide();
    $('#syllabus').hide();
    $('#assessments').show();
  });
  $('#menu-chapters').click(function() { // change content on menu item click
    $('#assessments').hide();
    $('#syllabus').hide();
    $('#chapters').show();
  });
  $('#menu-syllabus').click(function() { // change content on menu item click
    $('#assessments').hide();
    $('#chapters').hide();
    $('#syllabus').show();
  });
};



$(document).ready(main); // loads the jquery

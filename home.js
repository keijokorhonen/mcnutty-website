// JS for home page

var main = function() { // js running on page
  // home js
  $('.group').hover(function() {
    $(this).children('.group-title').fadeToggle(200); // toggle group title, 200ms
    $(this).children('.subjects').fadeToggle(200); //toggle subjects, 200ms
  });
};

// onClick for home page subjects
function subjectClick(subject) { // use subject variable to determine href?
  location.href= '#'; // change href
}

$(document).ready(main); // loads the jquery

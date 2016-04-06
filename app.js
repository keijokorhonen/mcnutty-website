// main JS for IB test site
// I don't know how to load the js from the home site and the equation site separately, so they are in one file

var main = function() { // js running on page
  // equation js
  $('.e-hover').hover(function() {
    $(this).children('.e-dropdown').fadeToggle(100); // equation explainer, 100ms
  });
  $('.sidebar-link').click(function() {
    $('.sidebar-sub').toggle(); // expandable sidebar // can't use children on li?
  });
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

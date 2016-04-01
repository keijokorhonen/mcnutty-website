var main = function() {
  $('.e-hover').hover(function() {
    $(this).children('.e-dropdown').fadeToggle(100); // equation explainer
  });
  $('.group').hover(function() {
    $(this).children('.group-title').fadeToggle(200); // toggle group title
    $(this).children('.subjects').fadeToggle(200); //toggle subjects
  });
  $('.sidebar-link').click(function() {
    $('.sidebar-sub').toggle(); // expandable sidebar // can't use children on li?
  });
};

//function subjectClick(subject) {
//  location.href= 'equations.html';
// }

$(document).ready(main);

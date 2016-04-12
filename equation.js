// JS for equation hover explanations

var main = function() { // js running on page
  // equation js
  $('.e-hover').hover(function() {
    $(this).children('.e-dropdown').fadeToggle(100); // equation explainer, 100ms
  });
};

$(document).ready(main); // loads the jquery

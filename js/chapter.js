// JS for expandable sidebar used on chapter pages

var main = function() { // js running on page
  $('.sub-title').click(function(e){
    $(e.target).parent().children(".hidden-content").toggle(150, "swing");
  });
};

function openSub(sub) {
  $(sub).children("hidden-content").toggle(150, "swing");
}

//function subCollapse(idClicked) {
//  $(idClicked).on('click', function(e){
//    $(e.target).parent().children(".hidden-content").toggle('slide');
//        });
//    };
$(document).ready(main); // loads the jquery

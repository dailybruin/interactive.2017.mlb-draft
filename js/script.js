$(document).foundation();

$("#griffin-canning").on("swipeleft",function(){
  $(this).foundation('close');
  $("#jake-bird").foundation('open');
});

$("#jake-bird").on("swiperight",function(){
  $(this).foundation('close');
  $("#griffin-canning").foundation('open');
});

$("#jake-bird").on("swipeleft",function(){
  $(this).foundation('close');
  $("#sean-brouchard").foundation('open');
});

$("#sean-brouchard").on("swiperight",function(){
  $(this).foundation('close');
  $("#jake-bird").foundation('open');
});

$(() => {
  $('.article-slider').lightSlider({
    loop: false,
    slideMove: 2,
    pager: false,
    item: 3,
    enableDrag: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 2
        }
      },
      {
        breakpoint: 480,
        settings:{
          item: 2
        }
      }
    ]
  });
});

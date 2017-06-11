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

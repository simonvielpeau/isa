function openPhotoSwipe() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: '../images/cabinet-1.jpeg',
          w: 1000,
          h: 750
      },
      {
          src: '../images/cabinet-2.jpg',
          w: 600,
          h: 800
      },
      {
          src: '../images/cabinet-3.jpeg',
          w: 800,
          h: 1067
      },
      {
          src: '../images/cabinet-4.jpeg',
          w: 700,
          h: 933
      },
      {
          src: '../images/cabinet-5.jpg',
          w: 1080,
          h: 810
      },
      {
          src: '../images/cabinet-maps.jpg',
          w: 798,
          h: 331
      },

  ];

  // define options (if needed)
  var options = {
      // optionName: 'option value'
      // for example:
      index: 0, // start at first slide
      escKey: false,
      closeEl: false,
      captionEl: false,
      fullscreenEl: true,
      zoomEl: false,
      shareEl: false,
      counterEl: false,
      arrowEl: true,
      preloaderEl: false,
      tapToClose: false,
      clickToCloseNonZoomable: false,
      closeOnVerticalDrag: false,
      closeOnScroll: false,
      pinchToClose: false,
      clickToCloseNonZoomable: false,
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

openPhotoSwipe();
btn_photoswipe = document.querySelector(".wrapper-photos a");

btn_photoswipe.addEventListener("click", function(event) {
  openPhotoSwipe();
});


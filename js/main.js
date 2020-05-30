$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    variableWidth: true,
    arrows: true,
    nextArrow: ".project__next",
    prevArrow: ".project__prev",
  });
});

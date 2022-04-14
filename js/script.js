$(document).ready(function () {
  $(".burger").click(function () {
    $(".burger__menu").toggleClass("open-menu");
    $("body").toggleClass("no-scroll");
    $(".burger").toggleClass("move");
  });

  $(".burger__menu-links").click(function () {
    $(".burger__menu").toggleClass("open-menu");
    $("body").toggleClass("no-scroll");
    $(".burger").toggleClass("move");
  });
});

import $ from 'jquery';

$(document).ready(() => {
  $('#nav-toggle').on('click', function () {
    console.log('do')
    $('body').toggleClass('open');
  });

  $('.header__nav__content').on('click', function () {
    $('body').toggleClass('open');
  })
})

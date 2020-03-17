window.addEventListener('DOMContentLoaded', () => {
  var headerResponsiveOpen = document.getElementById('header-responsive-open');
  var headerResponsiveClose = document.getElementById('header-responsive-close');
  var headerResponsiveNav = document.getElementById('header-responsive-show');

  headerResponsiveOpen.addEventListener('click', () => {
    // console.log('クリックされました');
    headerResponsiveOpen.classList.add('header__responsive__btn__hide');
    headerResponsiveClose.classList.remove('header__responsive__btn__hide');
    // console.log(headerResponsiveNav);
    headerResponsiveNav.classList.add('header__responsive__open');
  })

  headerResponsiveClose.addEventListener('click', () => {
    // console.log('クリックされたがな')
    headerResponsiveClose.classList.add('header__responsive__btn__hide');
    headerResponsiveOpen.classList.remove('header__responsive__btn__hide');
    // console.log(headerResponsiveNav);
    headerResponsiveNav.classList.remove('header__responsive__open');
  })
})
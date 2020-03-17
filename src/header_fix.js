window.onload = () => {
  var headerFix = document.getElementById("js-headerFix");
  var changePosition = 81;
  var marginAdd = document.getElementById("js-headerFix__marginAdd");
  var isTop = window.pageYOffset >= changePosition ? true : false;

  if (isTop) {
    headerFix.classList.add("headerFix");
    marginAdd.classList.add("index__marginAdd");
  }


  window.onscroll = () => {
    y = window.pageYOffset;
    if (y >= changePosition) {
      headerFix.classList.add("headerFix");
      marginAdd.classList.add("index__marginAdd");
    } else {
      headerFix.classList.remove("headerFix");
      marginAdd.classList.remove("index__marginAdd");
    }
  };
};
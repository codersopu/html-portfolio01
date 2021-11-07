//mixit up

var mixer = mixitup('.grid-portfolio-container');

//scrollyfy

$(function() {
    $.scrollify({
      section : ".scrolly",
      setHeights: false,
      updateHash: false,
    });
  });

  // HAMBERGUR
  function openMenu() {
    document.getElementById('navbar').style.height = "100%";
  }

  function closeMenu() {
    document.getElementById('navbar').style.height = "0";
  }

  // SMOOTH SCROLL

  $(function(){
      $('.menu-items a .scroll-down a').on('click', function(){
          $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
          },1000);
          return false;
      })
  })
  
  
 
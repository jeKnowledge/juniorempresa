$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['Main_Page','Junior_1', 'Junior_2', 'Junior_3','Informations'],
    sectionsColor: ['white', '#F9F9F9', '#376092', '#F9F9F9','#F9F9F9'],
    menu: '#menu',
    continuousHorizontal: true,
    slidesNavigation: true,
    ccs3: true,
    scrollingSpeed: 600,
    afterLoad: function(anchorLink, index) {
      switch (index) {
        case 2:
          $(".je-image").attr('src','images/jekrect.png');
          break;
        case 3:
          $(".je-image").attr('src','images/logo_teste.png');
          break;
        default:
          $(".je-image").attr('src','');

          break;
      }
    }
  });
});

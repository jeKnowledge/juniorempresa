$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['Main_Page','Junior_1', 'Junior_2','Information'],
    sectionsColor: ['white', 'white', '#376092','white'],
    menu: '#menu',
    continuousHorizontal: true,
    slidesNavigation: true,
    ccs3: true,
    scrollingSpeed: 600
  });
});

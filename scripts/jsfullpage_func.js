$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['Main_Page','Junior_1', 'Junior_2', 'Junior_3','Informations'],
    sectionsColor: ['#F9F9F9', '#F9F9F9', '#F9F9F9', '#F9F9F9','#F9F9F9'],
    menu: '#menu',
    navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['Introdu&ccedil&atildeo','Junior 1', 'Junior 2', 'Junior 3','Informa&ccedil&otildees'],
    slidesNavigation: true,
    ccs3: true,
    scrollingSpeed: 600
  });

  $("#fp-nav").find("ul li").first().remove();
});

$(document).ready(function(){
if ($(window).width() < 768) {
	$('#accordionExample').on('shown.bs.collapse', function () {
    $('html, body').animate({
        scrollTop: $('.collapse.show').offset().top
    },
    500,
    'linear'
  )
});
}
});
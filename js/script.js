$(document).ready(function() {
    var nav = $('#site-menu');
    var header = $('#top');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
            nav.addClass('nav-sticky');
            header.addClass('pt-scroll')
        } else {
            $('#scroll').fadeOut();
            nav.removeClass('nav-sticky');
            header.removeClass('pt-scroll')
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return !1
    });
      
});


function navToggle() {
    var btn = $('#menuBtn');
    var nav = $('#menu');
    btn.toggleClass('open');
    nav.toggleClass('flex');
    nav.toggleClass('hidden')
}
var openmodal = document.querySelectorAll('.modal-open')
    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener('click', function(event){
    	event.preventDefault()
    	toggleModal()
      })
    }
    
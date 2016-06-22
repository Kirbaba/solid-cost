$(document).ready(function () {
    var windowWidth = $(window).width();

        $(".toggle_mnu").click(function () {
            $(".sandwich").toggleClass("active");
        });

        if (windowWidth < 769) {
            $(".header__menu").click(function () {
                $(".header__menu").fadeOut(600);
                $(".sandwich").toggleClass("active").append("<span>");
            });

            $(".toggle_mnu").click(function () {
                if ($(".header__menu").is(":visible")) {
                    $(".header__menu").fadeOut(600);
                    $(".header__menu").removeClass("fadeInUp animated");
                } else {
                    $(".header__menu").fadeIn(600);
                    $(".header__menu").addClass("fadeInUp animated");
                }
            });
        }
    var modal = $('.myModal');
    var btn = $('.myBtn');
    var span = $('.close')[0];
    //console.log(modal);

// When the user clicks on the button, open the modal 
   $('.myBtn').click(function() {
        modal.show();
});

// When the user clicks on <span> (x), close the modal
    $('.close').click(function() {
        modal.hide();
});

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
     if (event.target == modal) {
           modal.hide();
    }
}

});
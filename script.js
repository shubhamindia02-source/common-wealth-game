$(document).ready(function () {

    var $bar = $('#bar');       // hamburger icon
    var $bar2 = $('#bar2');     // cross icon
    var $slideMenu = $('.slide-menu');
    var $overlay = $('#menu-overlay');
    var $body = $('body');

    // make sure menu starts closed and only the hamburger icon is visible
    function closeMenu() {
        $slideMenu.removeClass('active');
        $overlay.removeClass('active');
        $bar2.removeClass('show');
        $bar.removeClass('hide');
        $body.removeClass('menu-open');
    }

    function openMenu() {
        $slideMenu.addClass('active');
        $overlay.addClass('active');
        $bar2.addClass('show');
        $bar.addClass('hide');
        $body.addClass('menu-open');
    }

    closeMenu();

    // open menu on hamburger click
    $bar.on('click', function () {
        openMenu();
    });

    // close menu on cross click
    $bar2.on('click', function () {
        closeMenu();
    });

    // close menu when a link inside it is clicked
    $slideMenu.on('click', 'a.nav-link', function () {
        closeMenu();
    });

    // close menu when clicking the dark overlay
    $overlay.on('click', function () {
        closeMenu();
    });

    // close the menu automatically if the window is resized back to desktop
    $(window).on('resize', function () {
        if ($(window).width() > 992) {
            closeMenu();
        }
    });

});

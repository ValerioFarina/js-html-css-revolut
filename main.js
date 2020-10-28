$(document).ready(function() {

    // intercetto il mouseenter delle voci del menu nel nav-right
    $('#nav-right .menu > li').mouseenter(function() {
        // seleziono il dropdown-menu che è figlio della voce corrente (cioè, della voce sulla quale sono andato con il mouse)
        // tolgo a questo dropdown-menu la classe hidden
        $(this).children('.dropdown-menu').removeClass('hidden');
    });

    // intercetto il mouseleave delle voci del menu nel nav-right
    $('#nav-right .menu > li').mouseleave(function() {
        // seleziono il dropdown-menu che è figlio della voce corrente (cioè, della voce sulla quale sono andato con il mouse)
        // aggiungo a questo dropdown-menu la classe hidden
        $(this).children('.dropdown-menu').addClass('hidden');
    });

    // intercetto il click dell'icona dell'hamburger menu
    $('#hamburger-icon a').click(function() {
        // seleziono l'hamburger-menu e gli tolgo la classe "hidden"
        $('#hamburger-menu').removeClass('hidden');
    });

    // intercetto il click dell'icona "x" dentro l'hamburger menu
    $('#close-icon a').click(function() {
        // seleziono l'hamburger-menu e gli aggiungo la classe "hidden"
        $('#hamburger-menu').addClass('hidden');
    });

// fine document.ready
});

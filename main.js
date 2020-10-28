$(document).ready(function() {

    // intercetto il mouseenter delle voci del menu nel nav-right
    $('#nav-right .menu > li').mouseenter(function() {
        // seleziono il dropdown-menu che è figlio della voce corrente (cioè, della voce sulla quale sono andato con il mouse)
        // tolgo a questo dropdown-menu la classe hidden
        $(this).children('.dropdown-menu').removeClass('hidden');
    });

// fine document.ready
});

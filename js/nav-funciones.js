
$(document).ready(function() {

    let boton = $("nav button");
    let menu = $("nav ul");
    let menu_items = $("li");

    $(window).resize(() => {
        if (window.innerWidth > 659) {
            menu.css("display", "inline");
        } else if (window.innerWidth <= 659 && menu_items.css("display") == "inline") {
            menu_items.hide();
            menu.css("display", "block");
            menu.hide();
            menu_items.show();
        }
    });

    boton.click(() => {
        menu.slideToggle(300);
    });
    /*
    function mostrarBoton() {
        if($(window).innerWidth() <= 659 && boton.css("display") == "none") {
            boton.show();
        }
    }

    function ocultarBoton() {
        if($(window).innerWidth() > 659 && boton.css("display") != "none") {
            boton.hide();
        }
    }
    
    
    */
})


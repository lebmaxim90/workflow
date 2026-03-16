jQuery(document).ready(function($) {
    console.log("Highlight post script loaded");
    console.log("jQuery version:", $.fn.jquery);
    
    console.log("Found posts:", $('.one-post').length);
    
    $('.one-post').hover(
        function() {
            console.log("Mouse entered post");
        },
        function() {
            console.log("Mouse left post");
        }
    );
    
    // Эффект для логотипа
    $('.header img').hover(
        function() {
            $(this).stop().animate({
                width: '338px'
            }, 200);
        },
        function() {
            $(this).stop().animate({
                width: '318px'
            }, 200);
        }
    );
});
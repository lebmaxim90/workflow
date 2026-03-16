jQuery(document).ready(function($) {
    console.log("Highlight post script loaded");
    console.log("Found posts:", $('.one-post').length);
    
    $('.one-post').hover(
        function() {
            $(this).find('.one-post-shadow').stop().animate({
                opacity: '0.2'
            }, 300);
        },
        function() {
            $(this).find('.one-post-shadow').stop().animate({
                opacity: '0'
            }, 300);
        }
    );
    
    $('.header .logo').hover(
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
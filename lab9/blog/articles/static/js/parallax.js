$(document).ready(function(){
    var yPosition;
    var scrolled = 0;
    
    var $parallaxElements = $('.icons-for-parallax img');
    var $logo = $('.header .logo');
    
    console.log("Parallax script loaded");
    console.log("Parallax elements found:", $parallaxElements.length);
    console.log("Logo found:", $logo.length);
    
    $(window).scroll(function() {
        scrolled = $(window).scrollTop();
        
        for (var i = 0; i < $parallaxElements.length; i++) {
            yPosition = (scrolled * 0.15 * (i + 1));
            $parallaxElements.eq(i).css({ 
                top: yPosition + 'px'
            });
        }
        
        var logoPosition = scrolled * 0.3;
        $logo.css({
            top: logoPosition + 'px',
            position: 'relative'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    console.log("Fold script loaded");
    
    var foldBtns = document.getElementsByClassName("fold-button");
    console.log("Found buttons:", foldBtns.length);
    
    for (var i = 0; i < foldBtns.length; i++) {
        foldBtns[i].addEventListener("click", function(e) {
            var post = e.target.closest('.one-post');
            
            if (post) {
                post.classList.toggle('folded');
                
                if (post.classList.contains('folded')) {
                    e.target.innerHTML = "развернуть";
                } else {
                    e.target.innerHTML = "свернуть";
                }
                
                console.log("Toggled post:", post.classList.contains('folded') ? "folded" : "expanded");
            }
        });
    }
});
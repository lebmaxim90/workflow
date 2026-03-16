var foldBtns = document.getElementsByClassName("fold-button");

// Добавляем обработчик события для каждой кнопки
for (var i = 0; i < foldBtns.length; i++) {
    foldBtns[i].addEventListener("click", function(e) {
        // Находим родительский элемент с классом one-post
        var post = e.target.closest('.one-post');
        
        // Переключаем класс folded у родителя
        post.classList.toggle('folded');
        
        // Меняем текст кнопки в зависимости от наличия класса folded
        if (post.classList.contains('folded')) {
            e.target.innerHTML = "развернуть";
        } else {
            e.target.innerHTML = "свернуть";
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    // 將 index2.html 移到首位
    var index2 = document.getElementById("index2");
    if (index2) {
        index2.parentNode.insertBefore(index2, index2.parentNode.firstChild);
    }
});

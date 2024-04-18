window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    
    // 如果視窗滾動超過 300 像素，則顯示按鈕，否則隱藏按鈕
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// 當按鈕被點擊時，滾動到頁面頂部
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
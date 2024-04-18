document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var items = document.querySelectorAll('.carousel-item');
    var totalItems = items.length;
    var indicators = document.querySelectorAll('.indicator');

    function updateIndicators(activeIndex) {
        indicators.forEach((indicator, index) => {
            if (index === activeIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    document.querySelector('.prev').addEventListener('click', function() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        items[currentIndex].classList.add('active');
        updateIndicators(currentIndex); // 更新指示器状态
    });

    document.querySelector('.next').addEventListener('click', function() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalItems;
        items[currentIndex].classList.add('active');
        updateIndicators(currentIndex); // 更新指示器状态
    });

    // 设置初始状态
    items[currentIndex].classList.add('active');
    updateIndicators(currentIndex);
});


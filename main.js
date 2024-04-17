document.addEventListener('DOMContentLoaded', function() {
    var magnifyIcon = document.querySelector('.magnify-icon');
    var topMessage = document.querySelector('.top-message');
    var hoverMessage = document.querySelector('.hover-message');

    magnifyIcon.addEventListener('mouseenter', function() {
        topMessage.style.opacity = '0';
        hoverMessage.style.opacity = '1';
    });

    magnifyIcon.addEventListener('mouseleave', function() {
        topMessage.style.opacity = '1';
        hoverMessage.style.opacity = '0';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var aboutButton = document.querySelector('.left-buttons .menu-button:nth-child(1)');
    var educationButton = document.querySelector('.left-buttons .menu-button:nth-child(2)');
    var experienceButton = document.querySelector('.right-buttons .menu-button:nth-child(1)');
    var interestsButton = document.querySelector('.right-buttons .menu-button:nth-child(2)');

    aboutButton.addEventListener('click', function() {
        // 点击“关于”按钮时的操作
        console.log('About button clicked');
        // 进行页面导航或其他操作
    });

    educationButton.addEventListener('click', function() {
        // 点击“学历”按钮时的操作
        console.log('Education button clicked');
        // 进行页面导航或其他操作
    });

    experienceButton.addEventListener('click', function() {
        // 点击“经历”按钮时的操作
        console.log('Experience button clicked');
        // 进行页面导航或其他操作
    });

    interestsButton.addEventListener('click', function() {
        // 点击“兴趣”按钮时的操作
        console.log('Interests button clicked');
        // 进行页面导航或其他操作
    });
});

/*這裡使用了CHATGPT*/
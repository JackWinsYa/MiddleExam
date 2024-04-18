document.addEventListener('DOMContentLoaded', function() {
    var eventLabels = document.querySelectorAll('.event-label');
    var imgBox = document.getElementById('education-img-box');
    var educationJsBox = document.getElementById('education-js-box');
    var textBox = document.getElementById('education-text-box'); // 获取文本框元素
    var imgElement = imgBox.querySelector('img') || document.createElement('img');
    if (!imgBox.contains(imgElement)) {
        imgBox.appendChild(imgElement);
    }

    // 储存每个事件对应的原始图像和悬停图像
    var images = {
        '國小': { normal: 'img/school01.jpg', hover: 'img/me01.jpg' },
        '國中': { normal: 'img/school02.jpg', hover: 'img/me02.JPG' },
        '高中': { normal: 'img/school03.jpg', hover: 'img/me03.jpg' },
        '大學': { normal: 'img/school04.png', hover: 'img/me04.jpg' }
    };

    // 储存每个事件对应的描述
    var descriptions = {
        '國小': '我國小就讀於〈仁善國小〉，是一個棒球很有名的學校，我也是從國小就慢慢開始培養出喜歡運動的習慣，也在國小的時候參與了很多運動，例如跆拳道丶游泳丶棒球等等的，也因為一直因為運動而受到訓練，所以我認為我自從國小時，就開始養成了吃苦耐勞的性格。',
        '國中': '我國中就讀於〈仁和國中〉，在桃園算是一個蠻有名的學校，而我也因為國小喜歡運動，而在國中參加了「射箭」體育班，在體育班三年的時光中，將我從毛躁丶急躁等性格慢慢培養成不急不徐丶耐心丶冷靜，這是我覺得我從國中這三年學到的最多東西，還有因為出去比賽而慢慢鍛鍊出來的抗壓力。',
        '高中': '我高中就讀於〈陽明國中〉，在高中，雖然我沒有繼續努力在射箭項目上，但是我在高中，也參加了更多社團，例如「橋牌社」丶「糾察隊」丶「游泳社」等等，讓我在高中生活變得很豐富並且多采多姿，在高中時也擔任糾察隊的標兵職位，也在這個時候開始慢慢訓練我的責任感。',
        '大學': '我大學就讀於〈中原大學〉，雖然在大學我並沒有像在國高中一樣參加很多社團，甚至我在大學連一個社團都沒有參加，可能我覺得我也是想要休息一下了，但是在大學，我也逐漸變得更喜歡去打造自己，例如體態丶服飾丶打扮，我也在大學努力尋找我未來的方向，在大學中一步一步慢慢向前走。'
    };

    eventLabels.forEach(function(label) {
        label.addEventListener('click', function() {
            var content = label.textContent.trim();

            imgElement.src = images[content].normal;  // 设置常规图片
            imgElement.style.width = '250px';
            imgElement.style.height = '250px';
            imgElement.style.borderRadius = '50%';

            // 隐藏 education-text-box
            textBox.style.display = 'none';

            // 显示 education-js-box 并更新描述
            educationJsBox.style.display = 'block';
            educationJsBox.textContent = descriptions[content];

            // 添加悬停和移开事件
            imgElement.onmouseover = function() {
                imgElement.src = images[content].hover;
            };
            imgElement.onmouseout = function() {
                imgElement.src = images[content].normal;
            };
        });
    });
});









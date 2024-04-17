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
        '高中': { normal: 'img/school03.jpg', hover: 'path_to_your_high_school_photo_hover.jpg' },
        '大學': { normal: 'img/school04.png', hover: 'path_to_your_university_photo_hover.jpg' }
    };

    // 储存每个事件对应的描述
    var descriptions = {
        '國小': '国小阶段是孩子成长的关键时期，提供基础教育和综合发展。',
        '國中': '国中阶段学生将深入学习各个学科，为高中学习打下坚实基础。',
        '高中': '高中教育更注重深化学科知识和批判性思维的培养。',
        '大學': '大学阶段是专业知识和研究能力的培养，准备学生未来的职业生涯。'
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









document.addEventListener('DOMContentLoaded', function() {
    var eventLabels = document.querySelectorAll('.exp-event-label'); // 修改为经验板块的标签类名
    var imgBox = document.getElementById('exp-img-box');
    var expJsBox = document.getElementById('exp-js-box');
    var textBox = document.getElementById('exp-text-box'); // 获取经验板块的文本框元素
    var imgElement = imgBox.querySelector('img') || document.createElement('img');
    if (!imgBox.contains(imgElement)) {
        imgBox.appendChild(imgElement);
    }

    // 存储每个事件对应的原始图像和悬停图像
    var images = {
        '管理學': { normal: 'img/class1.jpg', hover: 'img/class2.jpg' },
        '人力管理': { normal: 'img/class3.jpg', hover: 'img/hr_hover.jpg' },
        '網路程式': { normal: 'img/class4.jpg', hover: 'img/class5.jpg' },
        '多媒體': { normal: 'img/class7.png', hover: 'img/class8.png' }
    };

    // 存储每个事件对应的描述
    var descriptions = {
        '管理學': '在大一的時候，管理學是我們的必修課之一，其中我最印象深刻也學到最多的就是志工活動，我們這一組選擇的是幫老人家學會使用3C產品，我們持續教了4天，在這4天中，我深刻體會到教人這事情是一個非常不容易的，尤其要如何用最簡單的方法快速的教會老人家，對我來說是一個挑戰，也是一種訓練，練習說話的技巧，還有教導的技巧。',
        '人力管理': '在大二的人力資理，其中一個報告是要製作一家公司的人力資源管理，可以使用採訪的方式，或者是用網路上的素材作整理，不過因為我有認識到一個企業的老闆，所以我想嘗試著去採訪看看，因為這個也可以幫助到我的未來，要如何讓自己不要緊張，要如何可以面對大人物時也可以平淡的聊天丶採訪，我在這次採訪中也學到了很多。',
        '網路程式': '在大二的網路程式中，我們班主要是學後端，也就是資料庫的部分，資料庫也是在做網站中，最重要的一個環節，他不止是讓網站更豐富以及增加互動性外，也是網站在增加更多功能性時必備的東西，並且在我們期末專題報告時，我們要學習如何用資料庫和另外一班的網站做連結，製作一個購物平台，在這一次的期末專題報告中，我認識到很多朋友，學到很多技巧，更知道了團隊合作。',
        '多媒體': '在大二的多媒體中，這次換成我們學習前端，也就是架設網頁以及排版美化，說實話在這堂課，對我來說是比起建立資料庫更困難的事情，畢竟我的美感不太好，畫個自畫像能變成畢卡索，所以在設計以及美感這方面，我也是下了很大的功夫，尤其在製作這一次的個人履歷時，我也是徵求了很多人的意見，也很努力使用著chatgpt以及網路上的資源慢慢把網站做出來，很有成就感。'
    };

    eventLabels.forEach(function(label) {
        label.addEventListener('click', function() {
            var content = label.textContent.trim();

            imgElement.src = images[content].normal;
            imgElement.style.width = '250px';
            imgElement.style.height = '250px';
            imgElement.style.borderRadius = '50%';

            textBox.style.display = 'none';  // 隐藏文本框
            expJsBox.style.display = 'block';  // 显示经验JavaScript框
            expJsBox.textContent = descriptions[content];

            imgElement.onmouseover = function() {
                imgElement.src = images[content].hover;
            };
            imgElement.onmouseout = function() {
                imgElement.src = images[content].normal;
            };
        });
    });
});

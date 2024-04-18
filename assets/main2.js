document.addEventListener("DOMContentLoaded", function() {
    // 获取所有的技能百分比元素
    var skillPercentages = document.querySelectorAll('.skill-percentage');

    // 遍历每个元素并设置宽度
    skillPercentages.forEach(function(skill) {
        var percentage = skill.getAttribute('data-percentage');
        skill.style.width = percentage;
    });
});
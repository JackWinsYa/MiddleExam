const toggleButton = document.getElementById('toggle-button');
const soundWaves = document.querySelector('.sound-waves');

// 切换音波效果的函数
function toggleSoundWaves() {
    if (soundWaves.style.display === 'none' || soundWaves.style.display === '') {
        soundWaves.style.display = 'block';
        toggleButton.innerText = '不吸了';
    } else {
        soundWaves.style.display = 'none';
        toggleButton.innerText = '開吸大麻';
    }
}

// 给按钮添加点击事件
toggleButton.addEventListener('click', toggleSoundWaves);

/*這裡使用了CHATGPT*/
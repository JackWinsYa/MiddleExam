var audio = document.getElementById("audio");
audio.volume = 0.2;
var button = document.getElementById("button1");

button.onclick = function() {
  if (audio.paused) {
    audio.play();
    button.innerHTML = "停止音樂";
  } else {
    audio.pause();
    audio.currentTime = 0;
    button.innerHTML = "播放音樂";
  }
};
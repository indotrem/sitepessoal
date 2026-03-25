const toggle = document.getElementById("toggleMode");

toggle.addEventListener("change", function () {

    document.body.classList.toggle("light-mode");
    
});

function abrirLightbox() {
  const lightbox = document.getElementById('lightbox');
  const vSmall = document.getElementById('video-small');
  const vFull = document.getElementById('video-full');
  lightbox.classList.add('ativo');
  vFull.currentTime = vSmall.currentTime;
  vFull.play();
}

function fecharVideo() {
  const lightbox = document.getElementById('lightbox');
  const vSmall = document.getElementById('video-small');
  const vFull = document.getElementById('video-full');
  lightbox.classList.remove('ativo');
  vSmall.currentTime = vFull.currentTime;
  vFull.pause();
}
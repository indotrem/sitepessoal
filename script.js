const toggle = document.getElementById("toggleMode");

toggle.addEventListener("change", function () {

    document.body.classList.toggle("light-mode");
    
});

function abrirLightbox(botao) {
    const container = botao.parentElement;
    const videoPequeno = container.querySelector("video");

    // pega o PRIMEIRO lightbox da página
    const lightbox = document.querySelector(".lightbox");
    const videoGrande = lightbox.querySelector("video");

    videoGrande.src = videoPequeno.src;
    lightbox.style.display = "flex";
}

function fecharVideo() {
    const lightbox = document.querySelector(".lightbox");
    const video = lightbox.querySelector("video");

    video.pause();
    lightbox.style.display = "none";
}
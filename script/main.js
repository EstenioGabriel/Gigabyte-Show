function tocarMusica(){
    const audio = document.getElementById("bg-musica");
    if (audio.paused) {
        audio.volume = 0.040;
        audio.play().then(() => {
            btn.textContent = "Pausar Música";
        }).catch((err) => {
            console.log("Erro ao tocar a música:", err);
        });
    } else {
        audio.pause();
        btn.textContent = "Tocar Música";
    }
}


function irParaOutraPagina(){
    window.location.href = "pagina02.html"
}
    
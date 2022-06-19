function seta(){
    var traco = document.getElementById("traco");
    var maisTexto = document.getElementById("abaixo");
    var btnSeta = document.getElementById("btnSeta");

    if (traco.style.display === "none") {
        traco.style.display = "inline";
        maisTexto.style.display = "none";
        btnSeta.innerHTML = "Leia Mais";
    }else {
        traco.style.display = "none";
        maisTexto.style.display = "inline";
        btnSeta.innerHTML = "Leia Menos";
    }
}
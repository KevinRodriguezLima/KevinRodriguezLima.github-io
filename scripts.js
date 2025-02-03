function openLetter(clickedEnvelope) {
    // Cerrar todas las cartas abiertas
    document.querySelectorAll(".envelope").forEach(envelope => {
        if (envelope !== clickedEnvelope) {
            envelope.classList.remove("opened");
            envelope.querySelector(".letter-content").style.display = "none";
        }
    });

    // Alternar la clase 'opened' y mostrar el mensaje correspondiente
    clickedEnvelope.classList.toggle("opened");
    let letterContent = clickedEnvelope.querySelector(".letter-content");
    
    if (clickedEnvelope.classList.contains("opened")) {
        letterContent.style.display = "block";
    } else {
        letterContent.style.display = "none";
    }
}

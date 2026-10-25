function cambiarHoja(idHojaDestino) {
    // 1. Pausamos el video del gato (y cualquier otro video)
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
    });

    // 2. Pausamos cualquier otro audio que esté sonando
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.pause();
    });

    // 3. Ocultamos todas las hojas
    const hojas = document.querySelectorAll('.hoja');
    hojas.forEach(hoja => {
        hoja.style.display = 'none';
    });

    // 4. Mostramos la hoja que elegimos
    const hojaDestino = document.getElementById(idHojaDestino);
    if (hojaDestino) {
        hojaDestino.style.display = 'flex';
    }

    // 5. Si entramos a la Hoja 2, reproducimos la música de la carpeta audios
    if (idHojaDestino === 'hoja-2') {
        const musica = document.getElementById('musica-hoja2');
        if (musica) {
            musica.currentTime = 0; // Inicia la canción desde el principio
            musica.play().catch(error => {
                console.log("Error al reproducir audio:", error);
            });
        }
    }
}
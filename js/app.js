const titulo = document.querySelector("h1");
const nombre = document.querySelector("p");
const cancion = document.querySelector("audio");
const progress = document.querySelector("#progress");
const control = document.querySelector(".control");
const previous = document.querySelector(".previous");
const playPause = document.querySelector(".playPause");
const next = document.querySelector(".next");

const musica = [
    { 
        titulo: "The Empitness Machine",
        nombre: "Linkin Park",
        src: "music/The_Emptiness_Machine.mp3"
    },
    {
        titulo: "Cry",
        nombre: "Cigarettes After Sex",
        src: "music/Cigarettes_After_Sex.mp3"
    },
    {
        titulo: "Daisy (Cover)",
        nombre: "Akuma Nihmune",
        src: "music/Daisy.mp3"
    }
]

let musicIndex = 0;

function updateMusic() {
    titulo.textContent = musica[musicIndex].titulo;
    nombre.textContent = musica[musicIndex].nombre;
    cancion.src = 'media/' + musica[musicIndex].src;
    cancion.addEventListener("loadeddata", () => {
        progress.max = cancion.duration;
        
    })
   
}

previous.addEventListener("click", () => {
    musicIndex = (musicIndex - 1 + musica.length) % musica.length;
    updateMusic();
    cancion.play();
    playPause.innerHTML = '<i class="bi bi-pause-fill"></i>';
})


playPause.addEventListener("click", () => {
    if (cancion.paused) {
        cancion.play();
        playPause.innerHTML = '<i class="bi bi-pause-fill"></i>';
    }else {
        cancion.pause();
        playPause.innerHTML = '<i class="bi bi-play-fill"></i>';
    }

})

next.addEventListener("click", () => {
    musicIndex = (musicIndex + 1) % musica.length;
    updateMusic();
    cancion.play();
    playPause.innerHTML = '<i class="bi bi-pause-fill"></i>';
})

cancion.addEventListener("timeupdate", () => {
    if(!cancion.paused) {
        progress.value = cancion.currentTime;
    }
})
progress.addEventListener("input", () => {
    cancion.currentTime = progress.value;
    
})
progress.addEventListener("change", () => {
    cancion.currentTime = progress.value;
})


updateMusic();

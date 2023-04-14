const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const volume = document.getElementById('volume');
const playlist = document.getElementById('playlist');

let currentIndex = 0;
let isPlaying = false;


function playSong() {
    isPlaying = true;
    audio.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "block"
}

function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.style.display = "block";
    pauseBtn.style.display = "none"
}

function setVolume() {
   audio.volume = volume.value;
}

function loadSong(index) {
   const song = playlist.children[index].querySelector('a').getAttribute('href');
   audio.src = song;
   audio.load();
}

function nextSong() {
   currentIndex++;
   if(currentIndex>=playlist.children.length){
    currentIndex = 0;
   }
   loadSong(currentIndex);
   if(isPlaying){
    playSong();
   }
}

playBtn.addEventListener('click', playSong);
pauseBtn.addEventListener('click', pauseSong);
volume.addEventListener('click', setVolume);
audio.addEventListener('click', nextSong);
playlist.addEventListener('click', e =>{
    if(e.target.tagName === 'A'){
        e.preventDefault();
        const index = Array.from(playlist.children).indexOf(e.target.parentElement);
        currentIndex = index;
        loadSong(currentIndex);
        playSong();
    }
})


loadSong(currentIndex)


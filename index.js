console.log("Welcome to Spotify");
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let audioElement=new Audio("1.mp3");
let seekBar=document.getElementById('seekBar');


// music pause play
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.play();
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
// Time update
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress);
    seekBar.value=progress;
})
seekBar.addEventListener('change',()=>{
    audioElement.currentTime=seekBar.value*audioElement.duration/100;    
})
smallPlay1.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        smallPlay1.classList.remove('fa-play-circle');
        smallPlay1.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.src='1.mp3'
        audioElement.play();
    }
    else{
        audioElement.pause();
        smallPlay1.classList.remove('fa-pause-circle');
        smallPlay1.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
smallPlay2.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        smallPlay2.classList.remove('fa-play-circle');
        smallPlay2.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.src='2.mp3'
        audioElement.play();
    }
    else{
        audioElement.pause();
        smallPlay2.classList.remove('fa-pause-circle');
        smallPlay2.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
smallPlay3.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        smallPlay3.classList.remove('fa-play-circle');
        smallPlay3.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.src='3.mp3'
        audioElement.play();
    }
    else{
        audioElement.pause();
        smallPlay3.classList.remove('fa-pause-circle');
        smallPlay3.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
smallPlay4.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        smallPlay4.classList.remove('fa-play-circle');
        smallPlay4.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        audioElement.src='4.mp3'
        audioElement.play();
    }
    else{
        audioElement.pause();
        smallPlay4.classList.remove('fa-pause-circle');
        smallPlay4.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
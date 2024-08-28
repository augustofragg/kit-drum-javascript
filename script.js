document.body.addEventListener('keyup', (event) => {

    let sound = event.code.toLowerCase();

    playSound(sound);
});

document.querySelector('.composer button').addEventListener('click',() => {
    let song = document.querySelector('#input').value;

    if(song != '') {
        let songArr = song.split('');

        playComposer(songArr);
    }

});


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);


    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        },300);
    }
}

function playComposer(songArr) {

    let await = 0;

    for(let songItem of songArr) {

        setTimeout(() => {

            playSound(`key${songItem}`)

        },await);

        await += 250;
    }
}
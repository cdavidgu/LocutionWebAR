AFRAME.registerComponent('speech-target', {
    init: function () {
        const model = document.getElementById('locutorModel');
        const mediaButton = document.querySelector("#media-button");
        const audioSpeech = document.getElementById('audioSpeech');

        model.addEventListener('animation-loop', function (e) {
            // console.log("One Loop Finished");
            mediaButton.setAttribute("src", "#icon-play");
            play = true;
            model.setAttribute('animation-mixer', {
                timeScale: 0,
            })
        });

        this.el.addEventListener('targetFound', event => {
            console.log("target found");
            play = true;
            mediaButton.setAttribute("src", "#icon-play");
            model.setAttribute('animation-mixer', {
                clip: "*",
                loop: "repeat",
                timeScale: 0,
            });
        });

        this.el.addEventListener('targetLost', event => {
            console.log("target Lost");
            audioSpeech.components.sound.stopSound();
            model.removeAttribute('animation-mixer');
        });
    }
});
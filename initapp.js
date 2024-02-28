
let play = true;
let warningState = 0;
console.time();
let arSystem;

document.addEventListener("DOMContentLoaded", function () {
    const model = document.getElementById('locutorModel');
    const startButton = document.getElementById('start-button');
    const announcementButton = document.getElementById('announcement-btn');
    const mediaButton = document.querySelector("#media-button");
    const sceneEl = document.querySelector('a-scene');
    const footer = document.querySelector('footer');

    const audioSpeech = document.getElementById('audioSpeech');
    const arWarnings = document.getElementById('ar-warnings');
    const warningButton = document.getElementById('warning-button');
    const warningText = document.getElementById('warning-text');
    const universe = document.getElementById('universeHome');
    const warningImgContainer = document.getElementById('warning-img-container');
    // Show the selected section
    // document.getElementById(sectionId).style.display = 'block';
    // var currentImageSrc = imgWarning.src;
    warningText.innerHTML = "Asegúrate de tener suficiente espacio alrededor tuyo y suficiente iluminación. Esto hará la experiencia de realidad aumentada más fácil y agradable."
    warningImgContainer.style.backgroundImage = 'url("./Assets/ARicon.png")';


    showSection('initSection');

    const homeButton = document.getElementById('homeFooterButton');
    const announcementFooterButton = document.getElementById('announcementFooterButton');
    const missionFooterButton = document.getElementById('missionFooterButton');

    // Add a click event listener to each button
    homeButton.addEventListener('click', function (evt) {
        toggleSecondaryColor(evt);
        showSection('homeSection');

    });
    announcementFooterButton.addEventListener('click', function (evt) {
        toggleSecondaryColor(evt);
        showSection('announcementSection');

    });
    missionFooterButton.addEventListener('click', function (evt) {
        toggleSecondaryColor(evt);
        showSection('missionSection');

    });

    function toggleSecondaryColor(event) {
        homeButton.classList.remove('accent');
        announcementFooterButton.classList.remove('accent');
        missionFooterButton.classList.remove('accent');
        // Add 'amber' class to the clicked button
        event.currentTarget.classList.add('accent');
    }


    function showSection(sectionId) {
        document.getElementById('homeSection').style.display = 'none';
        document.getElementById('announcementSection').style.display = 'none';
        document.getElementById('missionSection').style.display = 'none';
        document.getElementById('initSection').style.display = 'none';

        document.getElementById(sectionId).style.display = 'flex';
    }

    sceneEl.addEventListener('loaded', function () {
        arSystem = sceneEl.systems["mindar-image-system"];
        console.log("SCENE LOADED ...");
        console.timeEnd();
    });

    sceneEl.addEventListener("arReady", (event) => {
        console.log("MindAR is ready");
        sceneEl.setAttribute('background', 'transparent', true);
        universe.object3D.visible = false;
    });


    mediaButton.addEventListener('click', function (evt) {
        console.log("Button Clicked");
        if (play) {
            audioSpeech.components.sound.playSound();
            mediaButton.setAttribute("src", "#icon-stop");
            model.setAttribute('animation-mixer', {
                timeScale: 1,
            });
        }
        else {
            mediaButton.setAttribute("src", "#icon-play");
            audioSpeech.components.sound.pauseSound();
            model.setAttribute('animation-mixer', {
                timeScale: 0,
            });
        }
        play = !play;
    });

    startButton.addEventListener('click', function (evt) {
        // startButton.style.display = "none";
        // announcementButton.style.display = "block";
        footer.style.display = "flex";
        showSection('announcementSection');
        announcementFooterButton.classList.add('accent');
    });

    announcementButton.addEventListener('click', function (evt) {
        announcementButton.style.display = "none";
        document.getElementById('announcement-List').style.display = "none";
        arWarnings.style.display = "flex";
        universe.emit('startanim001', null, false);
        footer.style.display = "none";
        // sceneSky.setAttribute('material', 'transparent', true);
        // sceneSky.setAttribute('material', 'opacity', 0.7);
    });

    warningButton.addEventListener('click', function (evt) {
        warningState++;
        if (warningState == 1) {
            // imgWarning.src = "./Assets/ScanIcon.png"
            warningImgContainer.style.backgroundImage = 'url("./Assets/ScanIcon.png")';
            warningText.innerHTML = "Apunta la cámara de tu smartphone a la tatjeta de presentación"
        }
        else {
            warningState = 0;
            warningImgContainer.style.backgroundImage = 'url("./Assets/ARicon.png")';
            warningText.innerHTML = "Asegúrate de tener suficiente espacio alrededor tuyo y suficiente iluminación. Esto hará la experiencia de realidad aumentada más fácil y agradable."
            arWarnings.style.display = "none";
            // sceneSky.setAttribute('material', 'transparent', true);
            // sceneSky.setAttribute('material', 'opacity', 0.0);
            arSystem.start();
        }
    });


});

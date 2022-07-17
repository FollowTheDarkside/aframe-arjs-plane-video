// Setup for a-frame
AFRAME.registerComponent('samplehandler', {
    init: function () {
        console.log("samplehandler init...")

        let marker = this.el;
        //let marker = this.el.sceneEl;

        marker.addEventListener('markerFound', function () {
            console.log("markerFound...");
            document.getElementById("geo-plane").emit("geo-plane-scaled");
        }.bind(this));

        marker.addEventListener('markerLost', function() {
            console.log("markerLost...");
        }.bind(this));

        // When video button clicked
        let scene = document.querySelector("a-scene");
        let video = document.getElementById("video");
        let videoButton = document.getElementById("video-button");
        videoButton.addEventListener('click', () => {
            if (scene.hasLoaded && video.paused){
                //videoButton.classList.toggle("change");
                document.getElementById("text-video").innerText = "PAUSE";
                video.play();
            } else if (scene.hasLoaded && !video.paused){
                document.getElementById("text-video").innerText = "PLAY";
                video.pause();
            }
        });

        // When control button clicked
        let buttonLeft = document.getElementById("button-left");
        buttonLeft.addEventListener('click', () => {
            if (scene.hasLoaded){
                const plane = document.getElementById("geo-plane")
                //console.log("pos:", plane.object3D.position);
                plane.object3D.position.x += 10;
            }
        });
        let buttonRight = document.getElementById("button-right");
        buttonRight.addEventListener('click', () => {
            if (scene.hasLoaded){
                const plane = document.getElementById("geo-plane")
                plane.object3D.position.x -= 10;
            }
        });
        let buttonUp = document.getElementById("button-up");
        buttonUp.addEventListener('click', () => {
            if (scene.hasLoaded){
                const plane = document.getElementById("geo-plane")
                plane.object3D.position.z -= 10;
            }
        });
        let buttonDown = document.getElementById("button-down");
        buttonDown.addEventListener('click', () => {
            if (scene.hasLoaded){
                const plane = document.getElementById("geo-plane")
                plane.object3D.position.z += 10;
            }
        });

        // When 'y' key pressed
        document.addEventListener('keydown', (e) => {
            console.log("keydowned:", e.key);
            if (scene.hasLoaded && e.key === "y"){
                const plane = document.getElementById("geo-plane")
                //console.log("pos:", plane.object3D.position);
                plane.object3D.position.y += 10;
            } else if (scene.hasLoaded && e.key === "Y"){
                const plane = document.getElementById("geo-plane")
                plane.object3D.position.y -= 10;
            }
        });
    }
});

window.onload = function() {
    console.log("window loaded...");

    // Disable text selection
    document.onselectstart = function() {
        return false;
    }
};
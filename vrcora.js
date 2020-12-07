var scene = document.querySelector("a-scene");
    var vid = document.getElementById("video");

    if (scene.hasLoaded) {
      run();
    } else {
      scene.addEventListener("loaded", run);
    }

    function run () {
        scene.querySelector(".a-enter-vr-button").addEventListener("click", function(e){
            console.log("VR Mode entered");
            this.style.display = "none";
            vid.play();
        }, false);
    }
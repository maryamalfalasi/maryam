document.addEventListener("DOMContentLoaded", function(event) {
  var scene = document.querySelector("a-scene");
  var vid = document.getElementById("video");
  var videoShere = document.getElementById("videoShere");

  if (scene.hasLoaded) {
    run();
  } else {
    scene.addEventListener("loaded", run);
  }

  function run () {
    if(AFRAME.utils.device.isMobile()) {
      document.querySelector('#splash').style.display = 'flex';
      document.querySelector('#splash').addEventListener('click', function () {
        playVideo();
        this.style.display = 'none';
      })
    } else {
        playVideo();
    }
  }

  function playVideo () {
    vid.play();
    videoShere.components.material.material.map.image.play();
  }
})
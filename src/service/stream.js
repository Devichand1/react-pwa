function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      console.log(stream);
      window.localStream = stream; // A
      window.localAudio.srcObject = stream; // B
      window.localAudio.autoplay = true; // C
      navigator.mediaSession.setActionHandler("play", () => {
        console.log("play");
      });
    })
    .catch((err) => {
      console.log("u got an error:" + err);
    });
}

export default getLocalStream;

import React, { useEffect } from "react";

const Stream = () => {
  useEffect(() => {
    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!", err0r);
        });
    }
  }, []);
  return (
    <div id="container">
      <video autoplay="true" id="videoElement"></video>
    </div>
  );
};

export default Stream;

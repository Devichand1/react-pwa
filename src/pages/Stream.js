import React, { useEffect, useState } from "react";

const Stream = () => {
  const [stopRecording, setstopRecording] = useState()
  const [startRecording, setstartRecording] = useState()
  
  useEffect(() => {
    var video = document.querySelector("#videoElement");
  
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(function (stream) {
            video.srcObject = stream;
          var mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = handleDataAvailable;
         mediaRecorder.start();
         let recordedChunks=[];


function handleDataAvailable(event) {
  console.log("data-available");
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
    console.log(recordedChunks);
    download(recordedChunks);
  } else {
    // ...
  }
}

// demo: to download after 9sec
if(stopRecording){
  video.srcObject = null;
  mediaRecorder.stop();
}

        
        })
        .catch(function (err0r) {
          console.log("Something went wrong!", err0r);
        });
    }

// Optional frames per second argument.



  }, [stopRecording, startRecording]);
  function download(recordedChunks) {
    var blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "test.webm";
    a.click();
    window.URL.revokeObjectURL(url);
  }



  const stoprecording = () => {
    setstopRecording(true)

  }

  const startrecording = () => {
    setstartRecording(true)

  }
  return (
    <div id="container">
      <video  autoplay="true" id="videoElement"></video>
      <h3>Recording </h3>
      <button onClick={()=>stoprecording()} >Stop</button>
      <button onClick={()=>stoprecording()} >Download</button>
    </div>
  );
};

export default Stream;

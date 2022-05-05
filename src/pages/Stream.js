import React, { useEffect, useState } from "react";

const Stream = () => {
  const [count, setcount] = useState(10)
  
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
setTimeout(() => {
    video.srcObject = null;
  mediaRecorder.stop();
},11000);

// demo: to download after 9sec


        
        })
        .catch(function (err0r) {
          console.log("Something went wrong!", err0r);
        });
    }

// Optional frames per second argument.



  }, []);
  useEffect(() => {
    if(count > 0){ 
       setTimeout(() => {
     setcount(count - 1)
   }, 1000);
    }
 
  }, [count])

 



  const stoprecording = () => {
    // setstopRecording(true)

  }

  return (
    <div id="container">
      <video  autoplay="true" id="videoElement"></video>
      <div
      style={{
        flexDirection:"row",
        display:"flex",
        alignItems:"center",
      }}
      >
    <div
    style={{
      content:"",
      width:'10px',
      height:"10px",
      borderRadius:100,
backgroundColor:"red",
marginRight:"10px",
        }}
    >

    </div>

           <h3>Recording </h3>
      </div>
   
      <p onClick={()=>stoprecording()} >Video will be downloaded after {count}s</p>

    </div>
  );
};

export default Stream;


const videoGrid = document.getElementById('video_Grid');
// console.log(videoGrid);
const myVideo = document.createElement('video');

myVideo.muted = true;
// console.log(aaa);
let myVideoStream;

//access
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}) 
.then(stream=>{
    myVideoStream = stream;
    addVideoStream(myVideo,stream);
})
//user will give excess to camera and mic

const addVideoStream = (video,stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata',() => {
        video.play();
    });
    videoGrid.append(video);
}
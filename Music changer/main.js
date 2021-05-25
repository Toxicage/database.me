scoreRightWrist=""
scoreLeftWrist=""
song=""
alternator=0
leftWristY=""
rightWristY=""
song_change=[];
function setup(){
    canvas=createCanvas(250, 250);
    canvas.position(525,100);
    video=createCapture(VIDEO);
    video.hide();
     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose', gotPoses);
}
function preload(){
song_1=loadSound("TheFatRat-Monody.mp3")
song_2=loadSound("TheFatRat-Close-To-The-Sun.mp3")
song_change=[song_1,song_2];
}
function draw(){
    image(video,0,0,250,250)
    if(scoreLeftWrist>scoreRightWrist){
    song_1.pause();
    song_2.play();
    }
    if(scoreRightWrist>scoreLeftWrist){
        song_2.pause();
        song_1.play();
}
}
function modelLoaded(){
    console.log("PoseNet is initialized")
}
function gotPoses(results){
if (results.length>0){
    console.log(results);
    scoreRightWrist=results[0].pose.keypoints[9].score;
    scoreLeftWrist = results[0].pose.keypoints[10].score;
    console.log("left wrist score=" + scoreLeftWrist);
    leftWristY=results[0].pose.leftWrist.y;
    console.log('leftWristY=' + leftWristY);
    rightWristY=results[0].pose.rightWrist.y;
    console.log('rightWristY=' + rightWristY);
}
}



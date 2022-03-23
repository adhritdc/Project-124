function setup()
{
 

    canvas = createCanvas(400,400);
    canvas.position(600,200);
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(100,200);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function preLoad()
{
}
function draw()
{
}
function modelLoaded()
{
    console.log("model is loaded!");
}
function gotPoses(results,error)
{
    if (results.length > 0) 
    {
        console.log(results);
    }
    else if (error)
    {
        console.log(error);
        console.log("Right Wirst's X Position = " + results[0].pose.rightWrist.x + "Right Wirst's Y Position = " + results[0].pose.rightWrist.y);
        console.log("Left Wirst's X Position = " + results[0].pose.leftWrist.x + "Left Wirst's Y Position = " + results[0].pose.lefttWrist.y);
    }
}
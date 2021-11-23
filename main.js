mustacheX = 0;
mustacheY = 0;

function preload() {
mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size = (300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, mustacheX, mustacheY, 30, 30);
}

function take_snapshot() {
    save('Sugathri.png');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.mustache.x -15;
        noseY = results[0].pose.mustache.y -15;
        console.log("mustache x = " + results[0].pose.mustache.x);
        console.log("mustache y = " + results[0].pose.mustache.y);
    }
}
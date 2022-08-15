var nose_x  = 10;
var nose_y = 10;

function preload(){
    
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

   my_poseNet = ml5.poseNet(video, model_loaded);

   my_poseNet.on('pose', got_results);

  
}

function got_results(results){

    console.log(results);

}



function model_loaded(){
    
    console.log("PoseNet Model is Loaded");
}


function draw(){
    image(video, 0, 0, 300,300);
    fill("red");
    circle(nose_x, nose_y, 30);
}



function takeSnap()
{
    save("clown_nose_filter.png");
}



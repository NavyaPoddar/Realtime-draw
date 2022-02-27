Nose_x = 0 ; 
Nose_y = 0 ;
Right_wrist_x = 0 ;
Left_wrist_x = 0;
Distance = 0 ;

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(700,200);
    video = createCapture(VIDEO);
    video.size(600,500);
    video.position(100,200);
    posenetmodel = ml5.poseNet(video,modelloaded);
    posenetmodel.on("pose",getresults);
}

function modelloaded(){
    console.log("pose net has loaded");
}

function getresults(resultsarray){
    if(resultsarray.length > 0){
        console.log(resultsarray);
Nose_x = resultsarray[0].pose.nose.x ; 
Nose_y = resultsarray[0].pose.nose.y ; 
Right_wrist_x = resultsarray[0].pose.rightWrist.x ;
Left_wrist_x = resultsarray[0].pose.leftWrist.x ;
distance = Math.floor(Right_wrist_x - Left_wrist_x);
    }
}

function draw(){
    background("#c6d8f5");
stroke("lightblue");
fill("blue");
square(Nose_x , Nose_y , distance)  
}








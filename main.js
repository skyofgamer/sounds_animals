//https://teachablemachine.withgoogle.com/models/JbriwTEzr/

function Start_classification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JbriwTEzr/model.json",modelReady);
}
function modelReady(){
    console.log("modelReady");
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
}
function Stop_classification(){
    navigator.mediaDevices.getUserMedia({audio: false});
    window.location.reload();
}
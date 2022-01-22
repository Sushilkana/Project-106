function Startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/e97PR4jLO/model.json",model_ready);
}

function model_ready(){
    classifier.classify(gotresult);
}

function gotresult(error,result){
    console.log(result);
}
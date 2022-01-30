function Startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/e97PR4jLO/model.json",model_ready);
}

function model_ready(){
    classifier.classify(gotresult);
}

function gotresult(error,results){
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("result_label").innerHTML = "I can hear- " + result[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuary- " + (result[0].confidence * 100).toFixed(2) + "%";

        img1 = document.getElementById('img_1');
        img2 = document.getElementById('img_2');
        img3 = document.getElementById('img_3');
        img4 = document.getElementById('img_4');
        img5 = document.getElementById('img_5');


        if (results[0].label == "Background Noise") {
            img1.src = 'Sound Wave.gif';
            img2.src = 'Dog.jpg';
            img3.src = 'cat.jpg';
            img4.src = 'Cow.png';
            img5.src = 'Lion.jpg';
        } else if (results[0].label == "Barking"){
            img1.src = 'Sound wave.jpg';
            img2.src = 'Dog.gif';
            img3.src = 'cat.jpg';
            img4.src = 'Cow.png';
            img5.src = 'Lion.jpg';
        } else if (results[0].label == "Meowing"){ 
            img1.src = 'Sound Wave.jpg';
            img2.src = 'Dog.jpg';
            img3.src = 'Cat.gif';
            img4.src = 'Cow.png';
            img5.src = 'Lion.jpg';
        } else if (results[0].label == "Mooing"){ 
            img1.src = 'Sound wave.jpg';
            img2.src = 'Dog.jpg';
            img3.src = 'cat.jpg';
            img4.src = 'Cow.gif';
            img5.src = 'Lion.jpg';
        } else { 
            img1.src = 'Sound wave.jpg';
            img2.src = 'Dog.jpg';
            img3.src = 'cat.jpg';
            img4.src = 'Cow.png';
            img5.src = 'Lion.gif';
        }
    }
}
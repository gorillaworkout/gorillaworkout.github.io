// function bmi(){
//     var height= document.getElementById("height").value;
//     var weight= document.getElementById("weight").value;
//     var bmi = weight/(height/100*height/100);
//     var bmio=(bmi.toFixed(2))
//     document.getElementById("result").innerHTML="your BMI is " + bmio;
// }


function bmi() {
    var height= document.getElementById("height").value;
    var weight= document.getElementById("weight").value;
    var tinggi = height/100;
    var bmi = weight / (tinggi * tinggi)
    var bmio = (bmi.toFixed(2))
    if(bmio < 17 && bmio <= 18.4) {
        document.getElementById("result").innerHTML= `Your BMI is ${bmio} UnderWeight`
    }else if(bmi >18.5 && bmi <=25 ){
        document.getElementById("result").innerHTML= `Your BMI is ${bmio} Normal`
    }else if (bmi > 25.1 && bmi <=27){
        document.getElementById("result").innerHTML= `Your BMI is ${bmio} OverWeight`
    } else {
        document.getElementById("result").innerHTML= `Your BMI is ${bmio} Obesity`
    }
}
const myText = document.getElementById("myText")
const mySubmit= document.getElementById("mySubmit")
const marksResult = document.getElementById("marksResult")
let grades;

mySubmit.onclick = function(){
    grades= myText.value;
    grades=Number(grades);

    if(grades>=101){
        marksResult.textContent =`You are out of range`//max is 100
    }
    else if(grades>=79){
        marksResult.textContent = `You have an A`
    }
    else if(grades>=60){
        marksResult.textContent=`You have a B`
    }else if(grades>=49){
        marksResult.textContent=`You have a C`
    }else if(grades>=40){
        marksResult.textContent=`You have a D`
    }
    else{
        marksResult.textContent=`You have an E`
    }
}



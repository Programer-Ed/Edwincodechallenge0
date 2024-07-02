const myText=document.getElementById("myText")
const mySubmit=document.getElementById("mySubmit")
const demeritPoints=document.getElementById("demeritPoints")
let speed;
mySubmit.onclick=function(){
    speed=myText.value;
    speed=Number(speed);

    if(speed<=70){
        demeritPoints.textContent="Ok";//when speed is lower than 70
    }
    else{
        let points=Math.floor((speed-70)/5)//calculates points for every 5km/s
        demeritPoints.textContent=`Points:${points}`
        if(points>=12){
           demeritPoints.textContent="License suspended."//when points are more or equal to 12
        }
    }
}

document.addEventListener("DOMContentLoaded",function(){

const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
let clockSpeed = 2; // Counts [INPUT] times faster (then ussual)

let time = {ts:0,tm:0,th:0};
let length = {ls:12, lm:8, lh:4};

function countUp(){
time.ts += 1;

if(time.ts >= 60){
    time.ts = 0; time.tm +=1;
}
if(time.tm >= 60){
    time.tm = 0; time.th +=1;
}
if(time.th >= 24){
    time.ts = 0; time.tm = 0; time.th = 0;
}
    seconds.textContent = time.ts.toString().repeat(seconds.textContent.length-2 > length.ls ? length.ls/2+1: length.ls)+"S"; // set to time.ts;
    minutes.textContent = time.tm.toString().repeat(minutes.textContent.length-2 > length.lm ? length.lm/2+1: length.lm)+"M"; // set to time.tm;
    hours.textContent = time.th.toString().repeat(hours.textContent.length-2 > length.lh ? length.lh/2+1: length.lh)+"H"; // set to time.th;
    //possibility: counting the sum of the numbers and if they are over a specific sum they do half the string length size (999) 9+9+9 = 27 if 27 or > then ...
}

function rotate(){
    
}


    seconds.textContent = time.ts.toString().repeat(seconds.textContent.length-2 > length.ls ? length.ls/2+1: length.ls)+"S"; // set to time.ts;
    minutes.textContent = time.tm.toString().repeat(minutes.textContent.length-2 > length.lm ? length.lm/2+1: length.lm)+"M"; // set to time.tm;
    hours.textContent = time.th.toString().repeat(hours.textContent.length-2 > length.lh ? length.lh/2+1: length.lh)+"H"; // set to time.th;

setInterval(countUp,1000/clockSpeed); // make it count

});

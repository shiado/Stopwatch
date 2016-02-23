var resetButton = document.getElementById("reset");

var startButton = document.getElementById("start");

var pause = document.getElementById('pause');

var seconds=0;

var timerId;




startButton.addEventListener("click",function(){
  intervalId=setInterval(function(){
    updateTime()},1000);
  
});


pause.addEventListener('click',function(){
    clearInterval(intervalId);
});


reset.addEventListener('click',function(){
    clearInterval(intervalId);
    seconds = 0; //setting the time to zero
    document.getElementById('timer').innerHTML = "Timer Stopped"
});


function updateTime(){
  seconds ++; 
  document.getElementById("timer").innerHTML = "timer count "+ seconds;
};


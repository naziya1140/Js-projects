let clock= document.getElementById('clock');
// let time= document.getElementByClass('clock');
// let time= document.querySelector('#clock');

//we want to display time after every second, therefore we need something that works in a given interval of time.
//takes two params, one function and other one is time.
setInterval(function(){
    let date= new Date();
    clock.innerHTML= date.toLocaleTimeString();
}, 1000);

//set interval is repeatedly executing the code after 1sec(1000ms)
const time=document.getElementById('Time');
setInterval(function(){
    let tim=new Date();
    time.innerHTML=tim.toLocaleTimeString();
},0);
const date=document.getElementById('date');
setInterval(function(){
    let dat=new Date();
    date.innerHTML=dat.toLocaleDateString();
},0);
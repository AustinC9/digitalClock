 function currentTime() {
  let date = new Date();  /* create object for new date */
  let hour = date.getHour();
  let min = date.getMinute();
  let sec = date.getSeconds();  
 

 function currentTime() {
     hour = updateTime(hour);
     min = updateTime(min);
     sec = updateTime(sec);
}

function updateTime(k) {
    if (k < 10){ return '0' + k;
  } 
  else {return k;
    }
}


document.getElementById("clock").innerHTML = hour + ' : ' + min + ' : ' + sec; 

function currentTime() {
    var t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();
 }
function currentTime() {
  let date = new Date();  /* create object for new date */
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();  
 

 
     hour = updateTime(hour);
     min = updateTime(min);
     sec = updateTime(sec);

document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;

var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) {
    if (k < 10){ return '0' + k;
  } 
  else {return k;
    }
}
currentTime();

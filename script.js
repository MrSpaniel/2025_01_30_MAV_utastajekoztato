function clock()
{
    let date=new Date();
    let seconds=date.getSeconds();
    if(seconds<10){
        seconds="0"+seconds
    }
    let minutes=date.getMinutes();    
    if(minutes<10){
        minutes="0"+minutes
    }
    let hours=date.getHours();
    if(hours<10){
        hours="0"+hours
    }
    document.getElementById("clock").innerHTML=hours+":"+minutes+":"+seconds;
}
setInterval(clock,1000);
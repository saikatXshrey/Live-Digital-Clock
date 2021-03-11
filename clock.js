
function show_time(){

    let time=new Date();
    let hours=time.getHours();
    let seconds=time.getSeconds();
    let min=time.getMinutes();
    
    let am_pm = formatter(hours);

    
    hours = subtractor(hours);
    
    hours = addZero(hours);
    min = addZero(min);
    seconds = addZero(seconds);

    document.querySelector('.clock_container').innerHTML=`${hours} : ${min} : ${seconds} ${am_pm}`;
}

function formatter(time){
    let x = 'AM';
    if(time >= 12){
         x='PM'
    }    
    return x;
}

function subtractor(time){

    if(time>=12)
    {
        time=time-12;
    }
    return time;
}

function addZero(time){
    if(time < 10){
        time = '0' + time;
    }
    return time;
}

show_time();
setInterval(show_time,1000);
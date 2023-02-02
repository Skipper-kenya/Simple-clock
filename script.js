

// let c_year=curr_day.getFullYear();
// let cur_month=curr_day.getMonth();
// let curr_date=curr_day.getDate();








window.addEventListener('DOMContentLoaded',()=>{
    let interv=setInterval(()=>{
        clockTimer()
    },1000)

})
clockTimer();

function clockTimer(){
    let curr_day=new Date();
    let cuurTime=curr_day.getTime();


    let oneday= 24 * 60 * 60 * 1000;
    let onehour=60 * 60 * 1000;
    let oneminute= 60 * 1000;

    let hour=Math.floor((cuurTime % oneday) / onehour);
    hour+=3
    let minutes=Math.floor((cuurTime % onehour /oneminute));
    let seconds=Math.floor((cuurTime % oneminute) / 1000);

    let values=[hour,minutes,seconds];

    let time_cont=document.querySelectorAll('.time');

    function zeroAdder(item){
        if(item < 10){
            return `0${item}`
        }

        return item
    }


    time_cont.forEach((time,value)=>{
        time.innerHTML=zeroAdder(values[value])
    })

}
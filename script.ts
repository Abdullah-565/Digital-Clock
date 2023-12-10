function clock (){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
    let hours:any = document.getElementById("hours")
    let minutes:any = document.getElementById("minutes")
    let seconds :any= document.getElementById("seconds")
    let periods :any= document.getElementById("AM")
    let day :any= document.getElementById("dd")
    let date :any= document.getElementById("dt")

    let time = new Date();
    
    let h:number|string =time.getHours();
    let m:number|string =time.getMinutes();
    let s:number|string =time.getSeconds();
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();
    
    if(h>12){
        h=h-12;
    }
    if(h==0){
        h=12;
    }
    
    
    let ampm = h<=12 ? "PM": "AM";
    
    periods.innerHTML = ampm;
    
    h =h<10 ? "0"+ h: h;
    m =m<10 ? "0"+ m: m;
    s =s<10 ? "0"+ s: s;
    
    
    hours.innerHTML = h ;
    minutes.innerHTML = m   ;
    seconds.innerHTML = s ;
    day.innerHTML = days[d] ;
    date.innerHTML = months[mm] + " " + dd +", "+ yy ;
    
    
}
setInterval(clock,1000);

let mili1 = 0;
let mili2 = 0;
let seconde1 = 0;
let seconde2 = 0;
let minute1 = 0;
let minute2 = 0;
let heure1 = 0;
let heure2 = 0;

document.getElementById("mili-d").innerHTML = mili1;
document.getElementById("mili-g").innerHTML = mili2;
document.getElementById("seconde-d").innerHTML = seconde1;
document.getElementById("seconde-g").innerHTML = seconde2;
document.getElementById("minute-d").innerHTML = minute1;
document.getElementById("minute-g").innerHTML = minute2;
document.getElementById("heure-d").innerHTML = heure1;
document.getElementById("heure-g").innerHTML = heure2;

let onoff = false
function start(){
    if(onoff==true){
        for(let i=0;i<1;i++){
            mili1++;
            if(mili1==10){
                mili1=0;
                mili2++;
            }
            if(mili2==10){
                mili2=0;
                seconde1++;
            }
            if(seconde1==10){
                seconde1=0;
                seconde2++;
            }
            if(seconde2==6){
                seconde2=0;
                minute1++;
            }
            if(minute1==10){
                minute1=0;
                minute2++;
            }
            if(minute2==6){
                minute2=0;
                heure1++;
            }
            if(heure1==10){
                heure1=0;
                heure2++;
            }
        }

        document.getElementById("mili-d").innerHTML = mili1;
        document.getElementById("mili-g").innerHTML = mili2;
        document.getElementById("seconde-d").innerHTML = seconde1;
        document.getElementById("seconde-g").innerHTML = seconde2;
        document.getElementById("minute-d").innerHTML = minute1;
        document.getElementById("minute-g").innerHTML = minute2;
        document.getElementById("heure-d").innerHTML = heure1;
        document.getElementById("heure-g").innerHTML = heure2;
        setTimeout(start,9);
    }
};

function on(){
    if(onoff==false){
    onoff = true;
    start();
    }
}
function off(){
    onoff = false;
}
function stop(){
    onoff = false;
    mili1 = 0;
    mili2 = 0;
    seconde1 = 0;
    seconde2 = 0;
    minute1 = 0;
    minute2 = 0;
    heure1 = 0;
    heure2 = 0;
    document.getElementById("mili-d").innerHTML = mili1;
    document.getElementById("mili-g").innerHTML = mili2;
    document.getElementById("seconde-d").innerHTML = seconde1;
    document.getElementById("seconde-g").innerHTML = seconde2;
    document.getElementById("minute-d").innerHTML = minute1;
    document.getElementById("minute-g").innerHTML = minute2;
    document.getElementById("heure-d").innerHTML = heure1;
    document.getElementById("heure-g").innerHTML = heure2;
}





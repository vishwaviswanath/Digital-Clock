function digitalClock() {

    let hr = document.getElementById("hours");
    let min = document.getElementById("minutes");
    let sec = document.getElementById("seconds");
    // let mill = document.getElementById("milliseconds");

    let Dates = new Date();
    let hourhour = Dates.getHours();
    let minutesminutes = Dates.getMinutes();
    let secondsseconds = Dates.getSeconds();
    // let millisecondsmilliseconds = Dates.getMilliseconds();

    hr.innerHTML = hourhour;
    min.innerHTML = minutesminutes;
    sec.innerHTML = secondsseconds;
    // if (hourhour == 13) {
    //     hourhour = 12;
    //     document.getElementById("ampm").innerHTML = "PM";
    // }
    if (hourhour > 12) {
        if (hourhour == 13) {
            hourhour = 12;
        } else {
            hourhour = hourhour - 12;
        }
        document.getElementById("ampm").innerHTML = "PM";
    }
    if (hourhour < 10) {
        hr.innerHTML = '0' + hourhour;
    }

    if (minutesminutes < 10) {
        min.innerHTML = '0' + minutesminutes;
    }
    if (secondsseconds < 10) {
        sec.innerHTML = '0' + secondsseconds;
    }


    // mill.innerHTML = millisecondsmilliseconds;

}
setInterval(digitalClock, 500);

function zeroStringBefore() {
    let mill = document.getElementById("milliseconds");
    let Dates = new Date();
    let millisecondsmilliseconds = Dates.getMilliseconds();
    mill.innerHTML = millisecondsmilliseconds;
    if (millisecondsmilliseconds < 10)
        mill.innerHTML = '000' + millisecondsmilliseconds;
    if (millisecondsmilliseconds >= 10 && millisecondsmilliseconds < 100)
        mill.innerHTML = '00' + millisecondsmilliseconds;
    if (millisecondsmilliseconds >= 100 && millisecondsmilliseconds < 1000)
        mill.innerHTML = '0' + millisecondsmilliseconds;
}
setInterval(zeroStringBefore, 0.5);
// console.log("Hello Dathan Javascript is active");

window.onload=function(){
    // EVERYTHING HAPPENS ON PAGE LOAD
    function displayTime(){

        // CREATE VARIABLES TO STORE DATA

        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridiem = "AM"; // DEFUALT IS AM FOR 12 HOUR CLOCK

        // IF THE HOURS DIGIT IS LESS THAN 10

        if (hours < 10) {
            hours = "0" + hours;
        }

        // IF THE MINUTES DIGIT IS LESS THAN 10

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // IF THE SECOND DIGIT IS LESS THEN 10

        if (seconds < 10) {
            // ADD THE "0" DIGIT TO THE FRONT
            // SO 9 BECOMES "09"
            seconds = "0" + seconds;
        }

        // CONVERT CLOCK FROM 24 HOUR TO 12 HOUR FORMAT
        // AND KEEP TRACK OF THE MERIDIEM.

        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }

        // 0 AM AND 0 PM SHOULD READ AS 12

        if (hours === 0) {
            hours = 12;
        }

        // CREATE VARIABLE TO PASS DATA TO ON THE FRONTEND

        var clockDiv = document.getElementById('clock');

        // SET THE TEXT INSIDE OF THE CLOCK DIV
        // TO THE HOURS, MINUTES, AND SECONDS OF THE CURRENT TIME

        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + "" + meridiem;

    }

    displayTime();

    // THIS WILL MAKE THE CLOCK TICK BY REPEATEDLY
    // RUNNING THE DISPLAYTIME FUNCTION EVERY SECOND.

    setInterval(displayTime, 1000);

}
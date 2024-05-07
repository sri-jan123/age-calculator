let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0]; // Set the maximum date to today
let res=document.getElementById("result");

function calculateAge() {
    let birthdate = new Date(userinput.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        m3 = 12 + m2 - m1;
        y3--; // Adjust the year if the current month is before the birth month
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--; // Adjust the month
        d3 = getNumberOfDays(y1, m1) - d1 + d2; // Calculate remaining days
    }

    if (m3 < 0) {
        m3 = 11; // Adjust the month if negative
        y3--;
    }
    res.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;

      
   
}

function getNumberOfDays(year, month) {
    return new Date(year, month, 0).getDate();
}

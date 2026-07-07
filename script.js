/* LOGIN */
function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username === "nadhif" && password === "123"){
        alert("Login Berhasil");
        window.location.href = "dashboard.html";
    }
    else{
        alert("Username atau Password Salah");
    }
}

/* DASHBOARD */

function updateSensor(){

    let suhu =
    Math.floor(Math.random()*10)+25;

    let kelembaban =
    Math.floor(Math.random()*20)+60;

    let cahaya =
    Math.floor(Math.random()*500)+200;

    if(document.getElementById("suhu")){
        document.getElementById("suhu").innerHTML =
        suhu + " °C";

        document.getElementById("kelembaban").innerHTML =
        kelembaban + " %";

        document.getElementById("cahaya").innerHTML =
        cahaya + " Lux";
    }
}

function kontrol(alat){

    let waktu =
    new Date().toLocaleTimeString();

    let li =
    document.createElement("li");

    li.innerHTML =
    waktu + " - " + alat + " diaktifkan";

    document.getElementById("logAktivitas")
    .appendChild(li);
}

if(document.getElementById("suhu")){
    updateSensor();
    setInterval(updateSensor,2000);
}
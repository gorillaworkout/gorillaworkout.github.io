function kali() {
    let angka1 = document.getElementById("number1").value
    let angka2 = document.getElementById("number2").value
    let kali = angka1 * angka2
    document.getElementById("output-cal").innerHTML = `${angka1} x ${angka2} = ${kali}`;

}

function bagi() {
    let angka1 = document.getElementById("number1").value
    let angka2 = document.getElementById("number2").value
    let bagi = angka1/angka2;
    document.getElementById("output-cal").innerHTML = `${angka1} : ${angka2} = ${bagi}`;
}

function tambah() {
    let angka1 = document.getElementById("number1").value
    let angka2 = document.getElementById("number2").value
    let tambah = parseInt(angka1) + parseInt(angka2);
    document.getElementById("output-cal").innerHTML = `${angka1} + ${angka2} = ${tambah}`
    console.log(angka1, angka2)
}
function kurang() {
    let angka1 = document.getElementById("number1").value
    let angka2 = document.getElementById("number2").value
    let kurang = parseInt(angka1) - parseInt(angka2);
    document.getElementById("output-cal").innerHTML = `${angka1} + ${angka2} = ${kurang}`
    console.log(angka1, angka2)
}

function modulus() {
    let angka1 = document.getElementById("number1").value
    let angka2 = document.getElementById("number2").value
    let modulus = angka1%angka2;
    document.getElementById("output-cal").innerHTML = `${angka1} % ${angka2} = ${modulus}`;
}

function pangkat() {
    let angka1 = document.getElementById("number1").value
    let angka2 = document.getElementById("number2").value
    let pangkat = Math.pow(angka1,angka2)
    document.getElementById("output-cal").innerHTML = `${angka1} ^ ${angka2} = ${pangkat}`;
}
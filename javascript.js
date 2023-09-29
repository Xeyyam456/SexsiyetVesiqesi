
let idScreen = document.querySelector('#idscreen');
let alarmScreen = document.querySelector('alarmscreen');
let p = document.querySelector('#result');
let btn = document.querySelector('#btn');



btn.addEventListener('click', function () {
    p.style.display = "block"
    if (idScreen.value == "") {
        p.textContent = "ID nomresi bos buraxila bilmez!"
        idScreen.style.color="red";
    } else if (isNaN(idScreen.value)) {
        p.textContent = "ID nomresine ancaq reqem daxil edilmelidir!"
        idScreen.style.color="red";
    } else if (idScreen.value[0] == 0 || idScreen.value[0] == "." ||
        idScreen.value[0] == "+" || idScreen.value[0] == "-") {
            p.textContent = "ID nomresinin ilk reqemi (0) ve ya her hansi karakter ile baslaya bilmez!"
            idScreen.style.color="red";
    } else if (idScreen.value.length !== 8) {
        p.textContent = "ID nomresinin uzunlugu (8) karakterden kicik ola bilmez!"
        idScreen.style.color="red";
    } else if (idScreen.value[7] == 0 || idScreen.value[7] == "." ||
    idScreen.value[0] == "+" || idScreen.value[0] == "-") {
        p.textContent = "ID nomresinin son reqemi (0) ve ya her hansi karakter ile bite bilmez!"
        idScreen.style.color="red";
    } else {
        p.textContent = `ID nomresi ${idScreen.value} olaraq ugurla teyin edildi!`
        idScreen.style.color="green";
    }
});
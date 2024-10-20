let gondolt_szam = Math.floor(Math.random()*100)+1;
let talalgatasok_szama = 0;
let kiirt_szam = leadnumber();
let tippelt_szam;
let tippelt_szamok = [];
const numberInput = document.querySelector('#tippelt_szam');
const message = document.querySelector('.message');
const form = document.querySelector('#form');

gondolt_szam_check();
/*
leadnumber(kiirt_szam);
*/
console.log(kiirt_szam);

let elozo_szam = gondolt_szam;

savenumber(elozo_szam);

console.log

function gondolt_szam_check(){
    if (!gondolt_szam > 0 || !gondolt_szam < 101) {
        gondolt_szam = Math.floor(Math.random()*100)+1;
        gondolt_szam_check;
    }
}

form.addEventListener('submit', onSubmit);

rebooting.addEventListener('submit', reboot);

function onSubmit(ev)
{
    tippelt_szam = numberInput.value;
    ev.preventDefault();

    if (tippelt_szamok.includes(tippelt_szam)){
        message.classList.add('attention');
        message.innerHTML = 'Ezt a számot már egyszer tippelted!';

        clearAttention();
    }    
    else if (numberInput.value == '' || numberInput.value < 1 || numberInput.value > 100){
        message.classList.add('error');
        message.innerHTML = 'Helytelen érték!';

        clearError();
    }
    else if (numberInput.value < gondolt_szam) {
        talalgatasok_szama++;
        tippelt_szamok.push(tippelt_szam);
        if (talalgatasok_szama == 5) {
            message.classList.add('end');
            message.innerHTML = 'Sajnos vége az 5 lhetőségednek. A gondolt szám: ' + gondolt_szam;
            
            clearEnd();
            setTimeout( () => { 
                window.location.reload();
                }, 5000)
        }
        else {
        message.classList.add('attention');
        message.innerHTML = 'Nagyobbra gondoltam.';
        
        clearAttention();
        }
    }
    else if (numberInput.value > gondolt_szam) {
        talalgatasok_szama++;
        tippelt_szamok.push(tippelt_szam);
        if (talalgatasok_szama == 5) {
            message.classList.add('end');
            message.innerHTML = 'Sajnos vége az 5 lhetőségednek. A gondolt szám: ' + gondolt_szam;
            
            clearEnd();
            setTimeout( () => { 
                window.location.reload();
                }, 5000)
        }
        else {
        message.classList.add('attention');
        message.innerHTML = 'Kisebbre gondoltam.';
        
        clearAttention();
        }
    }
    else if (numberInput.value == gondolt_szam) {
        tippelt_szamok.push(tippelt_szam);
        message.classList.add('congratulation');
        message.innerHTML = 'Gratulálok! Eltaláltad a számot!';
        
        clearCongratulation();
        setTimeout( () => { 
            window.location.reload();
            }, 5000)
    }
    else {
        message.classList.add('error');
        message.innerHTML = 'Valami hiba történt!';
    }
}

function reboot(){
    window.location.reload();
}

function clearError() {
    setTimeout( () => {
    message.classList.remove('error');
    message.innerHTML = '';
    }, 2000)
}

function clearAttention() {
    setTimeout( () => {
    message.classList.remove('attention');
    message.innerHTML = '';
    }, 2000)
}

function clearCongratulation() {
    setTimeout( () => {
    message.classList.remove('congratulation');
    message.innerHTML = '';
    }, 5500)
}

function clearEnd() {
    setTimeout( () => {
    message.classList.remove('congratulation');
    message.innerHTML = '';
    }, 5500)
}

function savenumber(elozo_szam) {
    localStorage.setItem('elozo_szam', elozo_szam);
}

function leadnumber() {
    return localStorage.getItem('elozo_szam');
}
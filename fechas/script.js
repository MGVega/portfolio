const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const main = document.getElementById('main');
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;

let backgroundImage;

if (currentMonth >= 3 && currentMonth <= 5) {
    backgroundImage = './images/spring.jpg'; // Image for spring
} else if (currentMonth >= 6 && currentMonth <= 8) {
    backgroundImage = './images/summer.jpg'; // Image for summer
} else if (currentMonth >= 9 && currentMonth <= 11) {
    backgroundImage = './images/fall.jpg'; // Image for autumn
} else {
    backgroundImage = './images/winter.jpg'; // Image for winter
}

main.style.backgroundImage = `url(${backgroundImage})`;

function updateCountdown() {
    const birthdayDate = new Date('1996-07-22T00:00:00Z');
    const birthdayDateEnd = new Date('1996-07-22T23:59:59Z');
    const currentDate = new Date();
    const isBirthday = currentDate.getDate() === 22 && currentDate.getMonth() === 6; // Mes es 0-indexado, julio es 6

    // Cambia el fondo si es el día del cumpleaños
    if (currentDate > birthdayDate && currentDate < birthdayDateEnd) {
        main.style.backgroundImage = 'url(./images/party.jpg)';
    } else {
        main.style.backgroundImage = `url(${backgroundImage})`;
    }

    if(currentDate > birthdayDateEnd){
        birthdayDate.setFullYear(currentDate.getFullYear()+1);
        birthdayDateEnd.setFullYear(currentDate.getFullYear()+1);
    }

    // Calcula la diferencia en milisegundos
    const difference = birthdayDate - currentDate;

    // Calcula días, horas, minutos y segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Actualiza el HTML con los valores calculados
    document.getElementById('dias').innerText = days;
    document.getElementById('horas').innerText = hours;
    document.getElementById('minutos').innerText = minutes;
    document.getElementById('segundos').innerText = seconds;
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);

// Llama a la función inicialmente para evitar un retraso de un segundo
updateCountdown();
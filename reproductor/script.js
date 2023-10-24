const canciones = document.querySelectorAll(".cancion");
const cancionesArray = Array.from(canciones);
const playPause = document.getElementById('playPause');
var audioActual = document.getElementById('beFree');
canciones[0].style.backgroundColor = "#90ee90";
var reproduciendo = false;
var aleatorioPulsado = false;
var repetirPulsado = false;

//Al hacer click sobre una canción de la lista
function elegirMusica(cancion) {
  reproduciendo = true;
  playPause.src = "images/pause-button.png";

  //Paramos el resto de canciones
  cancionesArray.forEach(audio => {
    audio.style.backgroundColor = "#ffffff";
    var pista = audio.querySelector('audio');
    pista.pause();
    pista.currentTime = 0;
  });

  //Ubicamos la cancion clickada
  audioActual = cancion.querySelector('audio');
  cancion.style.backgroundColor = "#90ee90";

  //Se reproduce la canción
  if (reproduciendo) {
    audioActual.play();
  }
}

//Al darle al botón de Play
function reproducirMusica() {
  if (reproduciendo) {
    audioActual.pause();
    reproduciendo = false;
    playPause.src = "images/play-button.png";
  } else {
    audioActual.play();
    reproduciendo = true;
    playPause.src = "images/pause-button.png";
  }
}

//Cuando termine una canción
cancionesArray.forEach(audio => {
  var pista = audio.querySelector('audio');
  pista.addEventListener('ended', function () {
    cambiaCancion('adelante');
  });
});

//Botones de adelante y atrás
function cambiaCancion(accion) {
  var indiceCancion = 0; //Array necesario para sacar la canción en la que nos encontramos actualemente

  cancionesArray.forEach(audio => {
    var pista = audio.querySelector('audio');

    if (!repetirPulsado) { //En caso de que NO se haya dado a repetir
      if (!aleatorioPulsado) { //En caso de que NO se haya dado a aleatorio

        if (pista.id == audioActual.id) { //Por cada audio, si los id's coinciden es que hemos encontrado la canción

          if (accion) { //Canción adelante

            if (indiceCancion + 1 < cancionesArray.length) {
              pistaElegida = cancionesArray[indiceCancion + 1];
            } else {
              pistaElegida = cancionesArray[0];
            }

          } else { //Canción hacia atrás

            if (indiceCancion - 1 >= 0) {
              pistaElegida = cancionesArray[indiceCancion - 1];
            } else {
              pistaElegida = cancionesArray[cancionesArray.length - 1];
            }

          }
        }
        
      } else { //Si está puesto el aleatorio:
        var numeroAleatorio = Math.floor(Math.random() * cancionesArray.length);
        //console.log(numeroAleatorio);
        pistaElegida = cancionesArray[numeroAleatorio];
      }

    } else { //Si se está repitiendo la canción:
      if (pista.id == audioActual.id) {
        pistaElegida = cancionesArray[indiceCancion];
      }
    }
    indiceCancion++;
  });

  elegirMusica(pistaElegida);
}

//Canción al azar
function cancionAleatoria() {
  var randomButton = document.getElementById('randomButton');

  if (aleatorioPulsado) {
    // Si el estilo está aplicado, quitarlo
    randomButton.style.boxShadow = '';
  } else {
    // Si el estilo no está aplicado, aplicarlo
    randomButton.style.boxShadow = 'inset 0 0 10px #f8a100';
  }

  aleatorioPulsado = !aleatorioPulsado;
}

//Repetir la cancion actual
function repetirCancion() {
  var loopButton = document.getElementById('loopButton');

  if (repetirPulsado) {
    // Si el estilo está aplicado, quitarlo
    loopButton.style.boxShadow = '';
  } else {
    // Si el estilo no está aplicado, aplicarlo
    loopButton.style.boxShadow = 'inset 0 0 10px #f8a100';
  }

  repetirPulsado = !repetirPulsado;
}



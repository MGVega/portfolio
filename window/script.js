
sustito();


function asustarAlPersonal() {
  //El susto en cuestion
  var ghost = document.createElement('i');
  ghost.classList.add('ghost');
  ghost.innerHTML="👻";

  //Por donde sale el susto
  ghost.style.left = Math.random() * 100 + "vw";

  //Lo que dura el susto
  ghost.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(ghost);

  setTimeout(() => {
    ghost.remove();
  }, 4000);
};

function sustito() {
  setInterval(asustarAlPersonal,600);
};

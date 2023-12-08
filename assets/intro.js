document.addEventListener('DOMContentLoaded', function () {
  // Récupérer les liens
  var link = document.getElementById('tothehome');

  // Récupérer l'élément audio
  var mooSound = document.getElementById('mooSound');
  
  // Fonction pour jouer le bruit de vache
  function playMooSound() {
    // Vérifier si l'audio est pris en charge et prêt à être joué
    if (mooSound && typeof mooSound.play === 'function') {
      // Rejouer le son depuis le début à chaque clic
      mooSound.currentTime = 0;
      mooSound.play();

      // Delay the redirection by 3 seconds
      setTimeout(function () {
        // Perform the redirection after the delay
        window.location.href = "home.html";
      }, 3000);

    }
  }

  link.addEventListener('click', playMooSound);
});
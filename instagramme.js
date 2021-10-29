

$("#slideshow > div:gt(0)").hide();


setInterval(function() {      /*setInterval va appeler les fonctions dansl'ored */
  $('#slideshow > div:first') /* ici on sélectionne le premier élément enfant de la liste*/
  .fadeOut(2000)              /* .fadeOut() rend graduellement transparent l'élément affiché*/
  .next()                     /* .next() va chercher l'élémenet suivant dans la liste*/
  .fadeIn(2000)               /* .fadeIn rend graduellement opaque l'élément affiché */
  .end()                      /* termine l'action en cours et la remet dans son état initial */
  .appendTo('#slideshow');    /* */
}, 4000);                     /* Le timer*/

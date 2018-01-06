/*

Imaginons qu'on veuille détecter un double clique, ou même un triple clique ( comme sur instagram d'ou l'idée ),
 on ajoute simplement la classe CSS "2cliques" ou "3cliques" Et le script js
 détecte quand il y à 2 clique sur un élement il execute un code

 Un truc qui permet de, juste en créant une fonction up, ou down ou left ou right,
 de détecter quand l'utilisateur fais une touche vers le bas ( droite gauche etc),
 ou qu'il swipe à gauche / haut bas droite, ou qu'il scroll, on puisse y mettre notre code
 Genre function left(){ // ici notre code} éxecute le code quand l'utilisateur fait fleche de gauche, ou swipe à gauche

 */
libraryName="marabout.js";


function marabout__init(){ // We check if jquery is loaded before marabout.js library
  if(!(window.jQuery)){
    alert("You must load Jquery before calling "+libraryName);
    console.log("Unable to execute "+libraryName);
    return false;
  }
  else{
    // Here we'll execut every function that need to be executed to work.
    marabout__global_controls();

    console.log(libraryName+" executed successfully.");
    return true;
  }}














// This function handle controls in the webpage ( swipes, direction controls, scrolls)
function marabout__global_controls(){
//Keys

  $('html').keydown(function(e){

     if(e.which == 37){ alert( "LEFT" ); }
     if(e.which == 38){ alert( "UP" ); }
     if(e.which == 39){ alert( "RIGHT" ); }
     if(e.which == 40){ alert( "DOWN" ); }

  });

}













marabout__init();

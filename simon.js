/*

Imaginons qu'on veuille détecter un double clique, ou même un triple clique ( comme sur instagram d'ou l'idée ),
 on ajoute simplement la classe CSS "2cliques" ou "3cliques" Et le script js
 détecte quand il y à 2 clique sur un élement il execute un code

 Un truc qui permet de, juste en créant une fonction up, ou down ou left ou right,
 de détecter quand l'utilisateur fais une touche vers le bas ( droite gauche etc),
 ou qu'il swipe à gauche / haut bas droite, ou qu'il scroll, on puisse y mettre notre code
 Genre function left(){ // ici notre code} éxecute le code quand l'utilisateur fait fleche de gauche, ou swipe à gauche


Le clique molette pourrait permettre d'appeler une fonction non ?


Clique droit: appel la fonction clique_droit(overwrite tout ?,tableau JSON avec le nom des fonctions et le )


 */
libraryName="marabout.js";


console.time('marabout__init');
function marabout__init(environnement="dev"){ // Global constructor of the plugin, it will take arguments later
  if(!(window.jQuery)){ // We check if jquery is loaded before marabout.js library
    alert("You must load Jquery before calling "+libraryName);
    console.log("Unable to execute "+libraryName);
    return false;
  }
  else{
    console.log(libraryName+" executed successfully.");
    if(environnement=="public"){ // Put here the instruction when environnement == public
          console.log = function () {}; // Disable console printing if environnement is public
          }
    else{  // Put here the instruction when environnement != public

          }
    //////////// Caller of the global constructor we'll execut every function that need to be executed to work.


    marabout__global_controls();
    



    //////////// End of the caller of the global constructor
    if(environnement=="dev"){console.timeEnd('marabout__init');}
    return true;
  }}













// This function handle controls in the webpage ( swipes, direction controls, scrolls)
function marabout__global_controls(){
//Keys

    $('html').keydown(function(e){

       if(e.which == 37){ left('key');  }
       if(e.which == 38){ delaiSCROLL=setTimeout(function(){ up('scroll'); }, 50);    }
       if(e.which == 39){ right('key'); }
       if(e.which == 40){ delaiSCROLL=setTimeout(function(){ down('scroll'); }, 50);;  }

    });

  //Scroll
  var lastScrollPosition = 0;
  delaiSCROLL=setTimeout(function(){},100);//Needed dont delete
  window.onscroll = function() {
      var newScrollPosition = window.scrollY;
      clearTimeout(delaiSCROLL);
      if (newScrollPosition < lastScrollPosition){
          delaiSCROLL=setTimeout(function(){ up('scroll'); }, 50);

      }else{
          delaiSCROLL=setTimeout(function(){ down('scroll'); }, 50);
      }
      lastScrollPosition = newScrollPosition;
  }

}

  function left(method='NULL'){console.log(libraryName+"// User called LEFT using the "+method+" method.");}
  function up(method='NULL'){console.log(libraryName+"// User called UP using the "+method+" method.");}
  function right(method='NULL'){console.log(libraryName+"// User called RIGHT using the "+method+" method.");}
  function down(method='NULL'){console.log(libraryName+"// User called DOWN using the "+method+" method.");}












marabout__init('dev');

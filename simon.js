/*

Imaginons qu'on veuille détecter un double clique, ou même un triple clique ( comme sur instagram d'ou l'idée ),
 on ajoute simplement la classe CSS "2cliques" ou "3cliques" Et le script js
 détecte quand il y à 2 clique sur un élement il execute un code

 Un truc qui permet de, juste en créant une fonction up, ou down ou left ou right,
 de détecter quand l'utilisateur fais une touche vers le bas ( droite gauche etc),
 ou qu'il swipe à gauche / haut bas droite, ou qu'il scroll, on puisse y mettre notre code
 Genre function left(){ // ici notre code} éxecute le code quand l'utilisateur fait fleche de gauche, ou swipe à gauche


Le clique molette pourrait permettre d'appeler une fonction non ?


Clique droit: appel la fonction clique_droit(overwrite tout ?,tableau JSON avec le nom des fonctions et le texte qui sera affiché)


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













  //progressbar(hexadecimal color, id / class of element to start, id / class of element to stop, position of the progressbar,element where the navbar will be sticked)
  function marabout__progressbar(color=false,start=false,end=false,pos='bottom',element=false){
          $( document ).ready(function() {// We execute the program when the full body is loaded.
              marabout__progressbar_init(color,start,end,pos,element);
          });
  }//end of function progressbar

  function marabout__progressbar_init(color,start,end,pos,element){
    if(!color){color='#6633ff';}
    if(start){from=$(start).position().top;}else{from=0;}// If the progressbar need to start somewhere in the page
    if(start){to=$(end).position().top+$(end).height();}else{to=$('body').height();} //If the progressbar need to stop somewhere in the page
    if(element){is_fixed='absolute';element_pos='initial';}else{is_fixed='fixed';element='body';element_pos='0px';}// Check if the element ot add the progressbar is the body or not


    progressbar_content="<div id='progressbar'></div>";

    switch(pos) {
      case "top":
            progressbar_style="<style type='text/css'>#progressbar{height:4px;background-color:"+color+";position:"+is_fixed+";width:0%;top:"+element_pos+";}</style> ";
            parameter="width";
          break;
      case "bottom":
            progressbar_style="<style type='text/css'>#progressbar{height:4px;background-color:"+color+";position:"+is_fixed+";width:0%;bottom:"+element_pos+";}</style> ";
            parameter="width";
          break;
      case "left":
            progressbar_style="<style type='text/css'>#progressbar{width:4px;background-color:"+color+";position:"+is_fixed+";height:0%;left:"+element_pos+";top:0px;}</style> ";
            parameter="height";
          break;
      case "right":
            progressbar_style="<style type='text/css'>#progressbar{width:4px;background-color:"+color+";position:"+is_fixed+";height:0%;right:"+element_pos+";top:0px;}</style> ";
            parameter="height";
          break;
      default:
            progressbar_style="<style type='text/css'>#progressbar{height:4px;background-color:"+color+";position:"+is_fixed+";width:0%;bottom:"+element_pos+";}</style> ";
            parameter="width";
  }

    $(element).append(progressbar_content+progressbar_style);

    total=to-from; //the total height of the height the scroll will go througt
    $(window).scroll(function (event) { // we listen to the page scroll

          var scroll = $(window).scrollTop()+$(window).height();
          current=((scroll-from)*100)/total;
          if(parameter=="width"){
                  if(scroll<from){$( "#progressbar" ).animate({ "width": "0%" }, 1 );}
                  if(scroll>to){$( "#progressbar" ).animate({ "width": "100%" }, .2 );}
                  if(scroll>=from && scroll<=to){
                    $( "#progressbar" ).animate({ "width": current+"%" }, .2 );
                  }
          }
          else{
                  if(scroll<from){$( "#progressbar" ).animate({ "height": "0%" }, .5 );}
                  if(scroll>to){$( "#progressbar" ).animate({ "height": "100%" }, .2 );}
                  if(scroll>=from && scroll<=to){


                    $( "#progressbar" ).animate({ "height": current+"%" }, .2 );
            }
          }


      });

  }//end of function progressbar_init

  libraryName="PanelStacker.js";
  var stackerFlow=new Array();

  function PS__init(cover=true){ // We check if jquery is loaded before PanelStacker.js library
    if(!(window.jQuery)){
      console.log("You must load Jquery before calling "+libraryName);
      console.log("Unable to execute "+libraryName);
      return false;
    }
    else{
      // Here we'll execut every function that need to be executed to work.
      if(cover){// If the user want the background to be blury
        $( "body" ).append( "<div class='PS__cover'></div>" );
        PS__overlay(false,0);
        }

      PS__listener();





      console.log(libraryName+" executed successfully.");
      return true;
    }
  }






  // Main mechanism of panelStacker.js
  class Panel {

    constructor(element) {
      this.element = element;
      this.status=false;
    }

    // Used to know if the panel is active or not.
    get getStatus() {
      return this.status;
    }



    // Used to close a specified panel
    close(){
      this.status=false;

      delete stackerFlow[this.element];
      PS__refresh();
      $(this.element).css("z-index", "1001").animate({"right": "-100%"});
      $(this.element).fadeOut();


      PS__overlay(false);

    }

    // Used to open a specified panel
    open(){

      this.status=true;
      $(this.element).fadeIn();
      if(!(this.element in stackerFlow)){
        //$(this.element).css("right", PS__totalFlow());
        $(this.element).animate({"right": PS__totalFlow()});
        PS__overlay(true);
        PS__refresh();
      }



      stackerFlow[this.element]=$(this.element).outerWidth();
    }

    // Used to define when a panel is the father of another one, when the father close, the sons closes.
    need(parent){

      var son=this;
      setTimeout(function(){
              $(parent.element+" .closePanel").click(function() {// When user click on .closePanel of the parent
                  son.close();
                });
              },300);

    }

  }/////////       end of Panel class


  function PS__overlay(mode,speed=500){

        if(mode){
        setTimeout(function(){
                  $(".PS__cover").fadeIn(speed);
                  },500);
        }
        else if(Object.keys(stackerFlow).length<1){
          $(".PS__cover").fadeOut(speed);
        }

  }

  function PS__totalFlow(){
    var total=0;
    for (var index in stackerFlow) {
          total += stackerFlow[index];

      }
    return total;
  }

  function PS__refresh(){
    var origin=0;
    var z_index=1050;
    for (var index in stackerFlow) {

          $(index).css("z-index", z_index).animate({"right": origin},100);
          origin+=stackerFlow[index];
          z_index--;

      }
  }

  function PS__listener(){
    $(".panel .closePanel").click(function() {// When user click on .closePanel Base panel
        id=$(this).closest('.panel').attr('id');
        try{
              eval(id).close();
            }
        catch (err){
          console.log("panelStacker.js-> When using .closePanel button, you must name your panel Object with the DOM id you gave him.")
        }

      });// Enf of closePanel button click

  }






     // Initialisation of the controller
  setTimeout(function(){},100);

      $(document).ready(function(){

        $("#panel1 .closePanel").click(function() {// When user click on .closePanel Base panel
            test.close();

          });



        PS__init();
      });


















marabout__init('dev');

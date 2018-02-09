var detection;
var gauche;
var droite;
var milieu;
var temps;


window.addEventListener("load", initialisation, false);

function initialisation() {
	
	
	//Olivia : animation header
	
	detection = document.getElementById("detection");
	gauche = document.getElementById("gauche");
	droite = document.getElementById("droite");
	milieu = document.getElementById("milieu");
			
	detection.addEventListener("mouseover",ouvrir,false);
	

}


	
	//Animation header
	{

	function ouvrir() {
		
			function animation1() {

				gauche.className = "rouge2";
				droite.className = "bleu2";
				
				if (milieu.className != "visible") {
					milieu.className = "invisibleL";
					
				}
				
			}
			
			animation1();
			
			function animation2() {
				
				milieu.className = "visible";
			
			}
			
			temps = setTimeout(animation2, 600);
			
			detection.removeEventListener("mouseover",ouvrir,false);
			milieu.addEventListener("click",fermer,false);
			
			function fermer() {
				
				function animation3() {
				
					milieu.className = "invisibleL";
			
				}
				
				animation3();
				
				temps = setTimeout(animation4, 600);
				
				function animation4() {

					if (milieu.className != "invisible") {
						milieu.className = "invisible";
						
					}
					
					gauche.className = "rouge";
					droite.className = "bleu";
				}
				
				milieu.removeEventListener("click",fermer,false);
				detection.addEventListener("mouseover",ouvrir,false);
			
			}
		
		}
	
	//fin animation header
	}
	
	
	

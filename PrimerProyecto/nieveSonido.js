/*
Desarrollo: Jessica Cifuentes Jaramillo 
Ilustración: Jessica Cifuentes Jaramillo
Ejemplo original: https://p5js.org/examples/sound-mic-input.html
*/
var entradaMic;
var numero;
var myCanvas;
var nieve = [];
var nivel;
//Variable para la velocidad de las partículas
var v; 
//Variable para el tamaño de la barra de progreso
var p; 
//Ilustración
var fondo;
var barra;
//Fuente: Nunito Sans
var nunito;

//Función para cargar los assets
function preload(){
	fondo = loadImage('assets/fondoNieve.png');
	nunito = loadFont('assets/fuentes/NunitoSans-SemiBold.ttf');
}
function setup() {
  // Crea un canvas cuyo padre es el div #contendor definido en el documento de html
  myCanvas = createCanvas(975, 515);
  myCanvas.parent("contenedor");
  // crea una entrada de audio
  entradaMic = new p5.AudioIn();	
  // inicia la entrada de audio
 entradaMic.start();
 //Crear 100 copos de nieve
  for( var i = 0; i < 100; i++){
  	nieve[i] = new CopoNieve();
  }
  //Crear una barra de progreso
  barra = new Progreso();
}

function draw() {
  //Imagen de fondo
  background(fondo);
  // Se obtiene el nivel del micrófono (valor entre 0 y 1)
  nivel = entradaMic.getLevel();
  //Mapear el nivel del microfono para obtener un número entre 0 y 100
  var porcentaje = map(nivel, 0, 1, 0, 100);
  textFont(nunito);
  noStroke();
  textSize(28);
  fill('#012e29');
  //Convierte a "porcentaje" en un número entero
  text(parseInt(porcentaje) + "%", 10, 500);

  //Muestra todas las partículas y hace que se desplacen hacia abajo
  for(var i = 0; i < 100; i++){
  	nieve[i].mostrar();
  	nieve[i].actualizar();
  }
  //Muestra la barra de progreso
  barra.mostrar();
}

//Crear nieve
function CopoNieve() {
	/*Posiciona en un lugar al azar a las partículas entre el pixel 30 y el ancho del canvas (x) y entre 0 y -height (y)
	para dar el efecto de que caen del cielo
	*/
	this.x = random(70, width);
	this.y = random(0, -height);

	//Función para mostrar las partículas
	this.mostrar = function() {
		fill(255);
		noStroke();
		ellipse(this.x, this.y, 6, 6);
	}

	this.actualizar = function(){
		/*v es la velocidad de las partículas. Se mapea el nivel del micrófono para que cambie la
		velocidad cuando haya más ruido*/
		v = map(nivel, 0, 1, 2, 10);
		this.y = this.y + v; 
		//Imprimir el valor de v en consola
		console.log(v);
		//Si las partículas llegan al final del canvas, cambia su altura a otra posición al azar al inicio del lienzo
		if(this.y > height){
			this.y = random(0, -height);
		}	
	}

}
//Barra de progreso
function Progreso() {
	this.x = 10;
	this.y = 460;

	/*p es el largo de la barra de progreso de las partículas. Se mapea el nivel del micrófono para que aumente
	su largo cuando haya más ruido*/
	this.mostrar = function() {
		p = map(nivel, 0, 1, -2, -400);
		fill("#012e29");
		rect(this.x, this.y, 30, p);
	}
}


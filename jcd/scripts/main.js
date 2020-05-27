
let cnv;
//variable que agrupa los botones creados
let buttons;

//se crean  botones

var btnT;
var btnL;
var visualizarSketch = 1;
var table;
var table2;
var nunito;
var sonido;
var pagina1;
var pagina2;

function preload() 
{
	nunito = loadFont('fuentes/Raleway/Raleway-SemiBold.ttf');
	table = loadTable("data/vehiculosBogota.csv", "header");
	table2 = loadTable("data/vehiculosSegmentados.csv", "header");
	soundFormats('ogg', 'mp3');
  	sonido = loadSound('assets/trafico.mp3');
}

function setup(){
	cnv = createCanvas(776, 498, WEBGL);
	cnv.parent("contenedor");
	btnT = createA('jessicacifuentes.html', 'Total', "_self");
	btnT.parent("contenedor");
	btnT.position(75,550);
	btnL = createA('jessicacifuentes2.html', 'Localidades', "_self");
	btnL.parent("contenedor");
	btnL.position(170,550);

  	btnT.mousePressed(irATotal);
	
	  textFont(nunito);

	  pagina1 = new total;
	  pagina2 = new localidades;

	  pagina1.cargar();
   	
}

function draw() {
	background("#fff8f1");

  if (visualizarSketch == 1) 
  {
    
   	pagina1.mostrar();

  } 
  if (visualizarSketch == 2) 
  {
   // pagina2.cargar();
  }

}

function irATotal() 
{
	visualizarSketch == 1;
	
}




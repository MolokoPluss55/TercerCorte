
var cubos = [];
var cubos2010 = [];
var cubos2011 = [];
var cubos2012 = [];
var cubos2013 = [];
var cubos2014 = [];
var cubos2015 = [];
var cubos2016 = [];
var cubos2017 = [];
var textoTiempo = [];
var textoCantidad = [];
var slider;
var tabla;
var rowCount;
var maxDato = 0;
var totalVehiculos = [];
var periodos = [];
var cantidad = [];
var myCanvas;
var nunito;
var nunito2;
var y2 = -520;

function preload(){
   table = loadTable("data/vehiculosBogota.csv", "header");
   nunito = loadFont('Fuentes/NunitoSans-SemiBold.ttf');
   nunito2 = loadFont('Fuentes/NunitoSans-Bold.ttf');
}

function setup() {
  myCanvas = createCanvas(900, 1400, WEBGL);
  myCanvas.parent("contenedor");
  textFont(nunito2);
  rowCount = table.getRowCount();
  const row = table.getRows();  

  for(var i = 0; i < rowCount; i++){

    const periodos = row[i].getString("tiempo");
    const vehiculos = row[i].getNum("total");

    var y = map(i, 0, rowCount-1, -600, 500);
     textFont(nunito2);
    textoTiempo.push(new textoEje (-400,y,periodos,20));



    totalVehiculos = vehiculos;
    if (totalVehiculos > maxDato)
    {
      maxDato = totalVehiculos;
    }
     
  }
  for(var i = 0; i < rowCount; i++){
    const row = table.getRows();  
    const vehiculos = row[i].getNum("total");
    textoCantidad[i] = new textoEje (-250, y2, vehiculos,15);
    cantidad[i] = map(vehiculos, 1392930, maxDato, 10, 50);
    totalVehiculos = vehiculos;
    y2+=150;

  }

  for(var i = 0; i < cantidad[0]; i++){
     cubos2010[i] = new cubo(random(-600, -550),153, 249, 255); 
  }
 for(var i = 0; i < cantidad[1]; i++){

     cubos2011[i] = new cubo(random(-450, -400), 21, 244, 238) ;
  }
 for(var i = 0; i < cantidad[2]; i++){
     cubos2012[i] = new cubo(random(-300, -250),21, 242, 198); 
  }
 for(var i = 0; i < cantidad[3]; i++){
     cubos2013[i] = new cubo(random(-150, -100), 99, 242, 135 ); 
  }
  for(var i = 0; i < cantidad[4]; i++){
     cubos2014[i] = new cubo(random(0, 50), 255, 232, 142);
  }
  for(var i = 0; i < cantidad[5]; i++){
     cubos2015[i] = new cubo(random(150, 200),252, 176, 138); 
  }
  for(var i = 0; i < cantidad[6]; i++){
     cubos2016[i] = new cubo(random(300, 350), 249, 143, 137);
  }
  for(var i = 0; i < cantidad[7]; i++){
     cubos2017[i] = new cubo(random(450, 500), 255, 104, 104);
  }
  
}


function draw() {

  background(255);
  for(var i = 0; i < cantidad[0]; i++){
      push();
      cubos2010[i].mostrar();
      pop();
      cubos2010[i].actualizar();
  }

  for(var i = 0; i < cantidad[1]; i++){
      push();
      cubos2011[i].mostrar();
      pop();
      cubos2011[i].actualizar();
  }

  for(var i = 0; i < cantidad[2]; i++){
      push();
      cubos2012[i].mostrar();
      pop();
      cubos2012[i].actualizar();
  }

  for(var i = 0; i < cantidad[3]; i++){
      push();
      cubos2013[i].mostrar();
      pop();
      cubos2013[i].actualizar();
  }
  for(var i = 0; i < cantidad[4]; i++){
      push();
      cubos2014[i].mostrar();
      pop();
      cubos2014[i].actualizar();
  }

  for(var i = 0; i < cantidad[5]; i++){
      push();
      cubos2015[i].mostrar();
      pop();
      cubos2015[i].actualizar();
  }


  for(var i = 0; i < cantidad[6]; i++){
      push();
      cubos2016[i].mostrar();
      pop();
      cubos2016[i].actualizar();
  }


  for(var i = 0; i < cantidad[7]; i++){
      push();
      cubos2017[i].mostrar();
      pop();
      cubos2017[i].actualizar();
  }
  
  for(var i = 0; i < rowCount; i++)
  {
    textoTiempo[i].dibujar();

  }

  for(var i = 0; i < textoCantidad.length; i++)
  {
    textoCantidad[i].dibujar();

  }

}
class cubo {
  constructor(ub,r,g,b){
    this.x = 15;
    this.y = 15;
    this.z = 15;
    this.ubicacionX = random(-300, 400);  
    this.ubicacionY = ub; 
    this.r = r;
    this.g = g;
    this.b = b;
  }

  mostrar(){
     ambientLight(255);
     specularMaterial(250); 
   fill(this.r,this.g,this.b);

    noStroke();
    translate(this.ubicacionX, this.ubicacionY, 0);
    rotateZ(frameCount * 0.03); 
    rotateX(frameCount * 0.03);
  
    torus(8, 4);
    }
  actualizar(){
    var v = 3;
    this.ubicacionX = this.ubicacionX + v; 

    if(this.ubicacionX > 400){
      this.ubicacionX = random(-100, -100);
    } 

  }
 
 }

class textoEje
{
  //se determinan los variables del objeto
  constructor(posX, posY, texto, size)
  {
    this.posX = posX;
    this.posY = posY;
    this.texto = texto;
    this.s = size;
  }

  dibujar()
  {
    fill(0);
    textSize(this.s);  
    textAlign(CENTER);  
    text(this.texto, this.posX, this.posY);
  }
}



 function asignarCantidad(anio, cantidad, ubicacion){

   for(var i = 0; i < cantidad; i++)
   {
      anio[i] = new cubo(ubicacion);
   }

 }


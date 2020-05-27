let table;

let particulasBolita = [];

let slider;

let valorOpcionSlider;

let rowCount;

let cnv;

let textoH2A;

let sel;

let valorOpcion;

let nombres = [];

let cantidad;

let row;

let cantidadGente = [];

let mapeoGente = [];

let anio2010 = [];

let anio2011 = [];

let anio2012 = [];

let anio2013 = [];

let anio2014 = [];

let anio2015 = [];

let anio2016 = [];

let anio2017 = [];

let anio2018 = [];

let mapeo2010 = [];

let mapeo2011 = [];

let mapeo2012 = [];

let mapeo2013 = [];

let mapeo2014 = [];

let mapeo2015 = [];

let mapeo2016 = [];

let mapeo2017 = [];

let mapeo2018 = [];

let cantidadSlider;

let cantidadReal;

let nombreAnio;

function preload()
{
  table = loadTable("data/PoblacionFinalPart.csv", "header");
}

function setup() 
{
  
  var cnv = createCanvas(850, 600);
  cnv.parent("poblacionCont");

  noStroke();

  rowCount = table.getRowCount();

  row = table.getRows();

  for (let i = 0; i < rowCount; i++)
  {
    nombres[i] = row[i].getString("name");
    cantidadGente[i] = row[i].getNum("poblacion");
    //Remplazar valores nomericos por minimo y maximo
    mapeoGente[i] = map(cantidadGente[i], 6693, 1039013, 5, 100);
    anio2010[i] = row[i].getNum("2010P");
    anio2011[i] = row[i].getNum("2011P");
    anio2012[i] = row[i].getNum("2012P");
    anio2013[i] = row[i].getNum("2013P");
    anio2014[i] = row[i].getNum("2014P");
    anio2015[i] = row[i].getNum("2015P");
    anio2016[i] = row[i].getNum("2016P");
    anio2017[i] = row[i].getNum("2017P");
    anio2018[i] = row[i].getNum("2018P");
    mapeo2010[i] = map(anio2010[i], 6814, 1068188, 5, 100);
    mapeo2011[i] = map(anio2011[i], 6910, 1097642, 5, 100);
    mapeo2012[i] = map(anio2012[i], 6990, 1127402, 5, 100);
    mapeo2013[i] = map(anio2013[i], 7063, 1157514, 5, 100);
    mapeo2014[i] = map(anio2014[i], 7139, 1188071, 5, 100);
    mapeo2015[i] = map(anio2015[i], 7224, 1219135, 5, 100);
    mapeo2016[i] = map(anio2016[i], 7330, 1250734, 5, 100);
    mapeo2017[i] = map(anio2017[i], 7457, 1282978, 5, 100);
    mapeo2018[i] = map(anio2018[i], 7584, 1315509, 5, 100);
    //console.log(nombres[i]);
  }
  slider = createSlider (0, 8, 0, 1);
  slider.parent("poblacionCont");
  slider.position (300, 400);
  slider.style ('width', '120px');
  sel = createSelect();
  sel.position (300, 500);
  for (let i = 0; i < nombres.length; i++)
  {
    sel.option(nombres[i]);
  }

  sel.changed(mySelectEvent);
  /*for(let i = 0; i < 100; i++)
  {
    particulasBolita[i] = new particulasf(); 
  }*/
} 
function draw()
{
  background(0);
  let anioSlider = slider.value();
  for (let i = 0; i < nombres.length; i++)
  {
    switch(valorOpcion)
    {
      case nombres[i]: 
      if(anioSlider == 0)
      {
        cantidad = mapeo2010[i];
        cantidadReal = anio2010[i];
        nombreAnio = "2010";
        //console.log(cantidad);
      }
      else if(anioSlider == 1){
        cantidad = mapeo2011[i];
        cantidadReal = anio2011[i];
        nombreAnio = "2011";
        //console.log(cantidad);
      }
      else if(anioSlider == 2){
        cantidad = mapeo2012[i];
        cantidadReal = anio2012[i];
        nombreAnio = "2012";
        //console.log(cantidad);
      }
      else if(anioSlider == 3){
        cantidad = mapeo2013[i];
        cantidadReal = anio2013[i];
        nombreAnio = "2013";
        //console.log(cantidad);
      }
      else if(anioSlider == 4){
        cantidad = mapeo2014[i];
        cantidadReal = anio2014[i];
        nombreAnio = "2014";
        //console.log(cantidad);
      }
      else if(anioSlider == 5){
        cantidad = mapeo2015[i];
        cantidadReal = anio2015[i];
        nombreAnio = "2015";
        //console.log(cantidad);
      }
      else if(anioSlider == 6){
        cantidad = mapeo2016[i];
        cantidadReal = anio2016[i];
        nombreAnio = "2016";
        //console.log(cantidad);
      }
      else if(anioSlider == 7){
       cantidad = mapeo2017[i];
        cantidadReal = anio2017[i];
        nombreAnio = "2017";
        //console.log(cantidad);
      }
      else if(anioSlider == 8){
        cantidad = mapeo2018[i];
        cantidadReal = anio2018[i];
        nombreAnio = "2018";
        //console.log(cantidad);
      }
    }
  }
  text(cantidadReal, width/2, height/2);
  text(nombreAnio, width/2 - 200, height/2);
  for(let i = 0; i < cantidad; i++)
  {
    particulasBolita[i].update();
    particulasBolita[i].show();
  }
    //crea 6 particulas y las adiciona en el arreglo
    for (let i = 0; i < 100; i++) 
    {
      //crea una particula 
      let p = new particulasf();
      //adiciona la particula en el arreglo
      particulasBolita.push(p);
    }
    
    for (let i = 0; i < cantidad; i++) 
    {

      particulasBolita[i].update();
      particulasBolita[i].show();
      
      //Es true cuando el alpha es igual a 0
      if (particulasBolita[i].finished()==true) 
      {
        // remove this particle
        particulasBolita.splice(i, 1);
      }
    }
}

function mySelectEvent()
{
  valorOpcion = sel.value();
  for(let i = 0; i <= nombres.length - 1; i++)
  {
    switch(valorOpcion)
    {
      case nombres[i]:
      cantidad = mapeoGente[i];
      console.log(cantidad);
      console.log(nombres.length);
    }
  }
}
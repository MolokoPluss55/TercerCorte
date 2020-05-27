
class particulasf 
{  
  constructor(x) 
  { 
    //se determina una ubicación en x , en y de donde salen las palabras
    //this.xP = random(50,width-50);
    //this.yP = random(20,height-20);  
    //se determina una ubicación en x , en y de donde salen las esferas
    this.x = x; 
    this.y =  random(100, 400); 
    //se determina una velocidad en x,y para su movimiento

    //determina el tamaño del texto
   // this.sizeTexto = random(12,70);
  }

  //retorna true cuando el alpha es igual a 0

  mostrar() 
  {
   
    //dibuja las elipses
    image(imagenPersona, this.x , this.y, 30, 60);
  }

  actualizar(){
    var v = 2;
    this.y = this.y + v; 

    if(this.y >= 400){
      this.y = random(100, 400);
    } 

  }
 

}

class particulasf 
{  
  constructor() 
  { 
    //se determina una ubicación en x , en y de donde salen las palabras
    //this.xP = random(50,width-50);
    //this.yP = random(20,height-20);  
    //se determina una ubicación en x , en y de donde salen las esferas
    this.x = width/2;
    this.y = height-40;
    //se determina una velocidad en x,y para su movimiento
    this.vx = random(-8, 5);
    this.vy = random(5, 1);
    //se determina el alpha
    this.alpha = 255;
    //determina el tamaño del texto
   // this.sizeTexto = random(12,70);
  }

  //retorna true cuando el alpha es igual a 0
  finished() 
  {
    return this.alpha < 0;
  }

  update() 
  {
    //le da movimiento en x a la palabra sumandole el valor de velocidad vx
    //this.xP += this.vx;
    //le da movimiento en y  a la palabra sumandole el valor de velocidad vy
    //this.yP += this.vy;
    //le da movimiento en x sumandole el valor de velocidad vx
    this.x += this.vx;
    //le da movimiento en y sumandole el valor de velocidad vy
    this.y -= this.vy;
    //va restando el alpha de 255, restandole 5, cada loop
    this.alpha -= 5;
  }

  show() 
  {
    
    stroke(255);    
    //el relleno es blanco y con alpha
    fill(255, this.alpha);
    
    //dibuja las elipses
    rect(this.x, this.y, 16);


    //fill(189, 26, 189, this.alpha);
    //noStroke();

    //cambia el tamaño del texto
    //textSize(this.sizeTexto);
    //dibuja el texto
    //text("si",this.xP, this.yP);
  }

}

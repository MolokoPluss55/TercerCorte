class vehiculo 
{
  constructor(ubicacionX,r,g,b){
    this.x = 20;
    this.y = 20;
    this.z = 20;
    this.ubicacionX = ubicacionX;  
    this.ubicacionY = random(-130, 170); 
    this.r = r;
    this.g = g;
    this.b = b;
  }

  mostrar(){
    noStroke();
    fill(this.r,this.g,this.b);

    translate(this.ubicacionX, this.ubicacionY , 0);
    rotateY(frameCount * 0.03);
    //rotateZ(frameCount * 0.03); 
    //rotateX(frameCount * 0.03);
    torus(5,2);
  }

  actualizar(){
    var v = 2;
    this.ubicacionY = this.ubicacionY + v; 

    if(this.ubicacionY >= 170){
      this.ubicacionY = random(-130, -100);
    } 

  }
 
 }

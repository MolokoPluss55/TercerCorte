class vehiculos 
{
  constructor(valorRotacion,ubicacionX,r,g,b){
    this.x = 20;
    this.y = 20;
    this.z = 20;
    this.ubicacionX = ubicacionX;  
    this.ubicacionY = random(400, 50); 
    this.r = r;
    this.g = g;
    this.b = b;
    this.p = valorRotacion;
  }

  mostrar(){
    noStroke();
    fill(this.r,this.g,this.b);

    translate(this.ubicacionX, this.ubicacionY , 0);
    rotateY(frameCount * 0.03);
    rotateZ(frameCount * 0.03); 
    rotateX(frameCount * 0.03);
    torus(5,1);
  }

  actualizar(){
    var v = 2;
    this.ubicacionY = this.ubicacionY + v; 

    if(this.ubicacionY >= 50){
      this.ubicacionY = random(450, 400);
    } 

  }
 
 }

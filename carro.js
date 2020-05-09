class carro 
{
  constructor(valorRotacion,ubicacionY,r,g,b){
    this.x = 20;
    this.y = 20;
    this.z = 20;
    this.ubicacionX = random(-50, 450);  
    this.ubicacionY = ubicacionY; 
    this.r = r;
    this.g = g;
    this.b = b;
    this.p = valorRotacion;
  }

  mostrar(){
    noStroke();
    fill(this.r,this.g,this.b);
 /*pointLight(1, 220, 200, -50, -50, -50);
    pointLight(1, 220, 200, 50, 50, 50);
    pointLight(1, 220, 200, -100, 50, 50);
    pointLight(1, 220, 200, 200, 100, 50);
    specularMaterial(this.r, this.g, this.b);*/
    translate(this.ubicacionX, this.ubicacionY , 0);
    rotateY(frameCount * 0.03);
     rotateZ(frameCount * 0.03); 
    rotateX(frameCount * 0.03);
    torus(10,5);
  }

  actualizar(){
    var v = 2;
    this.ubicacionX = this.ubicacionX + v; 

    if(this.ubicacionX >= 450){
      this.ubicacionX = random(-50, 0);
    } 

  }
 
 }

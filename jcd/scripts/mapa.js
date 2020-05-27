class mapa
{
  constructor(ubicacionX, fuente){
  
    this.ubicacionX = ubicacionX;  
    this.ubicacionY = 0; 
    this.src = fuente;
  }

  mostrar(){
    image(this.src, this.ubicacionX , this.ubicacionY, 300, 600);
  
  }
 
 }

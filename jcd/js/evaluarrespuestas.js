var respuesta1;
var respuesta12;
var respuesta3;
var pathname = window.location.pathname;
console.log(pathname);
var contadora = 0;
console.log(contadora);
var comp;

if(document.getElementById("btnClick") != null){
    document.getElementById("btnClick").addEventListener("click", function(){


        //RESPUESTA 1
      
        if(document.getElementById("verdadero").checked)
        {
             respuesta1 = "verdadero";
            localStorage.setItem('primeraRespuesta', respuesta1); 
        }
        else if(document.getElementById("falso").checked)
        {
            respuesta1 = "falso";
            localStorage.setItem('primeraRespuesta', respuesta1);
        }    
});

}

else if(document.getElementById("btnClick1") != null)
{
    document.getElementById("btnClick1").addEventListener("click", function(){

        if(document.getElementById("verdadero").checked)
        {
             respuesta2 = "verdadero";
            localStorage.setItem('segundaRespuesta', respuesta2); 
        }
        else if(document.getElementById("falso").checked)
        {
            respuesta2 = "falso";
            localStorage.setItem('segundaRespuesta', respuesta2);
        }    
}); 
}
else if(document.getElementById("btnClick2") != null)
{
    document.getElementById("btnClick2").addEventListener("click", function(){
        
        if(document.getElementById("verdadero").checked)
        {
             respuesta3 = "verdadero";
            localStorage.setItem('terceraRespuesta', respuesta3); 
        }
        else if(document.getElementById("falso").checked)
        {
            respuesta3 = "falso";
            localStorage.setItem('terceraRespuesta', respuesta3);
        }    

        if(respuesta1 == "falso" && respuesta2 == "verdadero" && respuesta3 == "falso")
         {
             console.log("Todas tus respuestas son correctas");
        }

        else if(respuesta1 == "verdadero" && respuesta2 == "falso" && respuesta3 == "verdadero")
        {
            console.log("Todas tus respuestas son incorrectas");
        }
}); 
}


var nuevaR1 = localStorage.getItem("primeraRespuesta");
var nuevaR2 = localStorage.getItem("segundaRespuesta");
var nuevaR3 = localStorage.getItem("terceraRespuesta");

var imagenResultados = document.getElementById("imgResultado");

if(imagenResultados != null){
      //CORRECTAS
      if(nuevaR1 == "falso" && nuevaR2 == "verdadero" && nuevaR3 == "falso")
      {
          console.log("Todas tus respuestas son correctas");
          imagenResultados.src = 'images/r1.svg';
      }
      //INCORRECTAS
      else if(nuevaR1 == "verdadero" && nuevaR2 == "falso" && nuevaR3 == "verdadero")
      {
          console.log("Todas tus respuestas son incorrectas");
          imagenResultados.src = 'images/r2.svg';
      }
      //c c i 
      else if(nuevaR1 == "falso" && nuevaR2 == "verdadero" && nuevaR3 == "verdadero"){
            imagenResultados.src = 'images/r3.svg';
      }
      //c i i 
      else if(nuevaR1 == "falso" && nuevaR2 == "falso" && nuevaR3 == "verdadero"){
            imagenResultados.src = 'images/r4.svg';
      }
      //i c i 
      else if(nuevaR1 == "verdadero" && nuevaR2 == "verdadero" && nuevaR3 == "verdadero"){
            imagenResultados.src = 'images/r5.svg';
      } 
      //c i c 
      else if(nuevaR1 == "falso" && nuevaR2 == "falso" && nuevaR3 == "falso"){
            imagenResultados.src = 'images/r6.svg';
      }
      //i i c 
      else if(nuevaR1 == "verdadero" && nuevaR2 == "falso" && nuevaR3 == "falso"){
            imagenResultados.src = 'images/r7.svg';
      }
      //i c c 
      else if(nuevaR1 == "verdadero" && nuevaR2 == "verdadero" && nuevaR3 == "falso"){
            imagenResultados.src = 'images/r8.svg'
      }
      
}
  






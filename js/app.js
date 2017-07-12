//INFORMACION ESTUDIANTES
var estudiantes = [
  {"codigo":"","nombre":"","nota":0},
  {"codigo":"","nombre":"","nota":0},
  {"codigo":"","nombre":"","nota":0},
  {"codigo":"","nombre":"","nota":0},
  {"codigo":"","nombre":"","nota":0},
  {"codigo":"","nombre":"","nota":0},
  {"codigo":"","nombre":"","nota":0},
  {"codigo":"","nombre":"","nota":0},
  {"codigo":"","nombre":"","nota":0},
  {"codigo":"","nombre":"","nota":0}
];
// FUNCIONES DE BOTONES
var index = 0;
function boton1() {
  if (index < 10) {
    estudiantes[index].codigo = document.getElementById("codigo").value 
    estudiantes[index].nombre = document.getElementById("nombre").value 
    estudiantes[index].nota = document.getElementById("nota").value
    imprimirDatosEst(index);
    index++
  }else{
    alert("El número máximo de estudiantes es 10.")
  }
};

function boton2(){
  var promedio = 0;
  for (var i = 0; i < estudiantes.length; i++) {
    promedio = promedio + Number(estudiantes[i].nota);
  };
  alert( "El promedio del salon es de "+ (promedio/ index) );
};

function boton3(){
  var nota = 0,
      est = "";
  for (var i = 0; i < index; i++) {
    if ( Number(estudiantes[i].nota) > nota) {
      est = 'Estudiante '+estudiantes[i].codigo+' - '+
      'Nombre: '+estudiantes[i].nombre+' - '+'Nota: '+estudiantes[i].nota;
      nota = Number(estudiantes[i].nota);
    }
  }   
  alert( "La nota mayor corresponde a: \n" +est );
};

function boton4(){
  var nota = 100,
      est = "";
  for (var i = 0; i < index; i++) {
    if ( Number(estudiantes[i].nota) < nota) {
      est = 'Estudiante '+estudiantes[i].codigo+' - '+
      'Nombre: '+estudiantes[i].nombre+' - '+'Nota: '+estudiantes[i].nota;
      nota = Number(estudiantes[i].nota);
    }
  }
  alert( "La menor nota corresponde a: \n"+est );
};

//AUX BOTON 1 FUNCT
function imprimirDatosEst(i) {
    var node = document.createElement("TR");          
    var cell1 = document.createElement("TD");          
    var cell2 = document.createElement("TD");          
    var cell3 = document.createElement("TD");          
    var text1 = document.createTextNode(estudiantes[i].codigo);      
    var text2 = document.createTextNode(estudiantes[i].nombre);      
    var text3 = document.createTextNode(estudiantes[i].nota);      
    node.appendChild(cell1);                           
    node.appendChild(cell2);                           
    node.appendChild(cell3);                           
    cell1.appendChild(text1);
    cell2.appendChild(text2);
    cell3.appendChild(text3);
    
    document.getElementById("tbody").appendChild(node);  
};

//EVENTOS CLICK
document.getElementsByTagName("button")[0].addEventListener("click", function(){
  boton1();
});
document.getElementsByTagName("button")[1].addEventListener("click", function(){
  boton2();
});
document.getElementsByTagName("button")[2].addEventListener("click", function(){
  boton3();
});
document.getElementsByTagName("button")[3].addEventListener("click", function(){
  boton4();
});
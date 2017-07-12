//FUNCIONES CON LOCALSTORAGE
function editNota(codeKey){
  var est;
  for (var i = 0; i < localStorage.length; i++) {
    var clave = localStorage.key(i);
    if(clave == codeKey){
      est = $.parseJSON(localStorage.getItem(clave));
      $("#id").val(est.id);
      $("#nota").val(est.nota);
      $("#nombre").val(est.nombre);
    }
  }
}; 

function deleteNota(codeKey){
  localStorage.removeItem(codeKey);
  listNotes();
};

function listNotes(){
  var tabla = "";
  var rowData = $("#tbody");

  for (var i = 0; i < localStorage.length; i++) {
    var clave = localStorage.key(i);
    var est = $.parseJSON(localStorage.getItem(clave))
    tabla += "<tr>";
    tabla += "<td>"+est.id+"</td>";
    tabla += "<td>"+est.nombre+"</td>";
    tabla += "<td class='scores'>"+est.nota+"</td>";
    tabla += '<td><button class="boti" onclick="editNota(\'' + est.id + '\')">Editar</button></td> ';
    tabla += '<td><button class="boti" onclick="deleteNota(\'' + est.id + '\')">Eliminar</button></td> ';
    tabla += "</tr>";
  };

  $(rowData).html(tabla);
};

//FUNCIONES PARA PROCESO DE DATOS
function boton2(){
  var promedio = 0;
  var index = 0;
  $('.scores').each(function() {
    promedio += Number($(this).html());
    index++
  });
  alert( "El promedio del salon es de "+ (promedio/ index) );
};

function boton3(){
  var nota = 0,
      est = "";
  $('.scores').each(function() {
    if ( Number($(this).html()) > nota) {
      est = 'Estudiante '+$(this).parent().find(":nth-child(1)").html()+' - '+
      'Nombre: '+$(this).parent().find(":nth-child(2)").html()+' - '+'Nota: '+$(this).html();
      nota = Number($(this).html());
    }
  });   
  alert("La nota mayor corresponde a: \n"+est);
};

function boton4(){
  var nota = 101,
      est = "";
  $('.scores').each(function() {
    if ( Number($(this).html()) < nota) {
      est = 'Estudiante '+$(this).parent().find(":nth-child(1)").html()+' - '+
      'Nombre: '+$(this).parent().find(":nth-child(2)").html()+' - '+'Nota: '+$(this).html();
      nota = Number($(this).html());
    }
  });   
  alert("La nota mayor corresponde a: \n"+est);
};

//EVENTOS CLICK

$("#boton2").on("click", function(){
  boton2();
});
$("#boton3").on("click", function(){
  boton3();
});
$("#boton4").on("click", function(){
  boton4();
});

//////////////////////////////////////////////////////////////////////////////////////////////
//ONLOAD
$(function(){
  var count;
  if (localStorage.length>0) {
    count = localStorage.length + 1
  }else{
    count = 1;
  }
  $("#id").val(count);
  $("#boton1").click(function(){
    var id = $("#id").val();
    var nombre = $("#nombre").val();
    var nota = $("#nota").val();

    var est = {
      "id": id,
      "nombre": nombre,
      "nota": nota
    };

    localStorage.setItem(id,JSON.stringify(est));
    count = localStorage.length + 1;

    listNotes();
    resett();
  });

  function resett(){
    $("#id").val(count);
    $("#nombre").val("");
    $("#nota").val("");
  };

  listNotes();
  $("nota").val();
});
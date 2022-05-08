const arraySituacion = [];

function keyupInput1(){
  document.getElementById("myInputCodi").value = "";
  document.getElementById("dropdownSituacion").value = "";
  document.getElementById("labelExtra").innerText =  "";
  buscar();
}

function keyupInput2(){
  document.getElementById("myInputCodi").value = "";
  document.getElementById("dropdownSituacion").value = "";
  document.getElementById("labelExtra").innerText =  "";
  buscar();
}

function keyupInputCodi(){
  document.getElementById("myInput").value = "";
  document.getElementById("myInput2").value = "";
  document.getElementById("dropdownSituacion").value = "";
  document.getElementById("labelExtra").innerText =  "";
  buscar();
}


function buscar() {
  var input, filter, table, tr, td, i, txtValue, iHits;
  var arrayActas;

  document.getElementById("divExtraInfo").style.display = "none";  

  iHits = 0;
  input = document.getElementById("myInput");
  filter = normalice(input.value.toUpperCase());

  input2 = document.getElementById("myInput2");
  filter2 = normalice(input2.value.toUpperCase());

  inputCodi = document.getElementById("myInputCodi");
  filterCodi = normalice(inputCodi.value.toUpperCase());

  inputSituacio = document.getElementById("dropdownSituacion");
  filterSituacio = inputSituacio.value;

  logic = document.getElementById("button");
  operator = logic.innerText;

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  if (filterCodi != "") {
    document.getElementById("myInput").value = "";
    document.getElementById("myInput2").value = "";

    for (i = 0; i < tr.length; i++) {
      hit = 0;
      tdCodi = tr[i].getElementsByTagName("td")[0];
      if (tdCodi) {
        txtCodi = normalice(tdCodi.textContent || tdCodi.innerText);
        if (txtCodi.toUpperCase().indexOf(filterCodi) > -1) {
          hit = 1;
        }

        if (hit==1) {
          tr[i].style.display = "";
          iHits = iHits + 1;
        } else {
          tr[i].style.display = "none";
        }
      }
    }

  } else if (filterSituacio != "") {

    for (var j = 0; j < arraySituacion.length; j++) {

      if (arraySituacion[j].situacio == filterSituacio) {
        
          arrayActas = arraySituacion[j].actes.split(',');
          console.log(arrayActas); 
          for (var i = 0; i < tr.length; i++) {
            hit = 0;
            tdCodi = tr[i].getElementsByTagName("td")[0];
            if (tdCodi) {
              txtCodi = normalice(tdCodi.textContent || tdCodi.innerText)
              if (arrayActas.includes(txtCodi) || arrayActas.includes(txtCodi.substring(0, txtCodi.length - 2)) ) {
                hit = 1;
              } else {
                hit = 0;
              }

              if (hit==1) {
                tr[i].style.display = "";
                iHits = iHits + 1;
              } else {
                tr[i].style.display = "none";
              }

            }
          }

      }
    }
  } else {

    if (filter == "") {
      if (filter2 != "") {
        filter = filter2;
        filter2 = "";
      }
    }


    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        
        hit = 0;

        txtValue = normalice(td.textContent || td.innerText);
  
          if (filter2 == "") {
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              hit = 1
            } else {
              hit = 0;
            }  
          } else {
          
            //miramos el operador
            if (operator == "i") {
              //operador AND
              if (txtValue.toUpperCase().indexOf(filter) > -1 && txtValue.toUpperCase().indexOf(filter2) > -1) {
                hit = 1
              } else {
                hit = 0;
              }  

            } else {
              //operador OR
              if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue.toUpperCase().indexOf(filter2) > -1) {
                hit = 1
              } else {
                hit = 0;
              }  
            }
          }

        if (hit==1) {
          tr[i].style.display = "";
          iHits = iHits + 1;
        } else {
          tr[i].style.display = "none";
        }
      }     
    }
  }
  if (iHits == 1) {
    document.getElementById("hitCounter").innerHTML = iHits + " coincidència." 
  } else {
    document.getElementById("hitCounter").innerHTML = numberWithCommas(iHits) + " coincidències." 
  }
  
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function changeButton(){
  var btn = document.getElementById("button");
  if(btn.innerText=="i"){
   btn.innerText="o";
  }
  else{
    btn.innerText="i";
  }
  buscar();
}

function reset(){
  document.getElementById("button").innerText = "i";

  
  document.getElementById("myInput").value = "";

  document.getElementById("myInput2").value = "";

  document.getElementById("myInputCodi").value = "";
  document.getElementById("dropdownSituacion").value = "";

  buscar();
}

function normalice(text){
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()
}

function esconde() {

}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function tableClick(el) {
  //alert(arraySituacion[0].nombre);
}

function dropdownChange(){
  document.getElementById("myInput").value = "";
  document.getElementById("myInput2").value = "";
  document.getElementById("myInputCodi").value = "";

  inputSituacio = document.getElementById("dropdownSituacion");
  filterSituacio = inputSituacio.value;

  document.getElementById("labelExtra").innerText = "";
  document.getElementById("divExtraInfo").style.display = "none";

  buscar();

  if (filterSituacio!="") {
    for (var j = 0; j < arraySituacion.length; j++) {

      if (arraySituacion[j].situacio == filterSituacio) {
        if (arraySituacion[j].extra.trim()!="") {
          document.getElementById("labelExtra").innerText = arraySituacion[j].extra;
          document.getElementById("divExtraInfo").style.display = "block";  
        }      
      }
    }
    
  }
}

function pageonload() {

  var version, fecha, situacion;
  version = "0.9"
  fecha = "23/04/2022"
  //document.getElementById("version").innerText = "v.0.9"
  document.getElementById("fecha").innerText = "v." + version + " - " + fecha;

  loadSituaciones();

  select = document.getElementById("dropdownSituacion");
  for (var i = 0; i < arraySituacion.length; i++) {

    var option = document.createElement('option');
    option.text = option.value = arraySituacion[i].situacio;
    select.add(option);

  }

  buscar();
}

function loadSituaciones() {
  for (var i=0; i< jsonData.situacions.length; i++) {
     arraySituacion.push(jsonData.situacions[i])
  }
}

const version = "0.9";
const fecha = "23/04/2022";

function clickBack() {
    window.open('../index.html', "_self")
}


function buscar() {
  var input, filter, table, tr, td, i, txtValue, iHits;

  iHits = 0;

  inputCodi = document.getElementById("myInputCodi");
  filterCodi = normalice(inputCodi.value.toUpperCase());

  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  if (filterCodi != "") {

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

  }
  
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function reset(){
  document.getElementById("myInputCodi").value = "";
  

  buscar();
}

function normalice(text){
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function pageonload() {
  document.getElementById("fecha").innerText = "v." + version + " - " + fecha;
}

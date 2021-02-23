/*los siguientes son arreglos y constantes con los datos de impuestos a locación
y prestación de servicios, venta de cosas muebles y aportes jubilatorios, 
ordenados de menor a mayor categoría, para ser llamados dependiendo en cual
estamos.
*/
//CAMBIAR COMENTARIOS A INGLES
//PONER LAS CONSTANTES EN MAYUSCULAS
const arr_imp_servicios = [168.97, 325.54, 556.64, 914.47, 1739.48, 2393.05, 3044.12, 6957.96];
const arr_imp_venta = [
  168.97,
  325.54,
  514.38,
  844.9,
  1349.34,
  1761.85,
  2196.71,
  5392.44,
  8697.46,
  10220.77,
  11741.58,
];
const arr_aportes_jubilatorios = [
  745.49,
  820.04,
  902.05,
  992.25,
  1091.48,
  1200.62,
  1320.68,
  1452.75,
  1598.03,
  1757.84,
  1933.61,
];
const arr_max_cat = [
  208739.25,
  313108.87,
  417478.51,
  626217.78,
  834957.0,
  1043696.27,
  1252435.53,
  1739493.79,
  2043905.21,
  2348316.62,
  2609240.69,
];
const imp_obra_social = 1041.22;
const MAX_LOCACION = 7;
const MAX_MUEBLES = 10;
const A_ASCII = 65;

$(document).ready(function () {
  $("#actividad").on("change", function () {
    var actividad = document.getElementById("actividad").value;
  });
  $("#situacion_laboral").on("change", function () {
    var situacion_laboral = document.getElementById("situacion_laboral").value;
  });
  $("#button_calculate").on("click", function () {
    var n = $("#facturacion").val();

    var error = 0;
    var jubilacion = 0;
    var obra_social = 0;
    var imp = 0;
    var total = 0;

    var cat = "A"; //cat es la categoría de monotributo, empezando desde la A = 0

    //abajo estan los maximos de cada categoría
    //ESTO SE PUEDE HACER EN UN LOOP CON LAS CONSTANTES EN UN ARREGLO
    if (n <= arr_max_cat[0]) {
      cat = "A";
    } else if (n <= arr_max_cat[1]) {
      cat = "B";
    } else if (n <= arr_max_cat[2]) {
      cat = "C";
    } else if (n <= arr_max_cat[3]) {
      cat = "D";
    } else if (n <= arr_max_cat[4]) {
      cat = "E";
    } else if (n <= arr_max_cat[5]) {
      cat = "F";
    } else if (n <= arr_max_cat[6]) {
      cat = "G";
    } else if (n <= arr_max_cat[7]) {
      cat = "H";
    } else if (n <= arr_max_cat[8]) {
      cat = "I";
    } else if (n <= arr_max_cat[9]) {
      cat = "J";
    } else if (n <= arr_max_cat[10]) {
      cat = "K";
    } else if (n >= arr_max_cat[10]) {
      cat = "L";
    }

    if (n <= 1000) {
      error = 3;
    }

    var i = cat.charCodeAt(0) - A_ASCII;
    actividad = $("#actividad").val();
    situacion_laboral = $("#situacion_laboral").val();

    if (actividad == 1) {
      //locación o prestación de servicios
      if (i > MAX_LOCACION) {
        //categoría mayor a H
        error = 1;
      } else {
        imp = arr_imp_servicios[i];
      }
    } else {
      //venta de cosas muebles
      if (i > MAX_MUEBLES) {
        //categoría mayor a K
        error = 2;
      } else {
        imp = arr_imp_venta[i];
      }
    }

    if (situacion_laboral == 1) {
      //si es actividad independiente,debe pagar aportes
      jubilacion = arr_aportes_jubilatorios[i];
      obra_social = imp_obra_social;
    }
    if (situacion_laboral == 2 || actividad == 2) {
      error = 4;
    }
    //resultados
    var tcat = document.getElementById("text_cat");
    var tjub = document.getElementById("text_jubilacion");
    var timp = document.getElementById("text_impuestos");
    var tobra = document.getElementById("text_obra_social");
    var ttotal = document.getElementById("text_total");

    if (!error) {
      total = imp + jubilacion + obra_social;
      total = Number(total.toFixed(2));
      tcat.textContent = "Categoría ".concat(cat);
      ttotal.textContent = "Cuota total: $ ".concat(total);
      timp.textContent = "- Impuesto : $ ".concat(imp);
      tobra.textContent = "- Aportes obra social: $ ".concat(obra_social);
      tjub.textContent = "- Aportes jubilación: $ ".concat(jubilacion);
    } else if (error) {
      tcat.textContent = "No corresponde Monotributo";
      ttotal.textContent = "";
      timp.textContent = "";
      tobra.textContent = "";
      if (error == 1) {
        tjub.textContent =
          "La facturación máxima para locación/prestación de servicios es $ 1.739.493,79";
      } else if (error == 2) {
        tjub.textContent = "La facturación máxima para venta de cosas muebles es $ 2.609.240,69";
      } else if (error == 3) {
        tcat.textContent = "Hubo un error";
        tjub.textContent =
          'El importe es muy pequeño o negativo, evite usar "-" y use puntos solo para separar los decimales';
      } else if (error == 4) {
        tcat.textContent = "Hubo un error";
        tjub.textContent = "No seleccionó todas las opciones";
      }
    }
  });
});

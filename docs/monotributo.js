/*los siguientes son arreglos y constantes con los datos de impuestos a locación
y prestación de servicios, venta de cosas muebles y aportes jubilatorios,
ordenados de menor a mayor categoría, para ser llamados dependiendo en cual
estamos.
*/

const CONSTANTS = {
    S_2021: {
        ARRAY_IMP_SERVICIOS: [228.63, 440.49, 753.19, 1237.37, 2353.69, 3238.03, 4118.99, 9414.8],
        ARRAY_IMP_VENTA: [
            228.63, 440.49, 696.01, 1143.23, 1825.79, 2383.95, 2972.36, 7296.5, 11768.52, 13829.7,
            15887.51,
        ],
        ARRAY_APORTES_JUBILATORIS: [
            1008.72, 1109.59, 1220.56, 1342.61, 1476.88, 1624.56, 1787.01, 1965.71, 2162.29, 2378.53,
            2616.36,
        ],
        ARRAY_MAX_CAT: [
            370000.0, 550000.0, 770000.0, 1060000.0, 1400000.0, 1750000.0, 2100000.0, 2600000.0,
            2910000.0, 3335000.0, 3700000.0,
        ],
        IMPUESTO_OBRA_SOCIAL: [1408.87, 1408.87, 1408.87, 1408.87, 1408.87, 1408.87, 1408.87, 1408.87,
            1408.87, 1408.87, 1408.87,]
    },
    P_2022: {
        ARRAY_IMP_SERVICIOS: [288.07, 555.02, 949.02, 1559.09, 2965.66, 4079.93, 5189.94, 11862.69],
        ARRAY_IMP_VENTA: [
            288.07, 555.02, 876.97, 1440.47, 2300.5, 3003.79, 3745.19, 9193.62, 14828.38, 17425.48,
            20018.33,
        ],
        ARRAY_APORTES_JUBILATORIS: [
            1270.99, 1389.09, 1537.91, 1691.69, 1860.87, 2046.95, 2251.64, 2476.8, 2724.49, 2996.96,
            3296.62,
        ],
        ARRAY_MAX_CAT: [
            466201.59, 693002.36, 970203.3, 1335604.55, 1764006.01, 2205007.51, 2646009.01, 3276011.15,
            3666612.48, 4202114.31, 4662015.87,
        ],
        IMPUESTO_OBRA_SOCIAL: [1775.18, 1775.18, 1775.18, 1775.18, 1775.18, 1775.18, 1775.18, 1775.18,
            1775.18, 1775.18, 1775.18,]
    },
    S_2022: {
        ARRAY_IMP_SERVICIOS: [288.07, 555.02, 949.02, 1559.09, 2965.66, 4079.93, 5189.94, 11862.69],
        ARRAY_IMP_VENTA: [
            288.07, 555.02, 876.97, 1440.47, 2300.5, 3003.79, 3745.19, 9193.62, 14828.38, 17425.48,
            20018.33,
        ],
        ARRAY_APORTES_JUBILATORIS: [
            1270.99, 1389.09, 1537.91, 1691.69, 1860.87, 2046.95, 2251.64, 2476.8, 2724.49, 2996.96,
            3296.62,
        ],
        ARRAY_MAX_CAT: [
            748382.07, 1112459.83, 1557443.75, 1934273.04, 2277684.56, 2847105.70, 3416526.83, 4229985.60,
            4734330.3, 5425770, 6019594.89,
        ],
        IMPUESTO_OBRA_SOCIAL: [1775.18, 1775.18, 1775.18, 1775.18, 1775.18, 1775.18, 1775.18, 1775.18,
            1775.18, 1775.18, 1775.18,]
    },
    P_2023: {
        ARRAY_IMP_SERVICIOS: [496.85, 957.27, 1636.83, 2689.05, 5115.04, 7036.89, 8951.39, 20460.26],
        ARRAY_IMP_VENTA: [
          496.85, 957.27, 1512.56, 2484.46, 3967.80, 5180.81, 6459.54, 15856.76, 25575.36, 30054.72,
          34526.76,
        ],
        ARRAY_APORTES_JUBILATORIS: [
          2192.15, 2411.36, 2652.52, 2917.75, 3209.55, 3530.49, 3883.53, 4271.88, 4699.08, 5169.03,
          5685.87,
        ],
        ARRAY_MAX_CAT: [
          999657.23, 1485976.96, 2080367.73, 2583720.42, 3042435.05, 3803043.82, 4563652.57, 5650236.51,
          6323918.55, 7247514.92,  8040721.19,
        ],
        IMPUESTO_OBRA_SOCIAL: [
          3061.75, 3061.75, 3061.75, 3638.26, 4452.02, 5145.02, 5512.52, 6615.02, 8190.03, 9166.53,
          10505.29,
        ]
    },
    S_2023: {
        ARRAY_IMP_SERVICIOS: [496.85, 957.27, 1636.83, 2689.05, 5115.04, 7036.89, 8951.39, 20460.26],
        ARRAY_IMP_VENTA: [
            496.85, 957.27, 1512.56, 2484.46, 3967.8, 5180.81, 6459.54, 15856.76, 25575.36, 30054.72,
            34526.76,
        ],
        ARRAY_APORTES_JUBILATORIS: [
            2192.15, 2411.36, 2652.52, 2917.75, 3209.55, 3530.49, 3883.53, 4271.88, 4699.08, 5169.03,
            5685.87,
        ],
        ARRAY_MAX_CAT: [
            1414762.58, 2103025.45, 2944235.6, 3656604.33, 4305799.15, 5382248.94, 6458698.71, 7996484.12,
            8949911.06, 10257028.68, 11379612.01,
        ],
        IMPUESTO_OBRA_SOCIAL: [
            3061.75, 3061.75, 3061.75, 3638.26, 4452.02, 5145.02, 5512.52, 6615.02, 8190.03, 9166.53,
            10505.29,
        ],
    },
    P_2024_OLD: {
        ARRAY_IMP_SERVICIOS: [
            1047.86, 2018.89, 3452.09, 5671.23, 10787.67, 14840.88, 18878.58, 43150.91, 0, 0, 0],
        ARRAY_IMP_VENTA: [
            1047.86, 2018.89, 3190, 5239.75, 8368.13, 10926.38, 13623.24, 33442.08, 53938.71, 63385.73, 72817.31,
        ],
        ARRAY_APORTES_JUBILATORIS: [
            4623.27, 5085.60, 5594.16, 6153.58, 6768.94, 7445.83, 8190.41, 9009.45, 9910.39, 10901.43, 11991.57,
        ],
        ARRAY_MAX_CAT: [
            2108288.01, 3133941.63, 4387518.23, 5449094.55, 6416528.72, 8020660.9, 9624793.05, 11916410.45,
            13337213.22, 15285088.04, 16957968.71,
        ],
        IMPUESTO_OBRA_SOCIAL: [
            6457.26, 6457.26, 6457.26, 7673.13, 9389.36, 10850.9, 11625.96, 13951.15, 17272.86, 19332.31, 22155.77,
        ]
      },
      P_2024: {
            ARRAY_IMP_SERVICIOS: [1047.86, 2018.89, 3452.09, 5671.23, 10787.67, 14840.88, 18878.58, 43150.91, 0, 0, 0],
            ARRAY_IMP_VENTA: [
            1047.86, 2018.89, 3190, 5239.75, 8368.13, 10926.38, 13623.24, 33442.08, 53938.71, 63385.73, 72817.31,
            ],
            ARRAY_APORTES_JUBILATORIS: [
            4623.27, 5085.60, 5594.16, 6153.58, 6768.94, 7445.83, 8190.41, 9009.45, 9910.39, 10901.43, 11991.57,
            ],
            ARRAY_MAX_CAT: [
                6450000, 9450000, 13250000, 16450000, 19350000, 24250000, 29000000, 44000000,
                49250000, 56400000, 68000000,
            ],
            IMPUESTO_OBRA_SOCIAL: [
            6457.26, 6457.26, 6457.26, 7673.13, 9389.36, 10850.9, 11625.96, 13951.15, 17272.86, 19332.31, 22155.77,
            ],
        },
        S_2024: {
            ARRAY_IMP_SERVICIOS: [
                3000, 5700, 9800, 16000, 30000, 42200, 76800, 220000, 437500, 525000, 735000
            ],
            ARRAY_IMP_VENTA: [
             3000, 5700, 9000, 14900, 23800, 31000, 38400, 110000, 175000, 210000, 245000
            ],
            ARRAY_APORTES_JUBILATORIS: [
              9800, 10780, 11858, 13043.8, 14348.18, 15783, 22096.20, 30934.68, 43308.55, 60631.97, 84884.76,
            ],
            ARRAY_MAX_CAT: [
              6450000, 9450000, 13250000, 16450000, 19350000, 24250000, 29000000, 44000000,
              49250000, 56400000, 68000000,
            ],
            IMPUESTO_OBRA_SOCIAL: [
              13800, 13800, 13800, 16400, 20000, 23000, 24800, 29800, 36800, 41300, 47200,
            ],
        },
        P_2025: {
            ARRAY_IMP_SERVICIOS: [
                3633.98, 6904.57, 11871.01, 19381.24, 36339.83, 51118.03, 93029.96, 266492.09, 529955.85, 635947.02, 890325.83
            ],
            ARRAY_IMP_VENTA: [
                3633.98, 6904.57, 10901.95, 18048.78, 28829.60, 37551.16, 46514.98, 133246.04, 211982.34, 254378.81, 296775.28
            ],
            ARRAY_APORTES_JUBILATORIS: [
                11871.01, 13058.11, 14363.92, 15800.32, 17380.35, 19118.38, 26765.73, 37472.03, 52460.84, 73445.18, 102823.25
            ],
            ARRAY_MAX_CAT: [
                7813063.45, 11447046.44, 16050091.57, 19926340.10, 23439190.34, 29374695.90, 35128502.31, 53298417.30, 59657887.55, 68318880.36, 82370281.28
            ],
            IMPUESTO_OBRA_SOCIAL: [
                16716.32, 16716.32, 16716.32, 19865.77, 24226.55, 27860.54, 30040.93, 36097.56, 44576.86, 50027.83, 57174.67
            ],
          },
        S_2025: {
            ARRAY_IMP_SERVICIOS: [
                4182.60, 7946.95, 13663.17, 22307.22, 41826.04, 58835.29, 107074.65, 306724.27, 609963.03, 731955.63, 1024737.89
            ],
            ARRAY_IMP_VENTA: [
                4182.60, 7946.95, 12547.81, 20773.60, 33181.99, 43220.24, 53537.32, 153362.13, 243985.21, 292782.26, 341579.30
            ],
            ARRAY_APORTES_JUBILATORIS: [
                13663.17, 15029.49, 16532.44, 18185.68, 20004.25, 22004.67, 30806.54, 43129.16, 60380.82, 84533.15, 118346.41,
            ],
            ARRAY_MAX_CAT: [
                8991597.87, 13175201.52, 18473166.15, 22934610.05, 26977793.60, 33809379.57, 40431835.35, 61344853.64,
                68664410.05, 78632948.76, 94805682.90,
            ],
            IMPUESTO_OBRA_SOCIAL: [
                19239.97, 19239.97, 19239.97, 22864.90, 27884.02, 32066.63, 34576.19, 41547.19, 51306.61, 57580.51, 65806.30,
            ],
        },
};


// locacion de servicios ahora tiene las mismas categorias que venta cosas muebles
const MAX_LOCACION = 10;
const MAX_MUEBLES = 10;
const A_ASCII = 65;

$(document).ready(function() {
    // month parsing
    semester_idx = "P_2023";
    $("#select_month").on("change", function() {
        semester_idx = document.getElementById("select_month").value;
    });
    $("#actividad").on("change", function() {
        var actividad = document.getElementById("actividad").value;
    });
    $("#situacion_laboral").on("change", function() {
        var situacion_laboral = document.getElementById("situacion_laboral").value;
    });
    $("#button_calculate").on("click", function() {
        var n = $("#facturacion").val();

        var error = 0;
        var jubilacion = 0;
        var obra_social = 0;
        var imp = 0;
        var total = 0;

        //cat es la categoría de monotributo, empezando desde la A = 0
        var cat = "A";

        //abajo estan los maximos de cada categoría
        if (n <= CONSTANTS[semester_idx].ARRAY_MAX_CAT[0]) {
            cat = "A";
        } else if (n <= CONSTANTS[semester_idx].ARRAY_MAX_CAT[1]) {
            cat = "B";
        } else if (n <= CONSTANTS[semester_idx].ARRAY_MAX_CAT[2]) {
            cat = "C";
        } else if (n <= CONSTANTS[semester_idx].ARRAY_MAX_CAT[3]) {
            cat = "D";
        } else if (n <= CONSTANTS[semester_idx].ARRAY_MAX_CAT[4]) {
            cat = "E";
        } else if (n <= CONSTANTS[semester_idx].ARRAY_MAX_CAT[5]) {
            cat = "F";
        } else if (n <= CONSTANTS[semester_idx].ARRAY_MAX_CAT[6]) {
            cat = "G";
        } else if (n <= CONSTANTS[semester_idx].ARRAY_MAX_CAT[7]) {
            cat = "H";
        } else if (n <= CONSTANTS[semester_idx].ARRAY_MAX_CAT[8]) {
            cat = "I";
        } else if (n <= CONSTANTS[semester_idx].ARRAY_MAX_CAT[9]) {
            cat = "J";
        } else if (n <= CONSTANTS[semester_idx].ARRAY_MAX_CAT[10]) {
            cat = "K";
        } else if (n >= CONSTANTS[semester_idx].ARRAY_MAX_CAT[10]) {
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
                //categoría mayor a K
                error = 1;
            } else {
                imp = CONSTANTS[semester_idx].ARRAY_IMP_SERVICIOS[i];
            }
        } else {
            //venta de cosas muebles
            if (i > MAX_MUEBLES) {
                //categoría mayor a K
                error = 2;
            } else {
                imp = CONSTANTS[semester_idx].ARRAY_IMP_VENTA[i];
            }
        }

        if (situacion_laboral == 1) {
            //si es actividad independiente,debe pagar aportes
            jubilacion = CONSTANTS[semester_idx].ARRAY_APORTES_JUBILATORIS[i];
            obra_social = CONSTANTS[semester_idx].IMPUESTO_OBRA_SOCIAL[i];
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
                    "La facturación máxima para locación/prestación de servicios es $ ".concat(
                        CONSTANTS[semester_idx].ARRAY_MAX_CAT[MAX_LOCACION]
                    );
            } else if (error == 2) {
                tjub.textContent = "La facturación máxima para venta de cosas muebles es $ ".concat(
                    CONSTANTS[semester_idx].ARRAY_MAX_CAT[MAX_MUEBLES]
                );
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
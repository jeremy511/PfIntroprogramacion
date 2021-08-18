function Ftoall() {
const faren = document.getElementById("farenh").value;
const res = document.getElementById("result1")
let celsiusf = 0
let kelvinf = 0

    celsiusf = (faren - 32) * 5/9;
    kelvinf = ((faren - 32)/1.8)+273.15;

res.innerHTML =
` ${faren} °F = ${celsiusf.toFixed(1)} °C<br>`+
`<hr>${faren}  °F =  ${kelvinf.toFixed(1)} °K `

}

function Ctoall() {
  const cels = document.getElementById("cels").value;
  const rescel = document.getElementById("result2")
  ceroabs = 273.15

   let farenc = (cels * 1.8) +32;
   let kelvinc = parseInt(cels) + ceroabs;

rescel.innerHTML =
`${cels} °C = ${farenc.toFixed(1)} °F<br>`+
`<hr>${cels} °C = ${kelvinc.toFixed(1)} °K `

}

function Ktoall() {
  const kel = document.getElementById("kel").value;
  const reskel = document.getElementById("result3")
  ceroabs = 273.15

   let farenk = ((kel-ceroabs)*1.8)+32;
   let celsiusk = kel - ceroabs;

reskel.innerHTML =
`${kel} °K = ${farenk.toFixed(1)} °F <br>`+
`<hr>${kel} °K = ${celsiusk.toFixed(1)} °C `

}

////////////////////////monedas

function dollartoall() {
  const dollar = document.getElementById("dollar").value;
  const dol = document.getElementById("dol")


    rdop = dollar * 57.28;
    eurdol = dollar * 0.85;

dol.innerHTML=
`${dollar}$ = ${rdop.toFixed(1)} DOP<br>`+
`<hr>${dollar}$ = ${eurdol.toFixed(1)}€ `

}

function doptoall() {
  const domip = document.getElementById("domip").value;
  const dop = document.getElementById("dop")


    dollardop = domip * 0.017;
    eurdop = domip * 0.015;

dop.innerHTML=
`${domip} DOP =  ${dollardop.toFixed(1)}$ <br>`+
`<hr>${domip} DOP =  ${eurdop.toFixed(1)}€`

}


function eurtoall() {
  const eurmon = document.getElementById("eurmon").value;
  const euro = document.getElementById("euro")


    dollareur = eurmon * 1.17;
    dopeur = eurmon * 66.85;

euro.innerHTML =
` ${eurmon}€ = ${dollareur.toFixed(1)}$ <br>`+
`<hr>${eurmon}€ = ${dopeur.toFixed(1)} DOP `

}

/////////////////////Calculadora



function operaciones(op)
{

    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },

        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    };

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (isNaN(parseFloat(document.getElementById('num1').value))) {
      document.getElementById('calc').innerHTML=`faltan operandos`;
      document.getElementById("num1").focus();
      } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
      document.getElementById('calc').innerHTML=`faltan operandos`;
      document.getElementById("num2").focus();
  }
  else {

      switch(op) {
          case 'sumar':
              var resultado = ops.sumar(num1, num2);
              document.getElementById('calc').innerHTML=`${resultado}`;
              break;
          case 'restar':
              var resultado = ops.restar(num1, num2);
              document.getElementById('calc').innerHTML=`${resultado}`;
              break;
          case 'multiplicar':
              var resultado = ops.multiplicar(num1, num2);
              document.getElementById('calc').innerHTML=`${resultado}`;
              break;
          case 'dividir':
              var resultado = ops.dividir(num1, num2);
              document.getElementById('calc').innerHTML=`${resultado}`;
              break;

      }
  }

}


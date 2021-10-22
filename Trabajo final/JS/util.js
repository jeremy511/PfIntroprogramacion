/* eslint-disable no-case-declarations */
const ceroabs = 273.15

function Ftoall () {
  const faren = document.querySelector('#farenh').value
  const res = document.querySelector('#result1')
  let celsiusf = 0
  let kelvinf = 0

  celsiusf = (faren - 32) * 5 / 9
  kelvinf = ((faren - 32) / 1.8) + 273.15

  res.innerHTML =
` ${faren} °F = ${celsiusf.toFixed(1)} °C<br>` +
`<hr>${faren}  °F =  ${kelvinf.toFixed(1)} °K `
}

function Ctoall () {
  const cels = document.querySelector('#cels').value
  const rescel = document.querySelector('#result2')

  const farenc = (cels * 1.8) + 32
  const kelvinc = parseInt(cels) + ceroabs

  rescel.innerHTML =
`${cels} °C = ${farenc.toFixed(1)} °F<br>` +
`<hr>${cels} °C = ${kelvinc.toFixed(1)} °K `
}

function Ktoall () {
  const kel = document.querySelector('#kel').value
  const reskel = document.querySelector('#result3')

  const farenk = ((kel - ceroabs) * 1.8) + 32
  const celsiusk = kel - ceroabs

  reskel.innerHTML =
`${kel} °K = ${farenk.toFixed(1)} °F <br>` +
`<hr>${kel} °K = ${celsiusk.toFixed(1)} °C `
}

/// /////////////////////monedas

function dollartoall () {
  const dollar = document.querySelector('#dollar').value
  const dol = document.querySelector('#dol')

  const rdop = dollar * 57.28
  const eurdol = dollar * 0.85

  dol.innerHTML =
`${dollar}$ = ${rdop.toFixed(1)} DOP<br>` +
`<hr>${dollar}$ = ${eurdol.toFixed(1)}€ `
}

function doptoall () {
  const domip = document.querySelector('#domip').value
  const dop = document.querySelector('#dop')

  const dollardop = domip * 0.017
  const eurdop = domip * 0.015

  dop.innerHTML =
`${domip} DOP =  ${dollardop.toFixed(1)}$ <br>` +
`<hr>${domip} DOP =  ${eurdop.toFixed(1)}€`
}

function eurtoall () {
  const eurmon = document.querySelector('#eurmon').value
  const euro = document.querySelector('#euro')

  const dollareur = eurmon * 1.17
  const dopeur = eurmon * 66.85

  euro.innerHTML =
` ${eurmon}€ = ${dollareur.toFixed(1)}$ <br>` +
`<hr>${eurmon}€ = ${dopeur.toFixed(1)} DOP `
}

/// //////////////////Calculadora

function operaciones (op) {
  const ops = {
    sumar: function sumarNumeros (n1, n2) {
      return (parseInt(n1) + parseInt(n2))
    },

    restar: function restarNumeros (n1, n2) {
      return (parseInt(n1) - parseInt(n2))
    },

    multiplicar: function multiplicarNumeros (n1, n2) {
      return (parseInt(n1) * parseInt(n2))
    },

    dividir: function dividirNumeros (n1, n2) {
      return (parseInt(n1) / parseInt(n2))
    }

  }

  const num1 = document.querySelector('#num1').value
  const num2 = document.querySelector('#num2').value

  if (isNaN(parseFloat(document.querySelector('#num1').value))) {
    document.querySelector('#calc').innerHTML = 'faltan operandos'
    document.querySelector('#num1').focus()
  } else if (isNaN(parseFloat(document.querySelector('#num2').value))) {
    document.querySelector('#calc').innerHTML = 'faltan operandos'
    document.querySelector('#num2').focus()
  } else {
    switch (op) {
      case 'sumar':
        let resultado = ops.sumar(num1, num2)
        document.querySelector('#calc').innerHTML = `${resultado}`
        break
      case 'restar':
        resultado = ops.restar(num1, num2)
        document.querySelector('#calc').innerHTML = `${resultado}`
        break
      case 'multiplicar':
        resultado = ops.multiplicar(num1, num2)
        document.querySelector('#calc').innerHTML = `${resultado}`
        break
      case 'dividir':
        resultado = ops.dividir(num1, num2)
        document.querySelector('#calc').innerHTML = `${resultado}`
        break
    }
  }
}

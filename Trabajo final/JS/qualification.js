
(function () {
//  global vars

  const formcal = document.querySelector('#form')
  const tbodycal = document.querySelector('#tbody')
  const buttonClick = document.querySelector('#buttonClick')
  const msgshow = document.querySelector('#showmsg')
  let xamall = 0
  let pracall = 0
  let getHighcalxam = 0
  // let getHighcalprac = 0
  let finalxamall = 0
  let countClicks = 1
  // let basic = ' '
  // let basicprac = ' '
  // let max = 0
  // let maxprac = 0

  // contador de clicks lo cual es igual a veces que el usuario ha insertado una materia
  buttonClick.onclick = function () {
    countClicks++
  }

  // funcion para sumar las notas y tener promedio
  function Sumavg () {
    xamall = document.querySelector('#xamall').innerHTML
    pracall = document.querySelector('#pracall').innerHTML
    finalxamall = document.querySelector('#finalxamall').innerHTML
  }

  function Data () {
    const numasig = document.querySelector('#numasig').value
    const course = document.querySelector('#course').value
    const xam = [] = document.querySelector('#xam').value
    const prac = document.querySelector('#practices').value
    const finalxam = document.querySelector('#finalxam').value
    getHighcalxam = document.querySelector('#qualhighxam')
    getHighcalprac = document.querySelector('#qualhighprac')
    const totalAsig = parseInt(xam) + parseInt(prac) + parseInt(finalxam)

    if (countClicks - 1 == numasig) {
      msgshow.innerHTML = `

      <strong>Hola!</strong> Deberias revisar los campos alla abajo, ya introduciste todas las materias.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    }

    // deshabilitar input una vez el usuario haya insertado todas las materias
    document.querySelector('#numasig').disabled = true

    // validaciones de form
    if (xam >= 0 && xam < 31) {
      if (prac >= 0 && prac < 41) {
        if (finalxam >= 0 && finalxam < 31) {
          // en esta parte se anade el promedio
          
          xamall = (parseInt(xamall) + parseInt(xam))
          const totalSumXam = xamall / numasig
          document.querySelector('#xamall').innerHTML = totalSumXam.toFixed(2)

          pracall = (parseInt(pracall) + parseInt(prac))
          const totalSumPrac = pracall / numasig
          document.querySelector('#pracall').innerHTML = totalSumPrac.toFixed(2)

          finalxamall = (parseInt(finalxamall) + parseInt(finalxam))
          const totalSumFinalxam = finalxamall / numasig
          document.querySelector('#finalxamall').innerHTML = totalSumFinalxam.toFixed(2)

          // for (let i = 0; i < arrHigh.length; i++){
          //   getHighcalxam.innerHTML = arrHigh[i]
          //   }
          // for (let i = 0; i <= 1; i++) {

          // }

          // getHighcalxam.innerHTML = basic

          // for (let j = 0; j < prac.length; j++) {
          //   const element = prac[j]
          //   basicprac = basicprac + element
          // }

          // const arrprac = [] = basicprac
          // for (const i of arrprac) {
          //   if (maxprac < i) {
          //     maxprac = i
          //   }
          //   getHighcalprac.innerHTML = parseInt(maxprac)
          // }

          tbodycal.innerHTML += `

                    <tr>
                    <th>${course}</th>
                      <th>${totalAsig}</th>
                      <td>${xam}</td>
                      <td>${prac}</td>
                      <td>${finalxam}</td>
                    </tr>`
        } else {
          document.querySelector('#finalxam').focus()
          alert('el rango es de 0 a 30')
        }
      } else {
        document.querySelector('#practices').focus()
        alert('el rango es de 0 a 40')
      }
    } else {
      document.querySelector('#xam').focus()
      alert('el rango es de 0 a 30')
    }
    // sacar calificacion mas alta
    let mayor = 0

    for (let i = 0; i < xam.length; i++) {
      if (xam[i] > mayor) {
        mayor = xam[i]
        let idex = xam.indexOf(mayor)
        getHighcalxam.innerHTML = xam[idex]
      }
    }
  }

  function clear () {
    document.querySelector('#form').reset()
  }

  formcal.addEventListener('submit', function (event) {
    event.preventDefault()
    Data()
  })
})()

// if (prac < 0 || prac >= 41) {
//   alert('Solo se permite el siguiente rango: 0 - 40 en el campo "Practicas"');
//   document.getElementById("practices").focus()
// }
// if (finalxam < 0 || finalxam >= 41) {
//   alert('Solo se permite el siguiente rango: 0 - 40 en el campo "Examen final"');
//   document.getElementById("finalxam").focus()
// }

(function () {


  const formcal = document.querySelector('#form');
  const tbodycal = document.querySelector('#tbody');
  let buttonClick = document.querySelector("#buttonClick");
  let msgshow = document.querySelector('#showmsg')
  let xamall = 0
  let pracall = 0
  let getHighcal= 0
  let finalxamall = 0
  let countClicks = 1;

//contador de clicks lo cual es igual a veces que el usuario ha insertado una materia
  buttonClick.onclick = function () {
    countClicks++
  }

  //funcion para sumar las notas y tener promedio
  function Sumavg() {

    xamall = document.querySelector("#xamall").innerHTML;
    pracall = document.querySelector("#pracall").innerHTML;
    finalxamall = document.querySelector("#finalxamall").innerHTML;
  }


  function Data() {


    const numasig = document.querySelector('#numasig').value;
    const course = document.querySelector('#course').value;
    const xam = document.querySelector('#xam').value;
    const prac = document.querySelector('#practices').value;
    const finalxam = document.querySelector('#finalxam').value;
    getHighcal = document.querySelector('#qualhigh')
    let arrgHigh = []
    let totalAsig = parseInt(xam) + parseInt(prac) + parseInt(finalxam);

    if (countClicks - 1 == numasig) {
      msgshow.innerHTML = `

      <strong>Hola!</strong> Deberias revisar los campos alla abajo, ya introduciste todas las materias.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
    }

    //sacar calificacion mas alta
   arrgHigh = document.querySelector('#xam').value
   getHighcal.innerHTML = arrgHigh



    //en esta parte se anade el promedio

    xamall = (parseInt(xamall) + parseInt(xam));
    let totalSumXam = xamall / numasig;
    document.querySelector('#xamall').innerHTML = totalSumXam;

    pracall = (parseInt(pracall) + parseInt(prac));
    let totalSumPrac = pracall / numasig;
    document.querySelector('#pracall').innerHTML = totalSumPrac;

    finalxamall = (parseInt(finalxamall) + parseInt(finalxam));
    let totalSumFinalxam =  finalxamall / numasig;
    document.querySelector('#finalxamall').innerHTML = totalSumFinalxam;


    //deshabilitar input una vez el usuario haya insertado todas las materias

    document.querySelector('#numasig').disabled = true

    //validaciones de form
    if (xam >= 0 && xam < 31) {
      if (prac >= 0 && prac < 41) {
        if (finalxam >= 0 && finalxam < 31) {

          tbodycal.innerHTML += `

                    <tr>
                    <th>${course}</th>
                      <th>${totalAsig}</th>
                      <td>${xam}</td>
                      <td>${prac}</td>
                      <td>${finalxam}</td>
                    </tr>`;

        } else {
          document.querySelector('#finalxam').focus();
          alert('el rango es de 0 a 30');
        }
      } else {
        document.querySelector('#practices').focus();
        alert('el rango es de 0 a 40');
      }
    } else {
      document.querySelector('#xam').focus();
      alert('el rango es de 0 a 30');
    }

  }


  function clear() {

    document.querySelector("form").reset()

  }

  formcal.addEventListener('submit', function (event) {
    event.preventDefault();
    Data();
  });

})();

// if (prac < 0 || prac >= 41) {
//   alert('Solo se permite el siguiente rango: 0 - 40 en el campo "Practicas"');
//   document.getElementById("practices").focus()
// }
// if (finalxam < 0 || finalxam >= 41) {
//   alert('Solo se permite el siguiente rango: 0 - 40 en el campo "Examen final"');
//   document.getElementById("finalxam").focus()
// }


import recommend from '@'
(function () {



  const formcal = document.querySelector('#form');
  const tbodycal = document.querySelector('#tbody1');
  let buttonClick = document.querySelector("#buttonClick");
  let msgshow = document.querySelector('#showmsg')

  let countClicks = 0;

  buttonClick.onclick = function () {

    for (countClicks = 0; countClicks <= numasig; countClicks++) {

          msgshow.innerHTML = `
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`

    }

  }

  function Data() {


    const numasig = document.getElementById('numasig').value
    const course = document.getElementById('course').value;
    const xam = document.getElementById('xam').value;
    const prac = document.getElementById('practices').value;
    const finalxam = document.getElementById('finalxam').value;
    let totalAsig = parseInt(xam) + parseInt(prac) + parseInt(finalxam);

      if (xam >= 0 && xam < 31) {
      if (prac >= 0 && prac < 41) {
        if (finalxam >= 0 && finalxam < 31) {

          while () {

          }

          tbodycal.innerHTML += `

                    <tr>
                    <th>${course}</th>
                      <th>${totalAsig}</th>
                      <td>${xam}</td>
                      <td>${prac}</td>
                      <td>${finalxam}</td>
                    </tr>`;


        } else {
          document.getElementById('finalxam').focus();
          alert('el rango es de 0 a 30');
        }
      } else {
        document.getElementById('practices').focus();
        alert('el rango es de 0 a 40');
      }
    } else {
      document.getElementById('xam').focus();
      alert('el rango es de 0 a 30');
    }

  }

  function clear() {

    document.getElementById("form").reset()

  }


  // if (countCliks != numasig) {

  // msgshow.innerHTML=`

  // <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  //   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  // `

  // }

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

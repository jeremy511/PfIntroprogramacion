(function () {
  const form = document.querySelector("#form");
  const tbody = document.querySelector("#tbody");

  
  function Save() {
    const idcard = document.getElementById("idcard").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const dir = document.getElementById("dir").value;
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value;

    let category = 'nieto';
    if (age >= 60) category = 'abuelo';
    else if (age >= 40) category = 'padre';
    else if (age >= 20) category = 'hijo';

    tbody.innerHTML += `

      <tr>
        <th scope="row">${idcard}</th>
        <td>${name}</td>
        <td>${age}</td>
        <td>${dir}</td>
        <td>${tel}</td>
        <td>${email}</td>
        <td>${category}</td>
      </tr>
`;
  }

  form.addEventListener('submit', evt => {
    evt.preventDefault();
    Save();
  });
})();



//pag2

(function () {
  const formcal = document.querySelector("#form1")
  const tbodycal = document.querySelector("#tbody1")



  function Data() {
    const course = document.getElementById("course").value
    const xam = document.getElementById("xam").value
    const prac = document.getElementById("practices").value
    const finalxam = document.getElementById("finalxam").value



    try {





      if (xam >= 0 && xam < 41) {


        if (prac >= 0 && prac < 41) {


          if (finalxam >= 0 && finalxam < 41) {

            tbodycal.innerHTML += `

                    <tr>
                      <th scope="row">${course}</th>
                      <td>${xam}</td>
                      <td>${prac}</td>
                      <td>${finalxam}</td>
                    </tr>`

          } else {
            document.getElementById("finalxam").focus()
            alert("el rango es de 0 a 40")
          }

        } else {
          document.getElementById("practices").focus()
          alert("el rango es de 0 a 40")
        }

      } else {
        document.getElementById("xam").focus()
        alert("el rango es de 0 a 30")
      }


    } catch (err) {

    }

  }

  formcal.addEventListener('submit', Datos => {
    Datos.preventDefault();
    Data();
  });
})();


// (function () {
//   const formcal = document.querySelector("#form1");
//   const tbodycal = document.querySelector("#tbody1");


//   function Data() {
//     const course = document.getElementById("course").value;
//     const xam = document.getElementById("xam").value;
//     const prac = document.getElementById("practices").value;
//     const finalxam = document.getElementById("finalxam").value;



//     try {

//       if (xam >= 0 && xam < 41) {

//         if (prac >= 0 && prac < 41) {

//           if (finalxam >= 0 && finalxam < 41) {


//             tbodycal.innerHTML += `

//               <tr>
//                 <th scope="row">${course}</th>
//                 <td>${xam}</td>
//                 <td>${prac}</td>
//                 <td>${finalxam}</td>
//               </tr>`;
//           }


//         }


//       } else {

//         document.getElementById("xam").focus();

//       }

//     } catch (error) {

//     }
//   }

//   fomrcal.addEventListener('submit', Data => {
//     Data.preventDefault();
//   });

// })();

// (function () {
//   const formcal = document.querySelector("#form1")
//   const tbodycal = document.querySelector("#tbody1")



//   function Data() {
//     const course = document.getElementById("course").value
//     const xam = document.getElementById("xam").value
//     const prac = document.getElementById("practices").value
//     const finalxam = document.getElementById("finalxam").value



//     if (isNaN(xam)) {
//       alert('ingrese solo numeros')
//       xam.focus()
//     }
//     if (xam < 0 || xam >= 31) {
//       alert('Solo se permite el siguiente rango: 0 - 30 en el campo "examen final"');
//       xam.focus()
//     }


//     tbodycal.innerHTML += `

//         <tr>
//           <th scope="row">${course}</th>
//           <td>${xam}</td>
//           <td>${prac}</td>
//           <td>${finalxam}</td>
//         </tr>
//   `
//   }

//   formcal.addEventListener('submit', evt => {
//     evt.preventDefault();
//     Data();
//   });
// })();
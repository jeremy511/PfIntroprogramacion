(function () {
  const form = document.querySelector('#form')
  const tbody = document.querySelector('#tbody')

  function Save () {
    const idcard = document.querySelector('#idcard').value
    const name = document.querySelector('#name').value
    const age = document.querySelector('#age').value
    const dir = document.querySelector('#dir').value
    const tel = document.querySelector('#tel').value
    const email = document.querySelector('#email').value

    let category = 'nieto'
    if (age >= 60) category = 'abuelo'
    else if (age >= 40) category = 'padre'
    else if (age >= 20) category = 'hijo'

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
`
  }

  form.addEventListener('submit', evt => {
    evt.preventDefault()
    Save()
  })
})()

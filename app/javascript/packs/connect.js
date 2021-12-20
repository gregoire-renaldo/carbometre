const fieldUsername = document.getElementById('usernameField')
const fieldEmail = document.getElementById('fieldEmail')


console.log(fieldEmail)

fieldUsername.addEventListener('input', addEmail )
function addEmail() {
  let email = fieldUsername.value
  fieldEmail.innerHTML = email + '@mail.com'
  fieldEmail.value = email + '@mail.com'
  console.log(email)
}

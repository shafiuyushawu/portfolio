const contactMeForm = document.getElementById('contactMeForm');
const contactMeEmail = document.getElementById('contactMeEmail');
const contactMeError = document.getElementById('contactMeError');
const myRegx = /^([a-z|\d])+@+([a-z]){2,}\.+([a-z)]{2,})/;

contactMeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (myRegx.test(contactMeEmail.value)) {
    contactMeError.textContent = '';
    contactMeForm.submit();
  } else {
    contactMeError.textContent = 'Invalid email address! Kindly enter with this format abcd@emgj.com';
    contactMeError.style.color = 'red';
    contactMeError.style.fontSize = '20px';
    contactMeError.style.textAlign = 'left';
  }
});

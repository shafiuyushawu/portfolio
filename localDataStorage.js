const contactForm = document.getElementById('contactMeForm');
const userFullName = document.getElementById('ContactMefullName');
const userEmailAddress = document.getElementById('contactMeEmail');
const userMessage = document.getElementById('contactMeMessage');

contactForm.addEventListener('change', () => {
  const userDataForm = {
    userName: userFullName.value,
    userEmail: userEmailAddress.value,
    userMsg: userMessage.value,
  };
  const storeData = JSON.stringify(userDataForm);
  localStorage.setItem('userDetails', storeData);
});

const newStoraData = localStorage.getItem('userDetails');
const newStoreData = JSON.stringify(newStoraData);

userFullName.value = newStoreData.userName;
userEmailAddress.value = newStoreData.userEmail;
userMessage.value = newStoreData.userMsg;

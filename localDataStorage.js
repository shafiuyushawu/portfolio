const contactForm = document.getElementById('contactMeForm');
const userFullName = document.getElementById('ContactMefullName');
const userEmailAddress = document.getElementById('contactMeEmail');
const userMesage = document.getElementById('contactMeMessage');

contactForm.addEventListener('change', () => {
  const userDataObj = {
    userName: userFullName.value,
    userEmail: userEmailAddress.value,
    userMsg: userMessage.value,
  };
  const storeData = JSON.stringify(userDataObj);
  localStorage.setItem('userDetails', storeData);
});

const newStoraData = localStorage.getItem('userDetails');
const newStoreData = JSON.stringfy(newStoraData);

userFullName.value = newStoreData.userName;
userEmailAddress.value = newStoreData.userEmail;
userMessage.value = newStoreData.userMsg;

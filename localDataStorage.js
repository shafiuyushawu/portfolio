const contactForm = document.getElementById('contactMeForm');
const userFullName = document.getElementById('ContactMefullName');
const userEmailAddress = document.getElementById('contactMeEmail');
const userMessage = document.getElementById('contactMeMessage');

const userDataObj = {
  userName: userFullName.value,
  userEmail: userEmailAddress.value,
  userMsg: userMessage.value,
};

contactForm.addEventListener('change', () => {
  const storeData = JSON.stringify(userDataObj);
  localStorage.setItem('userDetails', storeData);
});

const newStoraData = localStorage.getItem('userDetails', userDataObj);
const newStoreData = JSON.stringify(newStoraData);

userFullName.value = newStoreData.userName;
userEmailAddress.value = newStoreData.userEmail;
userMessage.value = newStoreData.userMsg;

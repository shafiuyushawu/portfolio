const contactForm = document.getElementById("contactMeForm")
const userFullName = document.getElementById("ContactMefullName");
const userEmailAddress = document.getElementById("contactMeEmail");
const userMessage = document.getElementById("contactMeMessage");

contactForm.addEventListener("change", () => {
    const userDataObj = {
        userName: userFullName.value,
        userEmail: userEmailAddress.value,
        userMsg: userMessage.value
    }

    const storeData = JSON.stringify(userDataObj);
    localStorage.setItem("userDetails", storeData);
})

const newStoraData = localStorage.getItem("userDetails", userDataObj)
const newStoreData = JSON.stringify(newStoraData)

userFullName.value = newStoraData.userName
userEmailAddress.value = newStoraData.userEmail;
userMessage.value = newStoraData.userMsg;


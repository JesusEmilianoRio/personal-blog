import { fetchPost } from "./utils/fetch-post.utility.js";
import { getForm } from "./utils/get-forms-id.utility.js";
import { validateEmail } from "./utils/validate-email.utility.js";
import { validatePassword } from "./utils/validate-password.utility.js";


//Get input from html.
const form = getForm("form");

form.addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent default form submission

  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("user_password").value;
  const checkPassword = validatePassword(passwordValue);

  if(validateEmail(emailValue) && checkPassword){
    const data = {
      email : emailValue,
      password : passwordValue,
    };

    try{
      const responseData = await fetchPost('http://localhost:8080/api/login', data);
    
      console.log('Success', responseData);
    } catch(error){
      console.log('Failed to post data: ', error);
    }
  };

});
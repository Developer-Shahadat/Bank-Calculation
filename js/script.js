document.getElementById("btn-login").addEventListener("click", function () {
  // User Email
  const emailField = document.getElementById("sign-in-email");
  const email = emailField.value;

  // User Password
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  // Validation
  if (email === 'user@id.com' && password === 'user'){
    window.location.href ="bank.html";
  } 
  else{
    alert ('Invalid User')
  }
  
});

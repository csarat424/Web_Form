function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;

    if (
      username === "" ||
      password === "" ||
      email === "" ||
      phone === "" ||
      dob === "" ||
      address === ""
    ) {
      alert("Please fill out all the fields.");
      return false; 
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        return false; 
      }

      var phoneRegex = /^[0-9]{10}$/;
      if (!phone.match(phoneRegex)) {
        alert("Please enter a valid 10-digit phone number.");
        return false; 
      }

    return true;
  }
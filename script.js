
    const submitBtn = document.querySelector("#submitBtn");
    const error1 = document.querySelector("#error1");
    const error2 = document.querySelector("#error2");
    
    submitBtn.addEventListener("click", function(event) {
      event.preventDefault();
      const username = document.querySelector("#username").value;
      const password = document.querySelector("#password").value;
    
      if (username === "admin" && password === "12345") {
        error1.innerHTML = "";
        error2.innerHTML = "";
        redirectToMainPage();
      } else if(username !== "admin" && password === "12345") {
        error1.innerHTML = "Invalid username";
        error2.innerHTML = "Valid format";
        error1.style.color = "red"
        error2.style.color = "green";
      }else if(username === "admin" && password !== "12345") {
        error1.innerHTML = "Valid format";
        error2.innerHTML = "Invalid password";
        error1.style.color = "green"
        error2.style.color = "red";
      }else{
        error1.innerHTML = "Invalid username";
        error2.innerHTML = "Invalid password";
        error1.style.color = "red"
        error2.style.color = "red";
      }
    });
    
    function redirectToMainPage() {
      window.location.href = "main.html";
    }

    //Clear Message

    document.getElementById("username").addEventListener("focus", clearErrorMessage);
    document.getElementById("password").addEventListener("focus", clearErrorMessage);
    
    function clearErrorMessage() {
      document.getElementById("error1").innerHTML = "";
      document.getElementById("error2").innerHTML = "";
    }
    
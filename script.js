// === Particles Background ===
particlesJS('particles-js', {
  "particles": {
    "number":{"value":80,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#ffd700"},
    "shape":{"type":"circle"},
    "opacity":{"value":0.8,"random":true},
    "size":{"value":5,"random":true},
    "line_linked":{"enable":true,"distance":150,"color":"#ffd700","opacity":0.6,"width":1.5},
    "move":{"enable":true,"speed":2,"random":true}
  },
  "interactivity": {
    "events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"}},
    "modes":{"repulse":{"distance":100,"duration":0.4}}
  },
  "retina_detect": true
});


// === SIGNUP FUNCTIONALITY ===
const signupForm = document.getElementById("signupForm");
if(signupForm){
  signupForm.addEventListener("submit", e=>{
    e.preventDefault();
    const user = document.getElementById("newUsername").value.trim();
    const pass = document.getElementById("newPassword").value.trim();
    const confirm = document.getElementById("confirmPassword").value.trim();

    if(!user || !pass || !confirm){
      alert("Fill all fields!");
      return;
    }

    if(pass !== confirm){
      alert("Passwords do not match!");
      return;
    }

    // Save credentials
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Account created successfully! Redirecting to login page...");
    signupForm.reset();
    window.location.href = "index.html";
  });
}


// === LOGIN FUNCTIONALITY ===
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    // If account does not exist
    if (!savedUser || !savedPass) {
      alert("No account found. Redirecting to signup page...");
      loginForm.reset();
      window.location.href = "signup.html"; // Auto redirect to signup
      return;
    }

    // Check credentials
    if (user === savedUser && pass === savedPass) {
      alert("Login successful!");
      loginForm.reset();
      window.location.href = "welcome.html"; // Go to welcome page
    } else {
      alert("Invalid username or password! Redirecting to signup page...");
      loginForm.reset();
      window.location.href = "signup.html"; // Auto redirect to signup
    }
  });
}


// === FORGOT PASSWORD ===
const forgotLink = document.querySelector(".forgot");
if(forgotLink){
  forgotLink.addEventListener("click", e=>{
    e.preventDefault();
    const savedUser = localStorage.getItem("username");

    if(!savedUser){
      alert("No account exists. Redirecting to signup page...");
      window.location.href = "signup.html";
      return;
    }

    const newPass = prompt("Enter new password:");
    if(newPass && newPass.trim() !== ""){
      localStorage.setItem("password", newPass.trim());
      alert("Password updated successfully!");
    } else {
      alert("Password not changed.");
    }
  });
}


// === WELCOME PAGE LOGOUT ===
const logoutBtn = document.getElementById("logoutBtn");
if(logoutBtn){
  logoutBtn.addEventListener("click", ()=>{
    alert("Logged out successfully!");
    window.location.href = "index.html";
  });
}

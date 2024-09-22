loginBtn.addEventListener("click", function () {
  if (loginPin.value === "1234") {
    loginForm.classList.add("hidden");
  }
});

logOutBtn.addEventListener("click", function () {
  loginForm.classList.remove("hidden");
});

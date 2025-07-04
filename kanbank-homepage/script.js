document.addEventListener("DOMContentLoaded", function () {
  const home = document.getElementById("homeNav");
  const settings = document.getElementById("settingsNav");

  if (home) {
    home.addEventListener("click", function () {
      window.location.href = "../kanbank-homepage/index.html";
    });
  }

  if (settings) {
    settings.addEventListener("click", function () {
      window.location.href = "../kanbank-menu/index.html";
    });
  }

  // accountsNav yönlendirmesi eklemek istersen:
  const accounts = document.getElementById("accountsNav");
  if (accounts) {
    accounts.addEventListener("click", function () {
      window.location.href = "../kanbank-accounts/index.html";
    });
  }
});

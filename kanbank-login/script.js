document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginBtn");

  console.log(loginButton);

  if (loginButton) {
    loginButton.addEventListener("click", function () {
      // Loading ekranını göster
      document.getElementById("loading-screen").style.display = "flex";

      // 1.5 saniye sonra yönlendir
      setTimeout(function () {
        window.location.href = "../kanbank-homepage/index.html";
      }, 3000);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const forgotLink = document.querySelector(".forgot-password");
  const resetMessage = document.getElementById("resetMessage");

  if (forgotLink) {
    forgotLink.addEventListener("click", function (e) {
      e.preventDefault(); // linkin varsayılan davranışını engelle

      // Mesajı göster
      resetMessage.style.display = "block";

      // 3 saniye sonra kaybolsun
      setTimeout(() => {
        resetMessage.style.display = "none";
      }, 5000);
    });
  }
});

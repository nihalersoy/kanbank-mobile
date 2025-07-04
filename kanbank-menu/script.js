document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.querySelector(".logout");

  document.addEventListener("click", function (e) {
  if (e.target.closest(".logout")) {
    const screen = document.getElementById("loading-screen");

    if (screen) {
      screen.style.display = "flex";
      setTimeout(() => {
        window.location.href = "../kanbank-login/index.html";
      }, 5000);
    }
  }
});

});
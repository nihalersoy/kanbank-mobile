document.addEventListener("DOMContentLoaded", function () {
  const payButton = document.querySelector(".pay-button");
  const amountInput = document.getElementById("amountInput");
  const dueDateInput = document.getElementById("dueDateInput");

  // £ simgesi ekle
  if (amountInput) {
    amountInput.addEventListener("input", function () {
      let val = amountInput.value;
      if (!val.startsWith("£")) {
        val = val.replace(/[^0-9.]/g, "");
        amountInput.value = "£" + val;
      }
    });
  }

  // Pay Now butonu
  if (payButton) {
    payButton.addEventListener("click", function () {
      const amount = amountInput?.value;
      const date = dueDateInput?.value;

      if (amount && date) {
        window.location.href = "../kanbank-payment-success/payment-success.html";
      } else {
        alert("Please fill in both Amount and Due Date.");
      }
    });
  }

  // Alt menü navigasyonları
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
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".transfer-form");
  const amountInput = document.getElementById("transferAmountInput");
  const recipientInput = document.getElementById("recipientInput");

  // Amount inputuna £ simgesi ekle
  if (amountInput) {
    amountInput.addEventListener("input", function () {
      let val = amountInput.value;

      if (!val.startsWith("£")) {
        val = val.replace(/[^0-9.]/g, ""); // Sadece sayı
        amountInput.value = "£" + val;
      }
    });
  }

  // Transfer işlemi
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const amount = amountInput.value.trim();
      const recipient = recipientInput.value.trim();

      if (amount && recipient) {
        window.location.href = "../kanbank-transfer-success/transfer-success.html";
      } else {
        alert("Please fill in both Recipient Account and Amount.");
      }
    });
  }

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
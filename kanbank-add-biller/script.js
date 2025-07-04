document.addEventListener("DOMContentLoaded", function () {
  const billerForm = document.querySelector(".biller-form");
  const billerMessage = document.getElementById("billerMessage");

  if (billerForm) {
    billerForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Formun varsayılan submit davranışını engelle

      // Başarılı mesajı göster
      billerMessage.style.display = "block";

      // 3 saniye sonra mesajı gizle
      setTimeout(() => {
        billerMessage.style.display = "none";
      }, 3000);

      // Formu isteğe bağlı olarak temizleyebilirsin:
      billerForm.reset();
    });
  }
});

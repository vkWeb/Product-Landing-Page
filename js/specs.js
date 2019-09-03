document
  .querySelector(".hello-phone-btn")
  .addEventListener("click", function() {
    document.querySelector(".hello-phone-specs").style.display = "table";
  });

document
  .querySelector(".hello-phone-pro-btn")
  .addEventListener("click", function() {
    document.querySelector(".hello-phone-specs").style.display = "none";
    document.querySelector(".hello-phone-pro-specs").style.display = "table";
  });

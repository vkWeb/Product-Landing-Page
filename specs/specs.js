/* Button toggle for base and pro models specifications */
document.querySelector(".base-btn").addEventListener("click", function() {
  document.querySelector(".pro-specs-head").style.display = "none";
  document.querySelector(".pro-specs").style.display = "none";
  document.querySelector(".base-specs-head").style.display = "block";
  document.querySelector(".base-specs").style.display = "table";
});

document.querySelector(".pro-btn").addEventListener("click", function() {
  document.querySelector(".base-specs-head").style.display = "none";
  document.querySelector(".base-specs").style.display = "none";
  document.querySelector(".pro-specs-head").style.display = "block";
  document.querySelector(".pro-specs").style.display = "table";
});

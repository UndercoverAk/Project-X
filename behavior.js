document.addEventListener("DOMContentLoaded", function (event) {
  var thumbnailElement = document.getElementById("smart_thumbnail");
  thumbnailElement.addEventListener("click", function () {
    ("I saw you click!");thumbnailElement.className !=""; 
     if (thumbnailElement.className == "") {
      thumbnailElement.classList.add("small");
    }
    else {
      thumbnailElement.classList.remove("small");
    }
  });
});

const imageUpload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");
const placeholder = document.getElementById("placeholder");

imageUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      preview.setAttribute("src", reader.result);
      preview.style.display = "block"; // show the image
      placeholder.style.display = "none"; // hide the + placeholder
    });
    reader.readAsDataURL(file);
  }
});
let dragFile = document.querySelector(".AppBody");
let imgBody = document.querySelector(".imgBody");
let textArea = dragFile.querySelector("h3");
let btn = dragFile.querySelector("button");
let input = dragFile.querySelector("input");
let myFile;
btn.addEventListener("click", function () {
  input.click();
});
input.addEventListener("change", function () {
  myFile = this.files[0];
  showFile();
});

dragFile.addEventListener("dragover", (event) => {
  event.preventDefault();
  textArea.textContent = "release to upload file";
});
dragFile.addEventListener("dragleave", () => {
  textArea.textContent = "Drag & Drop";
});

dragFile.addEventListener("drop", (event) => {
  event.preventDefault();
  myFile = event.dataTransfer.files[0];
  showFile();
});

let showFile = () => {
  let fileType = myFile.type;
  let validFile = ["image/jpg", "image/jpeg", "image/png"];
  if (validFile.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let imgUrl = fileReader.result;
      let img = `<img src=" ${imgUrl}" alt="">`;
      imgBody.innerHTML = img;
    };
    fileReader.readAsDataURL(myFile);
  } else {
    alert("only image file can upload");
  }
};

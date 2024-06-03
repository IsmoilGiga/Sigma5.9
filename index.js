let id = document.querySelector(".id");
let pass = document.querySelector(".pass");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (id.value === "123456" && pass.value === "78900") {
    alert("Siz bizga mars identifikatoringizni muvaffaqiyatli yubordingiz, endi barcha coinlaris meniki ╰(*°▽°*)╯")
  } else {
    alert("Siz hozir tizimga kira olmadingiz, men sizning hisobingizga kira olmayman va coinlarisni o'g'irlay olmayman")
  }
});
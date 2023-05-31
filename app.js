const a = document.getElementById("a-data");
const b = document.getElementById("b-data");
const c = document.getElementById("c-data");
const submit = document.querySelector(".btn");
const clear = document.querySelector(".clear");

submit.addEventListener("click", async () => {
  if (
    (a.value == "" && b.value == "") ||
    (a.value == "" && c.value == "") ||
    (c.value == "" && b.value == "")
  ) {
    if (confirm("กรอกตัวแปรอย่างน้อย 2 ตัว จะทำไม่ทำ") == false) {
      window.location.href = "https://www.youtube.com/watch?v=eCKzNkW5GMI";
    }
  } else if (a.value == "") {
    let result =
      Math.pow(parseFloat(c.value), 2) - Math.pow(parseFloat(b.value), 2);
    a.value = Math.sqrt(result);
  } else if (b.value == "") {
    let result =
      Math.pow(parseFloat(c.value), 2) - Math.pow(parseFloat(a.value), 2);
    b.value = Math.sqrt(result);
  } else {
    let result =
      Math.pow(parseFloat(a.value), 2) + Math.pow(parseFloat(b.value), 2);
    c.value = Math.sqrt(result);
  }
});

clear.addEventListener("click", async () => {
  if (confirm("แน่ใจนะว่าจะเคลียร์") == true) {
    a.value = "";
    b.value = "";
    c.value = "";
  }
});

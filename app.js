const a = document.getElementById("a-data");
const b = document.getElementById("b-data");
const c = document.getElementById("c-data");
const submit = document.querySelector(".btn");
const clear = document.querySelector(".clear");
const pow_input = document.querySelector(".pow");
const choices = document.getElementById("choices");
const btn_pow = document.querySelector(".btn-pow");
const answer = document.getElementById("answer");

btn_pow.addEventListener("click", async () => {
  let input = parseFloat(pow_input.value);
  let picked = choices.value;
  if (input == "" || isNaN(input)) {
    alert("กรุณาใส่ตัวเลข");
  } else if (picked == "pow") {
    let result = Math.pow(input, 2);
    answer.innerHTML = `${input} ยกกำลัง 2 มีค่าเท่ากับ ${result} `;
  } else {
    let result = Math.sqrt(input);
    answer.innerHTML = `รากที่ 2 ของ ${input} มีค่าเท่ากับ ${result} `;
  }
  pow_input.value = "";
});

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
  } else if (c.value == "") {
    let result =
      Math.pow(parseFloat(a.value), 2) + Math.pow(parseFloat(b.value), 2);
    c.value = Math.sqrt(result);
  } else if (
    Math.pow(parseFloat(c.value), 2) ===
    Math.pow(parseFloat(a.value), 2) + Math.pow(parseFloat(b.value), 2)
  ) {
    alert("เป็นสามเหลี่ยมมุมฉาก");
  } else {
    alert("ไม่เป็นสามเหลี่ยมมุมฉาก");
  }
});

clear.addEventListener("click", async () => {
  if (confirm("แน่ใจนะว่าจะเคลียร์") == true) {
    a.value = "";
    b.value = "";
    c.value = "";
  }
});

// ===== SECTION 1 =====

function convertToDecimal(num, type) {
  if (type == "desimal") return parseInt(num);
  if (type == "biner") return parseInt(num, 2);
  if (type == "oktal") return parseInt(num, 8);
  if (type == "heksa") return parseInt(num, 16);
}

function calculate() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let type1 = document.getElementById("type1").value;
  let type2 = document.getElementById("type2").value;

  let operator = document.getElementById("operator").value;

  let dec1 = convertToDecimal(num1, type1);
  let dec2 = convertToDecimal(num2, type2);

  let result;

  if (operator == "+") result = dec1 + dec2;
  else if (operator == "-") result = dec1 - dec2;
  else if (operator == "*") result = dec1 * dec2;
  else if (operator == "/") result = Math.floor(dec1 / dec2);

  document.getElementById("desimal").innerText = result;
  document.getElementById("biner").innerText = result.toString(2);
  document.getElementById("oktal").innerText = result.toString(8);
  document.getElementById("hexa").innerText = result.toString(16).toUpperCase();
  document.getElementById("romawi").innerText = toRoman(result);
}

// Romawi

function toRoman(num) {
  let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let sym = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let roman = "";

  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
      roman += sym[i];
      num -= val[i];
    }
  }

  return roman;
}

// ===== SECTION 2 =====

function convert2() {
  let angka = document.getElementById("inputAngka").value;

  if (angka === "") return;

  angka = parseInt(angka);

  document.getElementById("biner2").innerText = angka.toString(2);
  document.getElementById("oktal2").innerText = angka.toString(8);
  document.getElementById("heksa2").innerText = angka
    .toString(16)
    .toUpperCase();
  document.getElementById("romawi2").innerText = toRoman(angka);
}

const kalkulator = {
  tampilanangka: "0",
  operator: null,
  firstnumber: null,
  waitingforsecondnumber: false,
};
function updateDisplay() {
  document.querySelector("#tampilanangka").innerText = kalkulator.tampilanangka;
}
function clearkalkulator() {
  kalkulator.tampilanangka = "0";
  kalkulator.operator = null;
  kalkulator.firstNumber = null;
  kalkulator.waitingforsecondnumber = false;
}
function inputDigit(digit) {
  if (kalkulator.tampilanangka === "0") {
    kalkulator.tampilanangka = digit;
  } else {
    kalkulator.tampilanangka += digit;
  }
}
function inverseNumber() {
  if (kalkulator.tampilanangka === "0") {
    return;
  }
  kalkulator.tampilanangka = kalkulator.tampilanangka * -1;
}
function handleOperator(operator) {
  if (!kalkulator.waitingforsecondnumber) {
    kalkulator.operator = operator;
    kalkulator.waitingforsecondnumber = true;
    kalkulator.firstnumber = kalkulator.tampilanangka;
    kalkulator.tampilanangka = "0";
  } else {
    alert("operator sudah ditetapkan");
  }
}
function performCalculation() {
  if (kalkulator.firstnumber == null || kalkulator.operator == null) {
    alert("Anda belum menetapkan operator");
    return;
  }
  let result = 0;
  if (kalkulator.operator === "+") {
    result = parseInt(kalkulator.firstnumber) + parseInt(kalkulator.tampilanangka);
  } else if (kalkulator.operator === "-") {
    result = parseInt(kalkulator.firstnumber) - parseInt(kalkulator.tampilanangka);
  } else if (kalkulator.operator === "*") {
    result = parseInt(kalkulator.firstnumber) * parseInt(kalkulator.tampilanangka);
  } else {
    result = parseInt(kalkulator.firstnumber) / parseInt(kalkulator.tampilanangka);
  }
  kalkulator.tampilanangka = result;
}
const tombols = document.querySelectorAll(".tombol");
for (const tombol of tombols) {
  tombol.addEventListener("click", function (event) {
    // mendapatkan objek elemen yang diklik
    const target = event.target;

    if (target.classList.contains("clear")) {
      clearkalkulator();
      updateDisplay();
      return;
    }
    if (target.classList.contains("negative")) {
      inverseNumber();
      updateDisplay();
      return;
    }
    if (target.classList.contains("equal")) {
      performCalculation();
      updateDisplay();
      return;
    }
    if (target.classList.contains("operator")) {
      handleOperator(target.innerText);
      return;
    }
    inputDigit(target.innerText);
    updateDisplay();
  });
}

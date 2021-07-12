const screen = document.querySelector(".screen");
const btnAC = document.querySelector(".btnAC");
const btnAddGet = document.querySelector(".btnAddGet");
const btnBack = document.querySelector(".btnBack");
const btnSlash = document.querySelector(".btnSlash");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn0 = document.querySelector(".zero");
const btnX = document.querySelector(".btnX");
const btnAdd = document.querySelector(".btnAdd");
const btnGet = document.querySelector(".btnGet");
const btnComma = document.querySelector(".btnComma");
const btnEqual = document.querySelector(".btnEqual");
const words = {};
const all = [
  btnSlash,
  btn7,
  btn8,
  btn9,
  btn4,
  btn5,
  btn6,
  btn1,
  btn2,
  btn3,
  btn0,
  btnX,
  btnAdd,
  btnGet,
  btnComma,
];
all.forEach(function (el) {
  el.addEventListener("click", () => {
    screen.value.length > 9 ? alert("Hoop hemşerim nereye?") : null;
  });
});

// screen.value = Number(screen.value);
btnAC.onclick = () => {
  screen.value = "";
};

btnAddGet.onclick = () => {
  screen.value = String(-Number(screen.value));
};
btnBack.onclick = () => {
  screen.value = screen.value.slice(0, -1);
};

btn7.onclick = () => {
  screen.value += "7";
};
btn8.onclick = () => {
  screen.value += "8";
};
btn9.onclick = () => {
  screen.value += "9";
};
btn4.onclick = () => {
  screen.value += "4";
};
btn5.onclick = () => {
  screen.value += "5";
};
btn6.onclick = () => {
  screen.value += "6";
};
btn1.onclick = () => {
  screen.value += "1";
};
btn2.onclick = () => {
  screen.value += "2";
};
btn3.onclick = () => {
  screen.value += "3";
};
btn0.onclick = () => {
  screen.value += "0";
};
btnSlash.onclick = () => {
  screen.value.includes("+")
    ? null
    : screen.value.includes("-")
    ? null
    : screen.value.includes("x")
    ? null
    : screen.value.includes("/")
    ? null

    : screen.value
    ? (screen.value += "/")
    : null;
};
btnComma.onclick = () => {

     screen.value.includes(".")
    ? null
    : screen.value.includes('/')
    ? null


    : (screen.value += ".");
};
btnX.onclick = () => {
  screen.value.includes("+")
    ? null

    : screen.value.includes("-")
    ? null
    : screen.value.includes("x")
    ? null
    : screen.value.includes("/")
    ? null
    : screen.value
    ? (screen.value += "x")
    : null;
};
btnAdd.onclick = () => {
  screen.value.includes("+")
    ? null
    : screen.value.includes("-")
    ? null

    : screen.value.includes("x")
    ? null
    : screen.value.includes("/")
    ? null
 
    : screen.value
    ? (screen.value += "+")
    : null;
};
btnGet.onclick = () => {
  screen.value.includes("+")
    ? null
    : screen.value.includes("-")
    ? null
    : screen.value.includes("x")
    ? null
    : screen.value.includes("/")
    ? null

    : screen.value
    ? (screen.value += "-")
    : null;
};
btnEqual.onclick = () => {
    words.word1 ='';
    words.word2='';
    if (screen.value.includes('.')){
  if (screen.value[0] == ".") {
    screen.value = "0" + screen.value;}
   if (screen.value.includes(".")) {
    let counter = 1;
 
    for (i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      if (counter == 0) {
        break;
      }
      if (".1234567890".split("").includes(screen.value[i])) {
        words.word1 += screen.value[i];
      } else {
        counter--;
   
      }
    }
    let counter2 = 3
    for (i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        if (counter2 == 0) {
          break;
        }
        if ("1234567890".split("").includes(screen.value[i])) {
          counter2 ==1 ? words.word2 += screen.value[i]:null;
        } else {
          counter2--;
        }
      }
  }
}else{
    let counter = 1;
    for (i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        if (counter == 0) {
          break;
        }
        if ("1234567890".split("").includes(screen.value[i])) {
          words.word1 += screen.value[i];
        } else {
          counter--;
        }
      }
      counter = 2
      for (i in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        if (counter == 0) {
          break;
        }
        if ("1234567890".split("").includes(screen.value[i])) {
          counter == 1 ? words.word2 += screen.value[i]:null;
        } else {
          counter--;
       
        }
      }
}
[words.word1,words.word2] = [Number(words.word1),Number(words.word2)]
if (screen.value.includes('+')){
    screen.value = (words.word1 + words.word2).length>8 ? (words.word1 + words.word2).toFixed(4):(words.word1 + words.word2);
}
if (screen.value.includes('/')){
    screen.value = (words.word1 / words.word2).length>8 ? (words.word1 / words.word2).toFixed(4):(words.word1 / words.word2);
}
if (screen.value.includes('x')){
    screen.value = (words.word1 * words.word2).length>8 ? (words.word1 * words.word2).toFixed(4):(words.word1 * words.word2);
}
if (screen.value.includes('-')){
    screen.value = (words.word1 - words.word2).length>8 ? (words.word1 - words.word2).toFixed(4):(words.word1 - words.word2);
}



};

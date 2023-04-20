buttons = document.querySelectorAll(".btn");
let result = "";
let number = "";

const addResultToWindow = (value) => {
    resultPrint.textContent = value;
};

const addValue = (value) => {
    const operator = ["*", "/", "+", "-"]
    if (!operator.includes(result[result.length - 1]) && number === "") {
        result = "";
    }
    number += value;
    addResultToWindow(number);
};

const switchSign = () => {
    number = (-parseInt(number)).toString()
    addResultToWindow(number);
}

const percent = () => {
    calcResult()
    result = result/100;
    addResultToWindow(result);
};

const addsymbol = (value) => {
  calcResult();
  if (result) {
    result += value;
  }
};

const calcResult = () => {
  if (number) {
    result += number;
    number = "";
  }
  if (result) {
    result = eval(result).toString();
    if(result.length > 12) result = result.substring(0,12);
    addResultToWindow(result);
  }
};

const resetResult = () => {
  result = "";
  number = "";
  addResultToWindow("0");
};

const addStyle = (element) => {
  element.classList.add("pressed");
  setTimeout(() => {
    element.classList.remove("pressed");
  }, 2000);
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-symbols")) {
      if (e.target.classList.contains("btn-multiplication")) {
        addsymbol("*");
        addStyle(e.target);
      } else if (e.target.classList.contains("btn-division")) {
        addsymbol("/");
        addStyle(e.target);
      } else if (e.target.classList.contains("btn-equal")) {
        calcResult();
      } else if (e.target.classList.contains("btn-AC")) {
        resetResult();
      } else if (e.target.classList.contains("btn-sign")) {
        switchSign()
      } else if (e.target.classList.contains("btn-percent")) {
        percent()
      } else {
        addsymbol(e.target.textContent);
        addStyle(e.target);
      }
    } else {
      addValue(e.target.textContent);
    }
  });
});

let currentInput = "";


function clearInput() {
    currentInput = "";
    document.getElementById("monitor").value = "";
}

function appendValue(value) {
    currentInput += value;
    document.getElementById("monitor").value = currentInput;
  
}

function calculateResult() {
   try {
    currentInput = eval(currentInput);
    document.getElementById("monitor").value = currentInput;
   } catch  {
    document.getElementById("monitor").value = "ERROR";
   }
  }


function percentValue() {
    let passed = currentInput + "/100";
    currentInput = eval(passed);
}

function deleteValue() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById("monitor").value = currentInput;    
}

function pointValue() {
    currentInput += "0.";
    document.getElementById("monitor").value = currentInput;
}


function arithmeticValue(value) {
    if (currentInput.includes("+") || currentInput.includes("-") || currentInput.includes("*") || currentInput.includes("/")) {
      return false;
    }
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (currentInput.slice(-1) === "+" || currentInput.slice(-1) === "-" || currentInput.slice(-1) === "*" || currentInput.slice(-1) === "/") {
        return false;
      }
    }
    currentInput += value;
    document.querySelector("#monitor").value = currentInput;
  }
  document.querySelector("#monitor").value = currentInput;
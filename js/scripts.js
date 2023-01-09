function add(number1, number2) {
    return number1 + number2;
  }
  
  const number1 = parseInt(prompt("Enter a number:"));
  const number2 = parseInt(prompt("Enter another number:"));
  
  window.alert("Numbers added = " + add(number1, number2) +".");

  function subtract(number1, number2) {
    return number1 - number2;
  }

  window.alert("Numbers subtracted = " + subtract(number1, number2 + "."));

  function multiply(number1, number2) {
    return number1 * number2;
  }

  window.alert("Numbers multiplied = " + multiply(number1, number2) + ".");

  function divide(number1, number2) {
    return number1 / number2;
  }

  window.alert("Numbers divided = " + divide(number1, number2) + ".");

  
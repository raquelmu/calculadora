document.addEventListener("DOMContentLoaded", function(){
  let btnDivide = document.getElementById("btn-divide");
  let btnMultiply = document.getElementById("btn-multiply");
  let resultado = document.getElementById("resultado");
  let firstNumber = document.getElementById("first");
  let secondNumber = document.getElementById("second");
  
  btnMultiply.addEventListener("click", function(){
    
    let result = firstNumber.value * secondNumber.value;
    resultado.innerHTML = result
  })
  
  btnDivide.addEventListener("click", function(){
    let result = firstNumber.value / secondNumber.value;
    resultado.innerHTML = result;
  })
  
})


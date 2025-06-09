<script>
  import Display from "./Display.svelte";
  import Keyboard from "./Keyboard.svelte";

  let typedValue = "";
  let total = 0;
  let operationBeingMade = null;

  const value = (typedVal) => parseFloat(typedVal);

  function handleDigit(digit) {
    typedValue += digit;
  }

  function handleOperation(operation) {
    operationBeingMade = operation;
    total = value(typedValue);
    typedValue = "";
  }

  function handleResolve() {
    resolve();
    typedValue = total.toString();
  }

  function resolve() {
    switch (operationBeingMade) {
      case "sum":
        total += value(typedValue);
        break;
      case "subtract":
        total -= value(typedValue);
        break;
      case "multiply":
        total *= value(typedValue);
        break;
      case "divide":
        total /= value(typedValue);
        break;
    }
    typedValue = "";
  }

  function handleClear() {
    total = 0;
    typedValue = "";
  }
</script>

<div class="calculator">
  <Display value={typedValue} />
  <Keyboard
    onDigit={handleDigit}
    onOperation={handleOperation}
    onResolve={handleResolve}
    onClear={handleClear}
  />
</div>

<style>
  .calculator {
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
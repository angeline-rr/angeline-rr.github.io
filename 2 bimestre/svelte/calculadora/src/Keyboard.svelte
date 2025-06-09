<script>
  export let onDigit;
  export let onOperation;
  export let onResolve;
  export let onClear;
</script>

<div class="keyboard">
  <div class="first-row">
    <button on:click={() => onDigit("1")}>1</button>
    <button on:click={() => onDigit("2")}>2</button>
    <button on:click={() => onDigit("3")}>3</button>
    <button on:click={() => onOperation("sum")}>+</button>
  </div>
  <div class="second-row">
    <button on:click={() => onDigit("4")}>4</button>
    <button on:click={() => onDigit("5")}>5</button>
    <button on:click={() => onDigit("6")}>6</button>
    <button on:click={() => onOperation("subtract")}>-</button>
  </div>
  <div class="third-row">
    <button on:click={() => onDigit("7")}>7</button>
    <button on:click={() => onDigit("8")}>8</button>
    <button on:click={() => onDigit("9")}>9</button>
    <button on:click={() => onOperation("multiply")}>x</button>
  </div>
  <div class="last-row">
    <button on:click={onResolve}>=</button>
    <button on:click={() => onDigit("0")}>0</button>
    <button on:click={onClear}>C</button>
    <button on:click={() => onOperation("divide")}>÷</button>
  </div>
</div>

<style>
  button {
    background-color: rgb(71, 37, 102);
    margin: 5px;
    width: 6vw;
    height: 7vh;
    border: 0;
    border-radius: 11px;
    cursor: pointer;
    color: white;
    font-size: 25px;
  }
  button:hover {
    background-color: rgb(40, 21, 58);
  }

</style>
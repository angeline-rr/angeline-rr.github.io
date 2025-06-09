<script>
  export let value = "";
</script>

<input id="console" type="text" readonly bind:value={value} />
<style>
  input {
    width: 25vw;
    height: 8vh;
    color: rgb(71, 37, 102);
    outline: 0;
    border: 3px solid rgb(71, 37, 102);
    border-radius: 5px;
    font-size: 25px;
    text-align: right;
    padding: 0 10px;
    margin-bottom: 10px;
  }
</style>
<template>
  <div class="container-fluid completo">
    <div class="row">
      <div class="col-xs-6 col-xs-offset-3 caixa">
        <h2 class="text-center">Dados gravados!!</h2>
      </div>
      <div class="col-xs-6 col-xs-offset-3 caixa-corpo">
        <img src="../../assets/concluido.png" alt class="text-center img-responsive">
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.completo {
  z-index: 3000;
  position: fixed;
  background: #ecf0f1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.caixa {
  
  margin-top: 10%;
  background-color: green;
  color: white;
  padding: 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.caixa-corpo {
  margin-top: 0;
  color: green;
  border: 2px solid green;
  padding: 20px;
}
.caixa-corpo img {
  display: block;
  margin: 0 auto;
  width: 256px;
}
</style>



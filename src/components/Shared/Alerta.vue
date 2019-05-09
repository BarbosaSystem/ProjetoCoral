<template>
  <div class="alert alert-danger alert-dismissible text-justify"  style="margin-top:10px">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
    <h4>
      <i class="icon fa fa-ban"></i> Alerta!
    </h4> {{mensagem}}
    <!-- Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire
    soul, like these sweet mornings of spring which I enjoy with my whole heart. -->
  </div>
</template>
<script>
export default {
    props:['mensagem']
    /* methods: {
        onClose(){
            this.$emit('dismissed')
        }
    } */
};
</script>


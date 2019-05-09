<template>
    <input placeholder="__/__/____" required class="form-control"/>
</template>
<script>
export default {
    data(){
        return {
            date: null
        }
    },
    computed() {
        this.date = this.data
    },
    props:['dateFormat', 'data'],
    mounted: function() {
        var self = this
        $(this.$el).datepicker({
            dateFormat: this.dateFormat,
            dayNamesMin: [ "Dom", "Seg", "Tee", "Qua", "Qui", "Sex", "Sab" ],
            monthNames: [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
            monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
            onSelect: function (date){
                self.$emit('update-date', date)
            }
        });
        /* $(this.$el).datepicker({
            //mudar formato da data
            dateFormat: "dd/mm/yy",
            dayNamesMin: [ "Dom", "Seg", "Tee", "Qua", "Qui", "Sex", "Sab" ]
        }); */
    },
    beforeDestroy: function (){
        $(this.$el).datepicker('hide').datepicker('destroy');
    }
}
</script>


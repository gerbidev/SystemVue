var app = new Vue({
    el: '#app',
    data : {
        lista: [
        ], 
        nombre :'',
        promedio : ''
    },
    methods : {
        agregarNota: function (){
            estadoA=false;
            if(this.promedio>=12.5){
                estadoA=true;
            }
            if(this.nombre!="" && this.promedio!=""){
                this.lista.push({nombre:this.nombre, promedio:this.promedio, estado:estadoA})
                this.hombre="";
                this.promedio=""
            }
            else{
                alert("Ingrese un nombre u promedio del estudiante")
            }
        }

    }
})
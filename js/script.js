const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            success: true
        }
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
        this.success = result.data.response;
        })
    },
}).mount('#app')
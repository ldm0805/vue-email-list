const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            emailListArray: [],
        }
    },
    methods: {
        clickEmailRandom(){
            // Ciclo per inserire le mail nell'array vuoto.
            for(let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=> {
                    this.email = result.data.response;
                    this.emailListArray.push(this.email);
                })
            }
        }
        
    },
}).mount('#app')